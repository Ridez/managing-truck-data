export const deleteTruck = {
  query: ({ id }: { id: number }) => {
    return {
      url: `/trucks/${id}`,
      method: "DELETE",
    };
  },
  invalidatesTags: ["Trucks"],
};
