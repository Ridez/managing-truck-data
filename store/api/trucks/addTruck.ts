import { TruckData } from "@/types/trucks/truckData";

export const addTruck = {
  query: ({ requestBody }: { id: number; requestBody: TruckData }) => {
    return {
      url: `/trucks`,
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    };
  },
  invalidatesTags: ["Trucks"],
};
