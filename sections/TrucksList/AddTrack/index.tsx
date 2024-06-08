import React from "react";
import Modal from "@/components/Modal";
import TruckForm from "@/components/trucks/TruckForm";

interface AddTrackProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

const AddTrack: React.FC<AddTrackProps> = ({ showModal, setShowModal }) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal show={showModal} onClose={handleCloseModal}>
          <h2>Add New Truck</h2>
          <TruckForm onClose={handleCloseModal} isEditMode={false} />
        </Modal>
      )}
    </>
  );
};

export default AddTrack;
