import classNames from 'classnames';
import React, { type CSSProperties } from 'react';
import '../../css/pagination.css';
import { LeftArrow } from './LeftArrow';
import { RightArrow } from './RightArrow';

interface Props {
  page: number;
  totalPage: number;
  onClickNextPage?: () => void;
  onClickPrevPage?: () => void;
  nextPageBtnDisabled?: boolean;
  prevPageBtnDisabled?: boolean;
  style?: CSSProperties;
  className?: string;
}

export const Pagination = ({
  page,
  totalPage,
  onClickNextPage,
  onClickPrevPage,
  nextPageBtnDisabled = false,
  prevPageBtnDisabled = false,
  style,
  className,
}: Props) => {
  return (
    <ul className={classNames('pagination', className)} style={style}>
      <li>
        <button
          className="page-button"
          aria-label="Previous page"
          onClick={onClickPrevPage}
          disabled={prevPageBtnDisabled}
        >
          <LeftArrow />
        </button>
      </li>

      <li className="page-info">{`${page}/${totalPage}`}</li>

      <li>
        <button
          className="page-button"
          aria-label="Next page"
          onClick={onClickNextPage}
          disabled={nextPageBtnDisabled}
        >
          <RightArrow />
        </button>
      </li>
    </ul>
  );
};
