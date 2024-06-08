import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { trucksEndpoints } from "./trucks";

const API_URL = process.env.NEXT_PUBLIC_MANAGING_TRUCKS_API_URL;

const connectionAPI = createApi({
  reducerPath: "connectionAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    ...trucksEndpoints(builder),
  }),
  tagTypes: ["Trucks"],
});

export const {
  useGetTrucksQuery,
  useUpdateTruckMutation,
  useAddTruckMutation,
} = connectionAPI;

export { connectionAPI };

export const apiMiddleware = connectionAPI.middleware;
