import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import React from "react";

const Container = styled.div`
  width: 100%;
  mex-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;


const Title = styled.h2``;
function App() {
  return (
   <>
  <Container>
    <Title>USÚARIOS</Title>
    <Form/>
  </Container>
   <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
    <GlobalStyle />
   </>
  );
}

export default App;
