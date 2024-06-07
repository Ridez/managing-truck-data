import { TruckStatus, TruckStatusLabels } from "@/types/trucks/truckStatus";
import React from "react";

interface CustomSelectProps {
  value: TruckStatus;
  initialStatus: TruckStatus;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const StatusSelect: React.FC<CustomSelectProps> = ({
  value,
  initialStatus,
  onChange,
}) => {
  const options = Object.values(TruckStatus);

  const isOptionDisabled = (option: TruckStatus) => {
    // If no initialStatus or the current status is "OUT_OF_SERVICE", allow all options
    if (!initialStatus || initialStatus === TruckStatus.OUT_OF_SERVICE)
      return false;
    // Allow selecting the current value or the initial value
    if (option === value || option === initialStatus) return false;

    switch (initialStatus) {
      case TruckStatus.LOADING:
        return option !== TruckStatus.TO_JOB;
      case TruckStatus.TO_JOB:
        return option !== TruckStatus.AT_JOB;
      case TruckStatus.AT_JOB:
        return option !== TruckStatus.RETURNING;
      case TruckStatus.RETURNING:
        return option !== TruckStatus.LOADING;
      default:
        return true;
    }
  };

  return (
    <select
      name="status"
      value={value}
      onChange={onChange}
      className="block w-full p-2 border rounded mt-1"
    >
      {!initialStatus && (
        <option value="" disabled selected>
          Select status
        </option>
      )}
      {options.map((option) => (
        <option key={option} value={option} disabled={isOptionDisabled(option)}>
          {TruckStatusLabels[option]}
        </option>
      ))}
    </select>
  );
};

export default StatusSelect;
