import React, { useState } from "react";
import styled from "styled-components";

const CategoryWrapper = styled.div`
  border: 1px solid #eaeff9;
  border-radius: 10px;
  padding: 20px;
`;

const Caret = styled.div`
  width: 20px;
  height: 20px;
  background: teal;
  transform: ${({ show }) => (show ? "rotate(0deg)" : "rotate(45deg)")};
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CategorySubHeader = styled.div`
  border-top: 1px solid #eaeff9;
  border-bottom: 1px solid #eaeff9;
`;

const ToggleContainer = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
`;

const CategoryItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Category() {
  const [show, setShow] = useState(true);
  function handleClick() {
    setShow(!show);
  }
  return (
    <CategoryWrapper>
      <CategoryHeader onClick={handleClick}>
        Kategorie
        <Caret show={show} />
      </CategoryHeader>
      <ToggleContainer show={show}>
        <CategorySubHeader>Všechny produkty</CategorySubHeader>
        <div>
          <CategoryItem>
            <p> Sedací soupravy </p>
            <p>820</p>
          </CategoryItem>
          <CategoryItem>
            <p>Obývací stěny</p>
            <p>23</p>
          </CategoryItem>
          <CategoryItem>
            <p>Křesla</p>
            <p>18</p>
          </CategoryItem>
          <CategoryItem>
            <p>Lenošky</p>
            <p>31</p>
          </CategoryItem>
          <CategoryItem>
            <p>Postele</p>
            <p>4</p>
          </CategoryItem>
        </div>
      </ToggleContainer>
    </CategoryWrapper>
  );
}
