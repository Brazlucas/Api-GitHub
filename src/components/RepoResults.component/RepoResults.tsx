// import { Link } from 'react-router-dom'
import { Repository } from '../../types/repos.js';
import { UserCard, Items } from './Styles.js'
import { FaCode } from 'react-icons/fa'

const RepoResults = ({ name, owner }: Repository) => {
  return (
    <UserCard>
      <Items>
        <h3>{name}</h3>
        <FaCode style={{marginTop: "20px"}} />
        <p>{owner}</p>
      </Items>
    </UserCard>
  )
}

export default RepoResults;