import React from "react";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import { useDeleteTruckMutation } from "@/store/api";
import { TruckData } from "@/types/trucks/truckData";

interface DeleteTruckProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  truck?: TruckData;
}

const DeleteTruck: React.FC<DeleteTruckProps> = ({
  showModal,
  setShowModal,
  truck,
}) => {
  const [
    deleteTruck,
    {
      isError: isErrorDeleteTruck,
      isSuccess: isSuccessDeleteTruck,
      isLoading: isLoadingDeleteTruck,
    },
  ] = useDeleteTruckMutation();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    deleteTruck({ id: truck?.id });
  };

  return (
    <>
      {showModal && (
        <Modal show={showModal} onClose={handleCloseModal}>
          <h2>Delete Truck</h2>
          {!isSuccessDeleteTruck && !isErrorDeleteTruck && (
            <>
              <p>Are you sure you want to delete {truck?.name} truck?</p>
              <div className="block mt-4">
                <Button
                  onClick={handleCloseModal}
                  variant="secondary"
                  className="mr-2"
                >
                  Close
                </Button>
                <Button variant="primary" onClick={handleDelete}>
                  Confirm
                </Button>
                {isLoadingDeleteTruck && (
                  <span className="ml-2">Removing truck...</span>
                )}
              </div>
            </>
          )}
          {isSuccessDeleteTruck && (
            <>
              <p>The "{truck?.name}" truck successfuly deleted.</p>
              <div className="block mt-4">
                <Button variant="primary" onClick={handleCloseModal}>
                  Ok
                </Button>
              </div>
            </>
          )}
          {isErrorDeleteTruck && (
            <>
              <p>Something went wrong, please try again.</p>
              <div className="block mt-4">
                <Button variant="primary" onClick={handleCloseModal}>
                  Ok
                </Button>
              </div>
            </>
          )}
        </Modal>
      )}
    </>
  );
};

export default DeleteTruck;
