import type { NextPage } from "next";
import React from "react";
import { Layout } from "../Components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Layout page={"Home"}>Home</Layout>
    </div>
  );
};

export default Home;
