import { useQuery } from 'react-query';
import Loading from '../loading';
import RepoListItem from './repo-list-item';

interface BuildBy {
  avatar: string;
  url: string;
  username: string;
}

interface Repository {
  description: string;
  forks: number;
  language: string;
  languageColor: string;
  rank: number;
  repositoryName: string;
  since: string;
  starsSince: number;
  totalStars: number;
  url: string;
  username: string;
  buildBy: BuildBy[];
}

// type Repositories = Repository[];

const fetchRepositories = async () => {
  const res = await fetch('/repositories');
  return res.json();
};

function RepoList() {
  const { isLoading, data } = useQuery('repositories', fetchRepositories);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        data?.map((repo: Repository) => <RepoListItem key={repo.rank} {...repo} />)
      )}
    </div>
  );
}

export default RepoList;
