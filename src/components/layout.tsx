import React from "react";
import styled from "styled-components";
import { BLUE, WHITE } from "../colors";
import Category from "./category";
import Content from "./content";
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
  @media only screen and (min-width: 600px) {
    top: -15px;
    right: -15px;
    left: initial;
    box-shadow: 0px 5px 15px #afb3c84d;
    border: 1px solid #eaeff9;
  }
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: ${WHITE};
  border-radius: 50%;
  cursor: pointer;
`;

const PageHeader = styled.div`
  @media only screen and (min-width: 600px) {
    display: none;
  }
  display: block;
`;

const Grid = styled.div`
  display: grid;
`;

const Header = styled.div`
  display: flex;
`;

export default function Layout() {
  return (
    <Body>
      <Main>
        <Header>
          <CloseButton>x</CloseButton>
          <PageHeader>Vyberte produkt</PageHeader>
        </Header>
        <Nav />
        <Grid>
          <Category />
          <Content />
        </Grid>
      </Main>
    </Body>
  );
}
