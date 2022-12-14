import React, { useState, useEffect } from "react";
import Layout from "./components/layout";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 }
`;

export default function App() {
  // const [post, setPosts] = useState(null);

  return (
    <React.StrictMode>
      <GlobalStyle />
      <Layout />
    </React.StrictMode>
  );
}
