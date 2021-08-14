import { useQuery } from 'react-query';
import Loading from '../loading';
import DevListItem from './dev-list-item';

interface Developer {
  avatar: string;
  name: string;
  rank: number;
  since: string;
  url: string;
  username: string;
  popularRepository: { repositoryName: string; description: string; url: string };
}

const fetchRepositories = async () => {
  const res = await fetch('/developers');
  return res.json();
};

function DevList() {
  const { isLoading, data } = useQuery('developers', fetchRepositories);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        data?.map((dev: Developer) => <DevListItem key={dev.rank} {...dev} />)
      )}
    </div>
  );
}

export default DevList;
