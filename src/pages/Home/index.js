
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import { Container } from "../../styles/global";
import React, { useState } from 'react'
import './Styled.scss'

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  
  return (
   
            <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
              Sair 
            </Button>
  );
};

export default Home;
