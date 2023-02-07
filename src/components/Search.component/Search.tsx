type SearchProps = {
  loadUser: (username: string) => Promise<void>
}

import { SearchContainer, InputContainer, Button, Input } from "./Styles.js";

import { useState, KeyboardEvent } from 'react';

import { BsSearch } from 'react-icons/bs';

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUsername] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === "Enter") {
      loadUser(userName);
    }
  }

  return (
    <SearchContainer>
      <h2>Busque por usuário</h2>
      <p>Conheça seus melhores repositórios</p>
      <InputContainer>
        <Input 
          type="text"
          placeholder='Digite o nome do usuário'
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={() => loadUser(userName)}>
          <BsSearch />
        </Button>
      </InputContainer>
    </SearchContainer>
  )
}

export default Search;