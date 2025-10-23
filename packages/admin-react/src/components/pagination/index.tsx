'use client';
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
  dataTestId?: string;
}

export const AdminPagination = ({
  page,
  totalPage,
  onClickNextPage,
  onClickPrevPage,
  nextPageBtnDisabled = false,
  prevPageBtnDisabled = false,
  style,
  className,
  dataTestId,
}: Props) => {
  return (
    <ul
      className={classNames('pagination', className)}
      style={style}
      data-testid={dataTestId}
    >
      <li>
        <button
          className="page-button"
          aria-label="Previous page"
          onClick={onClickPrevPage}
          disabled={prevPageBtnDisabled}
          data-testid={dataTestId ? `${dataTestId}-prev-button` : undefined}
        >
          <LeftArrow />
        </button>
      </li>

      <li
        className="page-info"
        data-testid={dataTestId ? `${dataTestId}-page-info` : undefined}
      >{`${page}/${totalPage}`}</li>

      <li>
        <button
          className="page-button"
          aria-label="Next page"
          onClick={onClickNextPage}
          disabled={nextPageBtnDisabled}
          data-testid={dataTestId ? `${dataTestId}-next-button` : undefined}
        >
          <RightArrow />
        </button>
      </li>
    </ul>
  );
};
