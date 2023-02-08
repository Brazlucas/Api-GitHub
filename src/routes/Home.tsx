import Search from "../components/Search.component/Search";
import { useState } from "react";
import { userProps } from "../types/user";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import Spinner from "../components/Spinner/Spinner.component";
import User from "../components/User.component/User";
import Error from "../components/Error/Error";

const Home = () => {
  let [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(false);
  const [user, setUser] = useState<userProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    setLoading(true);
    setError(false);
    setUser(null);
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()

    if (res.status === 404) {
      setLoading(false);
      toast.error('Usuário informado não foi encontrado!', { theme: "dark" });
      setError(true)
      return;
    }

    const { avatar_url, login, location, followers, following, html_url, public_repos } = data;

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
    setTimeout(() => setLoading(false), 300)
  };

  return (
    <>
      {loading === true
        ?
        <>
          <div style={{ marginTop: "100px"}} hidden={hide} className="sweet-loading">
            <Spinner />
          </div>
        </>
        :
        <>
          <div hidden={hide}>
            <ToastContainer />
            <Search loadUser={loadUser} />
            {user && <User {...user} />}
            {error && <Error />}
          </div>
        </>
      }
    </>
  )
};

export default Home;