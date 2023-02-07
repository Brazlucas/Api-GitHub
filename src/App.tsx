import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Appstyled, Title } from "./Styles.js";
import { FaGithub } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Appstyled>
      <Title>GitHub Finder <FaGithub style={{marginLeft: "8px", width: "30px"}}/></Title>
      <Outlet />
    </Appstyled>
  )
}

export default App
