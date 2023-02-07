import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import Error from "../components/Error/Error";
import { useParams } from 'react-router-dom';
import RepoResults from "../components/RepoResults.component/RepoResults";
import { Repository } from "../types/repos";
// import { userProps } from "../types/user";
import { Title, Card } from './Styles.js'

const UserRepos = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [error, setError] = useState(false)
  const { userName } = useParams();

  useEffect(() => {
    setError(false);
    setRepositories([]);

    const getRepos = async () => {
      const res = await fetch(`https://api.github.com/users/${userName}/repos`)
      const data = await res.json()
      if (res.status === 404) {
        toast('Usuário informado não foi encontrado!', { theme: "dark" });
        setError(true)
        return;
      }

      const repoData: Repository[] = data.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
      }));

      setRepositories(repoData);
      console.log(repoData)
    };
    getRepos();
  }, [userName])

  return (
    <>
      <button>Voltar</button>
      <Title>Explore os repositórios do usuário:</Title>
      <Card>
        <ToastContainer />
        {repositories.map((repo) => (
          <RepoResults key={repo.id} {...repo} />
        ))}
        {error && <Error />}
      </Card>
    </>
  )
};

export default UserRepos;