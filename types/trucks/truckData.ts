import { TruckStatus } from "./truckStatus";

export interface TruckData {
  id?: number;
  code: string;
  name: string;
  status: TruckStatus;
  description: string;
}
