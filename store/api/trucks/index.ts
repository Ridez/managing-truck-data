import { addTruck } from "./addTruck";
import { getTrucks } from "./getTrucks";
import { updateTruck } from "./updateTruck";

export const trucksEndpoints = (builder: any) => ({
  getTrucks: builder.query(getTrucks),
  updateTruck: builder.mutation(updateTruck),
  addTruck: builder.mutation(addTruck),
});
