import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "@/components/Button";
import Input from "@/components/Input";
import StatusSelect from "@/components/StatusSelect";
import { useAddTruckMutation, useUpdateTruckMutation } from "@/store/api";
import { TruckStatus } from "@/types/trucks/truckStatus";
import { TruckData } from "@/types/trucks/truckData";

interface TruckFormProps {
  initialData?: TruckData;
  onClose: () => void;
  isEditMode: boolean;
}

const TruckForm: React.FC<TruckFormProps> = ({
  initialData,
  onClose,
  isEditMode,
}) => {
  const { control, handleSubmit, reset, setError } = useForm<TruckData>({
    defaultValues: initialData || {
      code: "",
      name: "",
      status: undefined,
      description: "",
    },
  });

  const [initialStatus, setInitialStatus] = useState<TruckStatus>(
    initialData?.status || TruckStatus.LOADING
  );

  const [
    addTruck,
    {
      error: errorCreateTruck,
      isError: isErrorCreateTruck,
      isSuccess: isSuccessCreateTruck,
      isLoading: isLoadingCreateTruck,
    },
  ] = useAddTruckMutation<any>();

  const [
    updateTruck,
    {
      error: errorUpdateTruck,
      isError: isErrorUpdateTruck,
      isSuccess: isSuccessUpdateTruck,
      isLoading: isLoadingUpdateTruck,
    },
  ] = useUpdateTruckMutation<{
    error: { data: { code: string } };
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
  }>();

  useEffect(() => {
    if (initialData) {
      setInitialStatus(initialData.status || "");
      reset(initialData);
    }
  }, [initialData, reset]);

  useEffect(() => {
    if (
      errorCreateTruck?.data?.code === "NOT_UNIQUE" ||
      errorUpdateTruck?.data?.code === "NOT_UNIQUE"
    ) {
      setError("code", {
        type: "manual",
        message: "Truck code must be unique.",
      });
    }
  }, [errorCreateTruck, errorUpdateTruck, setError]);

  const onSubmit = (data: TruckData) => {
    if (isEditMode) {
      updateTruck({ id: data.id, requestBody: data });
    } else {
      addTruck({ requestBody: data });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!isSuccessCreateTruck &&
        !isSuccessUpdateTruck &&
        !isErrorCreateTruck &&
        !isErrorUpdateTruck && (
          <>
            <Controller
              name="code"
              control={control}
              rules={{
                required: "Truck code is required.",
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: "Code must be alphanumeric.",
                },
              }}
              render={({
                field: { onChange, ref, value, name },
                fieldState: { error },
              }) => (
                <Input
                  label="Code"
                  error={!!error}
                  errorMessage={error?.message}
                  onChange={onChange}
                  ref={ref}
                  value={value}
                  id={name}
                  className="mb-4"
                />
              )}
            />

            <Controller
              name="name"
              control={control}
              rules={{
                required: "Name is required.",
              }}
              render={({
                field: { onChange, ref, value, name },
                fieldState: { error },
              }) => (
                <Input
                  label="Name"
                  error={!!error}
                  errorMessage={error?.message}
                  onChange={onChange}
                  ref={ref}
                  value={value}
                  id={name}
                  className="mb-4"
                />
              )}
            />

            <Controller
              name="status"
              control={control}
              rules={{
                required: "Status is required.",
              }}
              render={({
                field: { onChange, ref, value, name },
                fieldState: { error },
              }) => (
                <div className="mb-4">
                  <label className="pb-3 text-base font-medium text-neutral-20 transition-all duration-300 ease-in-out pointer-events-none">
                    Status
                  </label>
                  <StatusSelect
                    value={value}
                    initialStatus={initialStatus}
                    onChange={onChange}
                  />
                  {error && (
                    <p className="text-red-600 text-sm">{error.message}</p>
                  )}
                </div>
              )}
            />

            <Controller
              name="description"
              control={control}
              render={({
                field: { onChange, ref, value, name },
                fieldState: { error },
              }) => (
                <Input
                  label="Description"
                  error={!!error}
                  errorMessage={error?.message}
                  onChange={onChange}
                  ref={ref}
                  value={value}
                  id={name}
                  type="textarea"
                  optional
                />
              )}
            />

            <div className="block mt-4">
              <Button onClick={onClose} variant="secondary" className="mr-2">
                Close
              </Button>
              <Button type="submit" variant="primary">
                {isEditMode ? "Update" : "Add"}
              </Button>
              {isLoadingCreateTruck && (
                <span className="ml-2">Creating truck...</span>
              )}
              {isLoadingUpdateTruck && (
                <span className="ml-2">Updateing truck...</span>
              )}
            </div>
          </>
        )}
      {isSuccessCreateTruck && (
        <>
          <p>Truck successfuly created.</p>
          <div className="block mt-4">
            <Button variant="primary" onClick={onClose}>
              Ok
            </Button>
          </div>
        </>
      )}

      {isSuccessUpdateTruck && (
        <>
          <p>Truck successfuly updated.</p>
          <div className="block mt-4">
            <Button variant="primary" onClick={onClose}>
              Ok
            </Button>
          </div>
        </>
      )}

      {(isErrorCreateTruck || isErrorUpdateTruck) && (
        <>
          <p>Something went wrong, please try again.</p>
          <div className="block mt-4">
            <Button variant="primary" onClick={onClose}>
              Ok
            </Button>
          </div>
        </>
      )}
    </form>
  );
};

export default TruckForm;
