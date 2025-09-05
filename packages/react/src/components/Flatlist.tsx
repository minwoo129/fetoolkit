/* eslint-disable no-unused-vars */
import React from 'react';
import type { ComponentProps, ComponentType, ReactNode } from 'react';
import InfiniteScroll from './InfiniteScroll';

type RenderItemType<T> = (args: { item: T; index: number }) => ReactNode;

type KeyExtractorType<T> = (item: T, index: number) => string;

interface Props<T>
  extends Omit<
    ComponentProps<typeof InfiniteScroll>,
    'children' | 'dataLength'
  > {
  /** 데이터 목록 */
  datas: T[];
  /** 렌더링해서 보여줄 아이템 컴포넌트 */
  renderItem: RenderItemType<T>;
  /**
   * key props에 적용할 key값을 변환하는 함수
   * - 대용량 데이터를 다루는 것을 기반으로 하기 때문에 단순 index로만 key props를 적용할 수 없음!!!
   */
  keyExtractor: KeyExtractorType<T>;
  /**
   * 아이템 컴포넌트 사이에 보여줄 구분선 컴포넌트
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ItemDividerComponent?: ComponentType<any>;
  /**
   * 스크롤 영역의 데이터 길이
   * - default: 0
   */
  dataLength?: number;
}

interface FlatListRenderItemWrapperProps {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ItemDividerComponent?: ComponentType<any>;
  isDividerVisible: boolean;
}

export const Flatlist = <T,>({
  datas,
  keyExtractor,
  renderItem,
  ItemDividerComponent,
  dataLength = 0,
  ...props
}: Props<T>) => {
  return (
    <InfiniteScroll {...props} dataLength={dataLength}>
      {datas.map((item, index) => {
        return (
          <FlatListRenderItemWrapper
            isDividerVisible={index !== datas.length - 1}
            ItemDividerComponent={ItemDividerComponent}
            key={keyExtractor(item, index)}
          >
            {renderItem({ item, index })}
          </FlatListRenderItemWrapper>
        );
      })}
    </InfiniteScroll>
  );
};

const FlatListRenderItemWrapper = ({
  children,
  ItemDividerComponent,
  isDividerVisible,
}: FlatListRenderItemWrapperProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
      {isDividerVisible && ItemDividerComponent && <ItemDividerComponent />}
    </div>
  );
};
