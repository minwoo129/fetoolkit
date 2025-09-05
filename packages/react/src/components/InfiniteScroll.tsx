/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import type { ReactNode, CSSProperties } from 'react';
import { throttle } from 'throttle-debounce';
import { ThresholdUnits, parseThreshold } from '../utils/threshold';

type Fn = () => void;
interface Props {
  /**
   * 스크롤 영역 하단에 도달했을 때 호출하는 이벤트
   * - 페이징을 위한 데이터 fetching에 사용
   */
  onEndReached?: Fn;
  /**
   * 스크롤 영역 하단에 도달했을 때 ```onEndReached``` 이벤트를 호출할지 여부 결정
   * - default: false
   */
  hasMore?: boolean;
  children: ReactNode;
  /**
   * 다음 데이터를 fetching하는 동안 보여줄 fallback UI 컴포넌트
   */
  loader?: ReactNode;
  /**
   * InfiniteScroll이 다음에 호출할 시점을 정의하는 임계값
   * - default: 0.8
   * - 기본값이 0.8인 경우, 사용자가 전체 스크롤 높이의 80% 이상 내려갔을 때 ```onEndReached``` 이벤트가 호출된다는 뜻
   */
  scrollThreshold?: number | string;
  /**
   * 스크롤 영역 하단에 도달했을 때 보여줄 메시지
   * - 기본적으로 ```hasMore```가 false일 때만 보여짐
   */
  endMessage?: ReactNode;
  style?: CSSProperties;
  /**
   * 고정 높이 스크롤 컨텐츠를 사용하고 싶은 경우, 그 때 지정할 높이값
   */
  height?: number | string;
  /**
   * InfiniteScroll 구성 요소에 오버플로 스크롤바를 이미 제공하고 있는 (부모) DOM 요소에 대한 참조
   * - DOM 요소의 ID를 등록하면, 해당 ID를 가진 DOM 요소가 스크롤 영역으로 사용됨
   */
  scrollableTarget?: ReactNode;
  /**
   * 스크롤 영역에 자식 요소가 있는지 여부
   */
  hasChildren?: boolean;
  /**
   * InfiniteScroll을 최상단에 설정할지 여부
   */
  inverse?: boolean;
  /**
   * 화면을 아래로 당려 새로 고침 기능을 활성화할지 여부
   */
  pullDownToRefresh?: boolean;
  /**
   * 화면을 아래로 당겨 새로 고침 기능을 사용할 때, 새로 고침이 시작되기 전에 보여줄 컴포넌트
   */
  pullDownToRefreshContent?: ReactNode;
  /**
   * 화면을 아래로 당겨 새로 고침 기능을 사용할 때, 새로 고침이 시작된 후 보여줄 컴포넌트
   */
  releaseToRefreshContent?: ReactNode;
  /**
   * 사용자가 새로고침을 위해 당겨야 하는 최소 거리
   */
  pullDownToRefreshThreshold?: number;
  /**
   * 새로고침을 위해 호출하는 함수
   */
  refreshFunction?: Fn;
  /**
   * 스크롤 이벤트가 발생할 때마다 호출되는 함수
   */
  onScroll?: (e: MouseEvent) => void;
  /**
   * 스크롤 영역의 데이터 길이
   */
  dataLength: number;
  /**
   * 초기 스크롤 위치
   */
  initialScrollY?: number;
  className?: string;
}

interface State {
  showLoader: boolean;
  pullToRefreshThresholdBreached: boolean;
  prevDataLength: number | undefined;
}

