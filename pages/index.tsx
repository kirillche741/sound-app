import type { NextPage } from "next";
import React from "react";
import styles from "../styles/Home.module.css";
import { Header } from "../Components/Header/Header";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};

export default Home;
