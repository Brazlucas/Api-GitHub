// import { Link } from 'react-router-dom'
import { Repository } from '../../types/repos.js';
import { UserCard, Items } from './Styles.js'

const RepoResults = ({ name, owner }: Repository) => {
  return (
    <UserCard>
      <Items>
        <p>{name}</p>
        <p>{owner}</p>
      </Items>
    </UserCard>
  )
}

export default RepoResults;