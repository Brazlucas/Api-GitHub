import { useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Appstyled, Title, Button, Footer} from "./Styles.js";
import { FaGithub } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  const { userName } = useParams();
  
  return (
    <div>
      { userName ? <><Button onClick={() => navigate('/')}>Voltar</Button></> : <></>}
      <Appstyled>
        <Title>GitHub Finder <FaGithub style={{ marginLeft: "8px", width: "30px" }} /></Title>
        <Outlet />
      </Appstyled>
      <Footer>
        <p>GitHub API &copy; | Desenvolvido por: Brazlucas</p>
      </Footer>
    </div>
  )
}

export default App
