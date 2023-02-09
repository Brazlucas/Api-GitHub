import { useNavigate } from 'react-router-dom'
import { Repository } from '../../types/repos.js';
import { UserCard, Items, Button } from './Styles.js'
import { FaCode } from 'react-icons/fa'
import { FiBook } from 'react-icons/fi'

const RepoResults = ({ name, owner, language }: Repository) => {
  const navigate = useNavigate();

  return (
    <UserCard>
      <Items>
        <h3>{name}</h3>
        <FaCode style={{marginTop: "20px"}} /> {language !== null ? language : "Linguagem não específicada"}
        <p>{owner}</p>
        <Button onClick={() => navigate('/')}>Ver código <FiBook style={{marginLeft: "8px"}} /></Button>
      </Items>
    </UserCard>
  )
}

export default RepoResults;