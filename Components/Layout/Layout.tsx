import React from "react";
import { Header } from "../Header/Header";
import { styled } from "@linaria/react";

export const Layout = () => {
  const Wrapper = styled.div`
    padding: 24px;
  `;
  return (
    <Wrapper>
      <div>
        <Header />
      </div>
    </Wrapper>
  );
};
