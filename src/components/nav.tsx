import React, { useState } from "react";
import styled from "styled-components";
import { BLUE, WHITE } from "../colors";

const NavTab = styled.div`
  background: ${({ active }) => (active ? BLUE : WHITE)};
  color: ${({ active }) => (active ? WHITE : BLUE)};
  padding-top: 40px;
`;

const NavWrapper = styled.div`
  border: 1px solid #eaeff9;
  border-radius: 50px;
`;

const navData = [
  { id: 1, text: "Kategorie", active: true },
  { id: 2, text: "Oblíbené", active: false },
  { id: 3, text: "Doporučené", active: false },
];

export default function Nav() {
  const [routes, setRoutes] = useState(navData);
  function handleClick(e) {
    setRoutes(
      routes.map((route) => {
        console.log(e.target.id);
        return route.id === parseInt(e.target.id)
          ? { ...route, active: true }
          : { ...route, active: false };
      })
    );
  }
  return (
    <NavWrapper>
      {routes.map(({ id, text, active }) => (
        <NavTab key={id} id={id} active={active} onClick={handleClick}>
          {text}
        </NavTab>
      ))}
    </NavWrapper>
  );
}
