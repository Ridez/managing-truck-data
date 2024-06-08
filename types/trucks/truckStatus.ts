export enum TruckStatus {
  OUT_OF_SERVICE = "OUT_OF_SERVICE",
  LOADING = "LOADING",
  TO_JOB = "TO_JOB",
  AT_JOB = "AT_JOB",
  RETURNING = "RETURNING",
}

export const TruckStatusLabels: Record<TruckStatus, string> = {
  [TruckStatus.OUT_OF_SERVICE]: "Out of Service",
  [TruckStatus.LOADING]: "Loading",
  [TruckStatus.TO_JOB]: "To Job",
  [TruckStatus.AT_JOB]: "At Job",
  [TruckStatus.RETURNING]: "Returning",
};
