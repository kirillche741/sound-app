import React from "react";
import { styled } from "@linaria/react";
import Image from "next/image";

export const SideBar = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 72px;
    padding: 24px 0;
    gap: 20px;
  `;
  const Inside = styled.div`
    padding: 0 15px;
  `;
  const Option = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1a1e1f;
    border-radius: 32px;
    padding: 24px 0;
    gap: 31px;
  `;
  const Login = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1a1e1f;
    border-radius: 32px;
    padding: 24px 0;
    gap: 31px;
  `;
  return (
    <Wrapper>
      <Option>
        <Image src="/Icon/Home.svg" alt="HomePage" width={72} height={72} />
        <Inside>
          <Image
            src="/Icon/playlist.svg"
            alt="playlist"
            width={38}
            height={38}
          />
        </Inside>
        <Inside>
          <Image src="/Icon/radio.svg" alt="radio" width={38} height={38} />
        </Inside>
        <Inside>
          <Image src="/Icon/videos.svg" alt="videos" width={38} height={38} />
        </Inside>
      </Option>
      <Login>
        <Inside>
          <Image src="/Icon/profile.svg" alt="videos" width={38} height={38} />
        </Inside>
        <Inside>
          <Image src="/Icon/Logout.svg" alt="videos" width={38} height={38} />
        </Inside>
      </Login>
    </Wrapper>
  );
};
