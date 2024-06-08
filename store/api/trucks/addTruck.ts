export const addTruck = {
  query: ({ requestBody }: { id: number; requestBody: any }) => {
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
