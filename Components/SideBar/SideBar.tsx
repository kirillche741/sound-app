import React, { FC } from "react";
import { styled } from "@linaria/react";
import Link from "next/link";
import Image from "next/image";

type SideBarProps = {
  page: string;
};

export const SideBar: FC<SideBarProps> = ({ page }) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 72px;
    padding: 24px 0;
    gap: 20px;
  `;
  const Inside = styled.div`
    padding: 0 15px;
    cursor: pointer;
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
  const InsideHome = styled.div`
    cursor: pointer;
  `;
  return (
    <Wrapper>
      <Option>
        <Link href={"/"}>
          <InsideHome>
            <Image
              src={page === "Home" ? "/Icon/HomeActive.svg" : "/Icon/Home.svg"}
              alt="HomePage"
              width={72}
              height={72}
            />
          </InsideHome>
        </Link>
        <Link href={"/playlist"}>
          {page === "playlist" ? (
            <InsideHome>
              <Image
                src={"/Icon/playlistActive.svg"}
                alt="playlist"
                width={72}
                height={72}
              />
            </InsideHome>
          ) : (
            <Inside>
              <Image
                src={"/Icon/playlist.svg"}
                alt="playlist"
                width={38}
                height={38}
              />
            </Inside>
          )}
        </Link>
        <Link href={"/radio"}>
          <Inside>
            <Image src="/Icon/radio.svg" alt="radio" width={38} height={38} />
          </Inside>
        </Link>
        <Link href={"/videos"}>
          <Inside>
            <Image src="/Icon/videos.svg" alt="videos" width={38} height={38} />
          </Inside>
        </Link>
      </Option>
      <Login>
        <Inside>
          <Image src="/Icon/profile.svg" alt="profile" width={38} height={38} />
        </Inside>
        <Inside>
          <Image src="/Icon/Logout.svg" alt="logout" width={38} height={38} />
        </Inside>
      </Login>
    </Wrapper>
  );
};
