import { Link, useNavigate, useParams } from 'react-router-dom'
import { Repository } from '../../types/repos.js';
import { UserCard, Items, Button, CountContainer, Count } from './Styles.js'
import { FaCode } from 'react-icons/fa'
import { FiBook } from 'react-icons/fi'
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai'

const RepoResults = ({ name, language, forks, stargazers_count }: Repository) => {
  const navigate = useNavigate();
  const { userName } = useParams();

  return (
    <UserCard>
      <Items>
        <h3>{name}</h3>
        <FaCode style={{ marginTop: "20px" }} /> {language !== null ? language : <span style={{ "color": "#4A5C75" }}>Linguagem não específicada</span>}
        <CountContainer>
          <Count>
            <AiOutlineStar style={{ "height": "22px", "width": "22px" }} />
            <h4>{stargazers_count}</h4>
          </Count>
          <Count>
            <AiOutlineFork style={{ "height": "22px", "width": "22px" }} />
            <h4>{forks}</h4>
          </Count>
        </CountContainer>
        <Link to={`https://github.com/${userName}/${name}`}>
          <Button> Ver código <FiBook style={{ marginLeft: "8px" }} /></Button>
        </Link>
      </Items>
    </UserCard>
  )
}

export default RepoResults;