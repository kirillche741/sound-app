import React, { useRef, useState } from "react";
import { styled } from "@linaria/react";
import { useClickAway } from "react-use";
import Image from "next/image";

type InputProps = {
  state: boolean;
};

export const Header = () => {
  const Wrapper = styled.div`
    display: flex;
    margin-left: 32px;
    align-items: center;
    margin-bottom: 40px;
  `;
  const Search = styled.div`
    display: flex;
    padding: 27px;
  `;
  const Logo = styled.div`
    padding-right: 8px;
  `;
  const Photo = styled.div`
    padding-right: 24px;
  `;
  const SearchField = styled.input<InputProps>`
    color: #fff;
    font-weight: 600;
    background-color: #1d2123;
    border: ${(p) => (p.state ? "0.5px solid rgba(255, 255, 255)" : "none")};
  `;
  const FormWrapper = styled.form``;

  const [search, setSearch] = useState(false);
  const closeSearch = () => setSearch(false);
  const ref = useRef(null);
  useClickAway(ref, closeSearch);

  return (
    <Wrapper ref={ref}>
      <Logo>
        <Image src="/Icon/logo.svg" alt="logo" width={44} height={44} />
      </Logo>
      <Search>
        <Photo>
          <Image src="/Icon/search.svg" alt="search" width={16} height={16} />
        </Photo>
        <FormWrapper>
          <SearchField
            onChange={() => setSearch(true)}
            state={search}
            placeholder="Поиск"
          />
        </FormWrapper>
      </Search>
    </Wrapper>
  );
};
