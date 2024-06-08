export const updateTruck = {
  query: ({ id, requestBody }: { id: number; requestBody: any }) => {
    return {
      url: `/trucks/${id}`,
      method: "PUT",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    };
  },
  invalidatesTags: ["Trucks"],
};
