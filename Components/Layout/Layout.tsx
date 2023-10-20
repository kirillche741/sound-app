import React, { FC, ReactNode } from "react";
import { Header } from "../Header/Header";
import { styled } from "@linaria/react";
import { SideBar } from "../SideBar/SideBar";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const Wrapper = styled.div`
    padding: 24px;
  `;
  const Content = styled.div`
    margin-left: 25px;
  `;
  return (
    <Wrapper>
      <div>
        <Header />
      </div>
      <Content>
        <SideBar />
        {children}
      </Content>
    </Wrapper>
  );
};
