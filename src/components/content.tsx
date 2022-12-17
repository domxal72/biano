import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  border: 1px solid #eaeff9;
  border-radius: 10px;
  padding: 20px;
`;

const Filter = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 18px;
`;

const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 130px;
  height: 115px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 15px #afb3c84d;
  border-radius: 10px;
`;

const Img = styled.div`
  width: 50px;
  height: 50px;
  background: teal;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductItemImg = styled.div`
  width: 80px;
  height: 150px;
  background: teal;
  align-self: center;
`;

const Available = styled.div`
  background: lightgreen;
  color: green;
`;

const AddButton = styled.button`
  align-self: flex-start;
  background: #f58a8a;
  color: white;
  border-radius: 25px;
  padding 15px;
`;

export default function Content() {
  return (
    <ContentWrapper>
      <p>Nábytek</p>
      <Filter>
        <FilterItem>
          <Img />
          <p>Rozkládací</p>
        </FilterItem>
        <FilterItem>
          <Img />
          <p>Šedé</p>
        </FilterItem>
        <FilterItem>
          <Img />
          <p>Moderní</p>
        </FilterItem>
        <FilterItem>
          <Img />
          <p>Skandinávské</p>
        </FilterItem>
        <FilterItem>
          <Img />
          <p>Kožené</p>
        </FilterItem>
        <FilterItem>
          <Img />
          <p>Retro</p>
        </FilterItem>
      </Filter>
      <ProductGrid>
        <ProductItem>
          <ProductItemImg />
          <Available>Skladem</Available>
          <p>4Home vánoční povlak na polštářek Red Nordic</p>
          <p>149 kč</p>
          <AddButton>+ Do studia</AddButton>
        </ProductItem>
        <ProductItem>
          <ProductItemImg />
          <Available>Skladem</Available>
          <p>4Home vánoční povlak na polštářek Reindeer 40 x 40 cm</p>
          <p>149 kč</p>
          <AddButton>+ Do studia</AddButton>
        </ProductItem>
        <ProductItem>
          <ProductItemImg />
          <Available>Skladem</Available>
          <p>4Home vánoční povlak na polštářek Šedý puntík</p>
          <p>149 kč</p>
          <AddButton>+ Do studia</AddButton>
        </ProductItem>
        <ProductItem>
          <ProductItemImg />
          <Available>Skladem</Available>
          <p>4Home vánoční povlak na polštářek Red Nordic</p>
          <p>149 kč</p>
          <AddButton>+ Do studia</AddButton>
        </ProductItem>
      </ProductGrid>
    </ContentWrapper>
  );
}
