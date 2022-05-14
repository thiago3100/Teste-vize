
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import { Container } from "../../styles/global";
import { Title } from "../../styles/global";


const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Home</Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair 
      </Button>
    </Container>
  );
};

export default Home;
