import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import Error from "../components/Error/Error";
import { useParams } from 'react-router-dom';
import RepoResults from "../components/RepoResults.component/RepoResults";
import { Repository } from "../types/repos";
import { Title, Card } from './Styles.js';
import Spinner from "../components/Spinner/Spinner.component";

const UserRepos = () => {
  let [loading, setLoading] = useState(false);
  let [language, setLanguage] = useState(false);
  const [hide, setHide] = useState(false);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [error, setError] = useState(false)
  const { userName } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(false);
    setRepositories([]);

    const getRepos = async () => {
      const res = await fetch(`https://api.github.com/users/${userName}/repos`)
      const data = await res.json()
      if (res.status === 404) {
        setLoading(false);
        toast.error('Houve um erro, tente novamente mais tarde.', { theme: "dark" });
        setError(true);
        return;
      }
      const repoData: Repository[] = data.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        language: repo.language,
        forks: repo.forks,
        stargazers_count: repo.stargazers_count
      }));

      setRepositories(repoData);
      console.log(repoData)
    };
    getRepos();
  }, [userName])

  setTimeout(() => setLoading(false), 300)


  return (
    <>
      {loading === true
        ?
        <>
          <div style={{ marginTop: "100px" }}>
            <Spinner />
          </div>
        </>
        :
        <>
          <Title>Explore os repositórios do usuário:</Title>
          <ToastContainer />
          <Card>
            {repositories.map((repo) => (
              <RepoResults key={repo.language} {...repo} />
            ))}
            {error && <Error />}
          </Card>
        </>
      }
    </>
  )
};

export default UserRepos;