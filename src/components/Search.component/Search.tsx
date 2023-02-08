type SearchProps = {
  loadUser: (username: string) => Promise<void>
}

import { SearchContainer, InputContainer, Button, Input, Text } from "./Styles.js";
import { useState, KeyboardEvent } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
 
const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUsername] = useState("");
  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === "Enter") {
      if (userName) {
        loadUser(userName);
      };
    };
  };

  const clearUserName = () => {
    window.location.reload()
  };

  return (
    <SearchContainer>
      <h2>Busque por um usuário</h2>
      <Text>Conheça seus melhores repositórios!</Text>
      <InputContainer>
        <Input 
          type="text"
          placeholder='Digite o nome do usuário'
          onChange={(e: any) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={() => loadUser(userName)}>
          <BsSearch />
        </Button>
        <Button onClick={clearUserName}>
          <FaTrash />
        </Button>
      </InputContainer>
    </SearchContainer>
  )
}

export default Search;