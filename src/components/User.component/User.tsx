import { userProps } from "../../types/user";
import { MdLocationPin } from "react-icons/md";
import {
  UserCard,
  ImgCard,
  Location,
  LocationText,
  Stats,
  StatsContainer,
  Number,
  UserLink
} from "./Styles.js"

import { Link } from 'react-router-dom'

const User = ({ login, avatar_url, followers, following, location, html_url }: userProps) => {
  return (
    <UserCard>
      <Link to={html_url} target="_blank">
        <ImgCard src={avatar_url} alt="login" />
      </Link>
      <h2>{login}</h2>
      {location && (
        <Location>
          <MdLocationPin style={{
            fill: "#4ed8c7",
            fontSize: "1.5rem"
          }} 
          />
          <LocationText>{location}</LocationText>
        </Location>
      )}
      <StatsContainer>
        <Stats>
          <p>Seguidores:</p>
          <Number>{followers}</Number>
        </Stats>
        <Stats>
          <p>Seguindo:</p>
          <Number>{following}</Number>
        </Stats>
      </StatsContainer>
      <UserLink>
        <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
      </UserLink>
    </UserCard>
  )
}

export default User;