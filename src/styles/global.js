import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif
  }
`;

export default GlobalStyle;

export const Buttom = styled.button`
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgb(166 168 169);
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
  float: right;
  transition: 2s;

  &:hover {
    opacity: 0.3;
  }
`;

export const Input = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 90%;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f0f2f5;
  border: none;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 20px;
  position: relative;
  z-index:9999;
`;

export const Title = styled.h2``;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;
export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;
export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;
export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const LabelSignin = styled.div`
font-size: 16px;
color: #676767;
`;

export const AreaInput = styled.div`
  width: 100%;
  background-color: #f0f2f5;
  display:flex;
  margin:auto;
  align-items: center
`
export const Eyes = styled.div``

export const App = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: rgba(0,0,0,0.4);
  color: #fff;

  z-index: 9999;

  & input {
    padding: .7rem 1.5rem;
    font-size: 1.2rem;
    border-radius: 25px;
    border: 1px solid rgba(255,255,255, 0.8);
    background: rgba(255,255,255, 0.1);
    color: #f8f8f8;
  }

  ::placeholder {
    color: #f8f8f8;
   }
  }
`

