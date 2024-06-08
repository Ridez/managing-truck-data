import React, { useMemo } from "react";
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import CustomPagination from "./CustomPagination";
import Loader from "./icons/Loader";

type TableProps<TData> = {
  columns: ColumnDef<TData>[];
  data: TData[];
  isLoading?: boolean;
  manualPagination?: boolean;
  currentPage?: number;
  setCurrentPage: (page: number) => void;
  pageSize?: number;
  showPagination?: boolean;
  totalSize?: number;
};

const Table = <TData extends object>({
  columns,
  data,
  isLoading,
  manualPagination = false,
  showPagination = false,
  currentPage,
  setCurrentPage,
  pageSize,
  totalSize,
}: TableProps<TData>) => {
  const columnData = useMemo(() => columns, [columns]);
  const rowData = useMemo(() => data, [data]);

  const table = useReactTable({
    data: rowData,
    columns: columnData,
    getCoreRowModel: getCoreRowModel(),
    manualSorting: true,
    manualPagination,
  });

  return (
    <div className="overflow-scroll">
      <table className="my-auto border size-full">
        <thead className="">
          {table.getHeaderGroups().map((headerGroup, headerGroupIdx) => (
            <tr
              key={headerGroupIdx}
              className="border-b text-gray-800 uppercase"
            >
              {headerGroup.headers.map((header, headerIdx) => (
                <th
                  key={headerIdx}
                  className="px-4 pr-2 py-4 font-medium text-left"
                  style={{ width: `${header.column.getSize()}px` }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="">
          {isLoading ? (
            <tr className="border-b">
              <td colSpan={columns.length} className="">
                <div>
                  <Loader className="ml-auto mr-auto mt-8 mb-8" />
                </div>
              </td>
            </tr>
          ) : table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row, i) => (
              <tr key={i} className={""}>
                {row.getVisibleCells().map((cell, cellIdx) => (
                  <td key={cellIdx} className="px-4 pt-[14px] pb-[18px]">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="">
                No
              </td>
            </tr>
          )}
        </tbody>
        {showPagination && (
          <tfoot>
            <tr>
              <td colSpan={columns.length}>
                <CustomPagination
                  totalSize={totalSize}
                  setCurrentPage={setCurrentPage}
                  pageSize={pageSize}
                  currentPage={currentPage}
                />
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};

export default Table;
