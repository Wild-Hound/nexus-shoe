import React from "react";
// @ts-ignore
import styled from "styled-components";
import icon from "../public/sneakers.png";
import Image from "next/dist/client/image";
import HoverMenu from "./HoverMenu";
import SearchBar from "./SearchBar";

const ParentWrapper = styled("div")`
  background-color: #1e272e;
`;
const NavWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 1em;
  max-width: 1500px;
  margin: auto;
`;

const BrandIcon = styled("div")`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const BrandText = styled("p")`
  margin: 0;
  color: white;
  margin-left: 1rem;
  font-size: 1.35rem;
  font-weight: 600;
`;

const HeaderNav = () => {
  return (
    <ParentWrapper>
      <NavWrapper>
        <BrandIcon>
          <Image src={icon} width={60} height={60} />
          <BrandText>Nexus Shoes</BrandText>
        </BrandIcon>
        <SearchBar />
        <HoverMenu />
      </NavWrapper>
    </ParentWrapper>
  );
};

export default HeaderNav;
