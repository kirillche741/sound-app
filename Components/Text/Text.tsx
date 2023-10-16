import React, { FC, ReactNode } from "react";
import { styled } from "@linaria/react";

type TextProps = {
  color?: "lightGray" | "white";
  children: ReactNode;
};

export const Text: FC<TextProps> = ({ children, color, ...props }) => {
  const Wrapper = styled.div<TextProps>`
    color: ${(i) => {
      switch (i.color) {
        case "lightGray":
          return "rgba(255, 255, 255, 0.25)";
        default:
          return "#fff";
      }
    }};
  `;
  return (
    <Wrapper {...props} color={color}>
      {children}
    </Wrapper>
  );
};
