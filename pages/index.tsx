import Layout from "@/components/global/Layout";
import TrucksList from "@/sections/TrucksList";
import { connectionAPI, useGetTrucksQuery } from "@/store/api";
import { wrapper } from "@/store/store";
import { GetServerSideProps } from "next";

const Home = () => {
  return (
    <Layout>
      <TrucksList />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    const dispatch = store.dispatch as any;

    dispatch(connectionAPI.endpoints.getTrucks.initiate({ page: 1 }));

    await Promise.all(
      store.dispatch(connectionAPI.util.getRunningQueriesThunk())
    );

    return {
      props: {},
    };
  });

export default Home;
