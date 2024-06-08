import { TruckData } from "@/types/trucks/truckData";

export const getTrucks = {
  query: ({ page, limit }: { page: number; limit: number }) => {
    return {
      url: `/trucks?page=${page}&limit=${limit}`,
    };
  },
  transformResponse: (response: TruckData[], meta: { response: Response }) => {
    return { response, total: meta.response.headers.get("x-total-count") };
  },
  providesTags: ["Trucks"],
};
