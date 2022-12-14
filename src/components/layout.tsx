import React from "react";
import styled from "styled-components";
import { BLUE, WHITE } from "../colors";
import Nav from "./nav";

const Body = styled.div`
  background: ${BLUE};
  padding-top: 40px;
`;

const Main = styled.div`
  position: relative;
  background: ${WHITE};
  max-width: 1280px;
  margin: 0px auto;
  padding: 30px 30px 30px 40px;
  box-shadow: 0px 5px 15px #afb3c84d;
  border: 1px solid #eaeff9;
  border-radius: 35px;
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -15px;
  right: -15px;
  width: 50px;
  height: 50px;
  background: ${WHITE};
  border-radius: 50%;
  box-shadow: 0px 5px 15px #afb3c84d;
  cursor: pointer;
  border: 1px solid #eaeff9;
`;

export default function Layout() {
  return (
    <Body>
      <Main>
        <Nav />
        <CloseButton>x</CloseButton>
      </Main>
    </Body>
  );
}
