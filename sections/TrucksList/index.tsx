import Button from "@/components/Button";
import Table from "@/components/Table";
import { useGetTrucksQuery } from "@/store/api";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import React, { useState } from "react";
import EditTruck from "./EditTruck";
import AddTruck from "./AddTruck";
import { TruckData } from "@/types/trucks/truckData";
import DeleteTruck from "./DeleteTruck";
import { TruckStatus, TruckStatusLabels } from "@/types/trucks/truckStatus";

const TrucksList = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTruck, setSelectedTruck] = useState<TruckData>();
  const [deleteTruck, setDeleteTruck] = useState<TruckData>();
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: trucks,
    isFetching,
    isError,
    error,
  } = useGetTrucksQuery<any>({
    page: currentPage,
    limit: 5,
  });

  const columnHelper = createColumnHelper<TruckData>();

  const handleEdit = (truck: TruckData) => {
    setSelectedTruck(truck);
  };

  const handleDelete = (truck: TruckData) => {
    setDeleteTruck(truck);
    setShowDeleteModal(true);
  };

  const columns: ColumnDef<TruckData, any>[] = [
    columnHelper.accessor("id", {
      header: "Id",
      cell: (info) => {
        return info.getValue() || 0;
      },
    }),
    columnHelper.accessor("code", {
      header: "Code",
      cell: (info) => {
        return info.getValue() || "-";
      },
    }),
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => {
        return info.getValue() || "-";
      },
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => {
        return TruckStatusLabels[info.getValue() as TruckStatus] || "-";
      },
    }),
    columnHelper.accessor("description", {
      header: "Description",
      cell: (info) => {
        return info.getValue() || "-";
      },
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const { id } = row.original;
        return (
          <div className="flex gap-4">
            <Button variant="warning" onClick={() => handleEdit(row.original)}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => handleDelete(row.original)}>
              Delete
            </Button>
          </div>
        );
      },
    }),
  ];

  return (
    <div>
      <h1>TrucksList</h1>
      <Button
        onClick={() => setShowAddModal(true)}
        variant="primary"
        className="mb-2"
      >
        Add New Truck
      </Button>
      {isError && <div>Error: {error.message}</div>}
      <Table
        columns={columns}
        data={trucks?.response || []}
        isLoading={isFetching}
        showPagination
        pageSize={5}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalSize={trucks?.total}
      />
      <AddTruck showModal={showAddModal} setShowModal={setShowAddModal} />
      <EditTruck
        selectedTruck={selectedTruck}
        setSelectedTruck={setSelectedTruck}
      />
      <DeleteTruck
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        truck={deleteTruck}
        setDeleteTruck={setDeleteTruck}
      />
    </div>
  );
};

export default TrucksList;
