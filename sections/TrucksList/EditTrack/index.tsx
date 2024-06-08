import React from "react";
import Modal from "@/components/Modal";
import TruckForm from "@/components/trucks/TruckForm";

interface EditTrackProps {
  selectedTruck: any;
  setSelectedTruck: (truck: any) => void;
}

const EditTrack: React.FC<EditTrackProps> = ({
  selectedTruck,
  setSelectedTruck,
}) => {
  const handleCloseModal = () => {
    setSelectedTruck(null);
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
