import React from "react";
import Pagination from "rc-pagination";
import NextIcon from "./icons/NextIcon";
import PrevIcon from "./icons/PrevIcon";
import en_US from "rc-pagination/lib/locale/en_US";

interface CustomPaginationProps {
  setCurrentPage: (page: number) => void;
  pageSize?: number;
  totalSize?: number;
  currentPage?: number;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  setCurrentPage,
  pageSize,
  totalSize,
  currentPage,
}) => {
  const onChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex items-center bg-white p-4 border-t border-neutral-400 rounded-b-lg w-full h-16 text-neutral-600">
      <Pagination
        showLessItems
        className="flex w-full relative"
        onChange={onChange}
        current={currentPage}
        total={totalSize}
        defaultCurrent={1}
        showSizeChanger
        pageSize={pageSize}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total}`}
        nextIcon={<NextIcon />}
        prevIcon={<PrevIcon />}
        locale={en_US}
      />
    </div>
  );
};

export default CustomPagination;
