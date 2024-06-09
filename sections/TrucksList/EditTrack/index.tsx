import React from "react";
import Modal from "@/components/Modal";
import TruckForm from "@/components/trucks/TruckForm";
import { TruckData } from "@/types/trucks/truckData";

interface EditTruckProps {
  selectedTruck?: TruckData;
  setSelectedTruck: (truck?: TruckData) => void;
}

const EditTrack: React.FC<EditTruckProps> = ({
  selectedTruck,
  setSelectedTruck,
}) => {
  const handleCloseModal = () => {
    setSelectedTruck(undefined);
  };

  return (
    <>
      {selectedTruck && (
        <Modal show={!!selectedTruck} onClose={handleCloseModal}>
          <h2>Edit Truck</h2>
          <TruckForm
            initialData={selectedTruck}
            onClose={handleCloseModal}
            isEditMode
          />
        </Modal>
      )}
    </>
  );
};

export default EditTrack;
