import React from "react";
// @ts-ignore
import styled from "styled-components";

const LinksWrapper = styled("div")``;
const Links = styled("ul")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
  max-width: 1500px;
  gap: 1.5em;
  margin: auto;
  padding: 1rem;
`;
const Link = styled("li")`
  font-size: 1.05rem;
  font-weight: 600;
`;

const QuickLinks = () => {
  return (
    <LinksWrapper>
      <Links>
        <Link>MEN</Link>
        <Link>WOMEN</Link>
        <Link>CHILDREN</Link>
        <Link>SCHOOL SHOES</Link>
      </Links>
    </LinksWrapper>
  );
};

export default QuickLinks;
