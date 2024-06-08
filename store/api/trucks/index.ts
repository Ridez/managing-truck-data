import { addTruck } from "./addTruck";
import { deleteTruck } from "./deleteTruck";
import { getTrucks } from "./getTrucks";
import { updateTruck } from "./updateTruck";

export const trucksEndpoints = (builder: any) => ({
  getTrucks: builder.query(getTrucks),
  updateTruck: builder.mutation(updateTruck),
  addTruck: builder.mutation(addTruck),
  deleteTruck: builder.mutation(deleteTruck),
});
