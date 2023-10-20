import type { NextPage } from "next";
import React from "react";
import { Layout } from "../Components/Layout/Layout";

const Playlist: NextPage = () => {
  return (
    <div>
      <Layout page={"playlist"}>Playlist</Layout>
    </div>
  );
};

export default Playlist;