export default class InfiniteScroll extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showLoader: false,
      pullToRefreshThresholdBreached: false,
      prevDataLength: props.dataLength,
    };

    this.throttledOnScrollListener = throttle(150, this.onScrollListener).bind(
      this,
    );
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  private throttledOnScrollListener: (e: MouseEvent) => void;
  private _scrollableNode: HTMLElement | undefined | null;
  private el: HTMLElement | undefined | (Window & typeof globalThis);
  private _infScroll: HTMLDivElement | undefined;
  private lastScrollTop = 0;
  private actionTriggered = false;
  private _pullDown: HTMLDivElement | undefined;

  // variables to keep track of pull down behaviour
  private startY = 0;
  private currentY = 0;
  private dragging = false;

  // will be populated in componentDidMount
  // based on the height of the pull down element
  private maxPullDownDistance = 0;

  componentDidMount() {
    if (typeof this.props.dataLength === 'undefined') {
      throw new Error(
        `mandatory prop "dataLength" is missing. The prop is needed` +
          ` when loading more content. Check README.md for usage`,
      );
    }

    this._scrollableNode = this.getScrollableTarget();
    this.el = this.props.height
      ? this._infScroll
      : this._scrollableNode || window;

    if (this.el) {
      this.el.addEventListener(
        'scroll',
        this.throttledOnScrollListener as EventListenerOrEventListenerObject,
      );
    }

    if (
      typeof this.props.initialScrollY === 'number' &&
      this.el &&
      this.el instanceof HTMLElement &&
      this.el.scrollHeight > this.props.initialScrollY
    ) {
      this.el.scrollTo(0, this.props.initialScrollY);
    }

    if (this.props.pullDownToRefresh && this.el) {
      this.el.addEventListener('touchstart', this.onStart);
      this.el.addEventListener('touchmove', this.onMove);
      this.el.addEventListener('touchend', this.onEnd);

      this.el.addEventListener('mousedown', this.onStart);
      this.el.addEventListener('mousemove', this.onMove);
      this.el.addEventListener('mouseup', this.onEnd);

      // get BCR of pullDown element to position it above
      this.maxPullDownDistance =
        (this._pullDown &&
          this._pullDown.firstChild &&
          (this._pullDown.firstChild as HTMLDivElement).getBoundingClientRect()
            .height) ||
        0;
      this.forceUpdate();

      if (typeof this.props.refreshFunction !== 'function') {
        throw new Error(
          `Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`,
        );
      }
    }
  }

  componentWillUnmount() {
    if (this.el) {
      this.el.removeEventListener(
        'scroll',
        this.throttledOnScrollListener as EventListenerOrEventListenerObject,
      );

      if (this.props.pullDownToRefresh) {
        this.el.removeEventListener('touchstart', this.onStart);
        this.el.removeEventListener('touchmove', this.onMove);
        this.el.removeEventListener('touchend', this.onEnd);

        this.el.removeEventListener('mousedown', this.onStart);
        this.el.removeEventListener('mousemove', this.onMove);
        this.el.removeEventListener('mouseup', this.onEnd);
      }
    }
  }

  componentDidUpdate(prevProps: Props) {
    // do nothing when dataLength is unchanged
    if (this.props.dataLength === prevProps.dataLength) return;

    this.actionTriggered = false;

    // update state when new data was sent in
    this.setState({
      showLoader: false,
    });
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    const dataLengthChanged = nextProps.dataLength !== prevState.prevDataLength;

    // reset when data changes
    if (dataLengthChanged) {
      return {
        ...prevState,
        prevDataLength: nextProps.dataLength,
      };
    }
    return null;
  }

  getScrollableTarget = () => {
    if (this.props.scrollableTarget instanceof HTMLElement)
      return this.props.scrollableTarget;
    if (typeof this.props.scrollableTarget === 'string') {
      return document.getElementById(this.props.scrollableTarget);
    }
    if (this.props.scrollableTarget === null) {
      console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `);
    }
    return null;
  };

  onStart: EventListener = (evt: Event) => {
    if (this.lastScrollTop) return;

    this.dragging = true;

    if (evt instanceof MouseEvent) {
      this.startY = evt.pageY;
    } else if (evt instanceof TouchEvent) {
      this.startY = evt.touches[0].pageY;
    }
    this.currentY = this.startY;

    if (this._infScroll) {
      this._infScroll.style.willChange = 'transform';
      this._infScroll.style.transition = `transform 0.2s cubic-bezier(0,0,0.31,1)`;
    }
  };

  onMove: EventListener = (evt: Event) => {
    if (!this.dragging) return;

    if (evt instanceof MouseEvent) {
      this.currentY = evt.pageY;
    } else if (evt instanceof TouchEvent) {
      this.currentY = evt.touches[0].pageY;
    }

    // user is scrolling down to up
    if (this.currentY < this.startY) return;

    if (
      this.currentY - this.startY >=
      Number(this.props.pullDownToRefreshThreshold)
    ) {
      this.setState({
        pullToRefreshThresholdBreached: true,
      });
    }

    // so you can drag upto 1.5 times of the maxPullDownDistance
    if (this.currentY - this.startY > this.maxPullDownDistance * 1.5) return;

    if (this._infScroll) {
      this._infScroll.style.overflow = 'visible';
      this._infScroll.style.transform = `translate3d(0px, ${
        this.currentY - this.startY
      }px, 0px)`;
    }
  };

  onEnd: EventListener = () => {
    this.startY = 0;
    this.currentY = 0;

    this.dragging = false;

    if (this.state.pullToRefreshThresholdBreached) {
      this.props.refreshFunction && this.props.refreshFunction();
      this.setState({
        pullToRefreshThresholdBreached: false,
      });
    }

    requestAnimationFrame(() => {
      // this._infScroll
      if (this._infScroll) {
        this._infScroll.style.overflow = 'auto';
        this._infScroll.style.transform = 'none';
        this._infScroll.style.willChange = 'unset';
      }
    });
  };

  isElementAtTop(target: HTMLElement, scrollThreshold: string | number = 0.8) {
    const clientHeight =
      target === document.body || target === document.documentElement
        ? window.screen.availHeight
        : target.clientHeight;

    const threshold = parseThreshold(scrollThreshold);

    if (threshold.unit === ThresholdUnits.Pixel) {
      return (
        target.scrollTop <=
        threshold.value + clientHeight - target.scrollHeight + 1
      );
    }

    return (
      target.scrollTop <=
      threshold.value / 100 + clientHeight - target.scrollHeight + 1
    );
  }

  isElementAtBottom(
    target: HTMLElement,
    scrollThreshold: string | number = 0.8,
  ) {
    const clientHeight =
      target === document.body || target === document.documentElement
        ? window.screen.availHeight
        : target.clientHeight;

    const threshold = parseThreshold(scrollThreshold);

    if (threshold.unit === ThresholdUnits.Pixel) {
      return (
        target.scrollTop + clientHeight >= target.scrollHeight - threshold.value
      );
    }

    return (
      target.scrollTop + clientHeight >=
      (threshold.value / 100) * target.scrollHeight
    );
  }

  onScrollListener = (event: MouseEvent) => {
    if (typeof this.props.onScroll === 'function') {
      // Execute this callback in next tick so that it does not affect the
      // functionality of the library.
      setTimeout(() => this.props.onScroll && this.props.onScroll(event), 0);
    }

    const target =
      this.props.height || this._scrollableNode
        ? (event.target as HTMLElement)
        : document.documentElement.scrollTop
          ? document.documentElement
          : document.body;

    // return immediately if the action has already been triggered,
    // prevents multiple triggers.
    if (this.actionTriggered) return;

    const atBottom = this.props.inverse
      ? this.isElementAtTop(target, this.props.scrollThreshold)
      : this.isElementAtBottom(target, this.props.scrollThreshold);

    // call the `next` function in the props to trigger the next data fetch
    if (atBottom && (this.props.hasMore ?? false)) {
      this.actionTriggered = true;
      this.setState({ showLoader: true });
      this.props.onEndReached?.();
    }

    this.lastScrollTop = target.scrollTop;
  };

  render() {
    const style = {
      height: this.props.height || 'auto',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      ...this.props.style,
    } as CSSProperties;
    const hasChildren =
      this.props.hasChildren ||
      !!(
        this.props.children &&
        this.props.children instanceof Array &&
        this.props.children.length
      );

    // because heighted infiniteScroll visualy breaks
    // on drag down as overflow becomes visible
    const outerDivStyle =
      this.props.pullDownToRefresh && this.props.height
        ? { overflow: 'auto' }
        : {};
    return (
      <div
        style={outerDivStyle}
        className="infinite-scroll-component__outerdiv"
      >
        <div
          className={`infinite-scroll-component ${this.props.className || ''}`}
          ref={(infScroll: HTMLDivElement | null) => {
            this._infScroll = infScroll ?? undefined;
          }}
          style={style}
        >
          {this.props.pullDownToRefresh && (
            <div
              style={{ position: 'relative' }}
              ref={(pullDown: HTMLDivElement) => {
                this._pullDown = pullDown ?? undefined;
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: -1 * this.maxPullDownDistance,
                }}
              >
                {this.state.pullToRefreshThresholdBreached
                  ? this.props.releaseToRefreshContent
                  : this.props.pullDownToRefreshContent}
              </div>
            </div>
          )}
          {this.props.children}
          {!this.state.showLoader &&
            !hasChildren &&
            (this.props.hasMore ?? false) &&
            this.props.loader}
          {this.state.showLoader &&
            (this.props.hasMore ?? false) &&
            this.props.loader}
          {!(this.props.hasMore ?? false) && this.props.endMessage}
        </div>
      </div>
    );
  }
}
