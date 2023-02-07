import Search from "../components/Search.component/Search";
import { useState } from "react";
import { userProps } from "../types/user";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

import User from "../components/User.component/User";
import Error from "../components/Error/Error";

const Home = () => {
  const [user, setUser] = useState<userProps | null>(null);
  const [error, setError] = useState(false)

  const loadUser = async(userName: string) => {
    setError(false);
    setUser(null);
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()

    if (res.status === 404) {
      toast('Usuário informado não foi encontrado!', {theme: "dark"});
      setError(true)
      return;
    }

    const {avatar_url, login, location, followers, following, html_url, public_repos} = data;

    const userData: userProps = {
      avatar_url,
      html_url,
      login,
      location,
      followers,
      following,
      public_repos
    };

    setUser(userData);
  };

  return (
    <div>
      <ToastContainer />
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  )
};

export default Home;