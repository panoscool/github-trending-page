import { Link } from 'react-router-dom';

interface Developer {
  avatar: string;
  name: string;
  rank: number;
  url: string;
  username: string;
  popularRepository: { repositoryName: string; description: string; url: string };
}

function DevListItem({ avatar, name, rank, url, username, popularRepository }: Developer) {
  return (
    <div className="dev-list-item">
      <div className="dev-list-item_col1">
        <div className="dev-ranking">{rank}</div>
        <div className="dev-photo">
          <Link to={url} className="list-item_title">
            <img src={avatar} alt="avatar" className="avatar" />
          </Link>
        </div>
        <div>
          <h1>
            <Link to={url} className="list-item_title">
              <span className="dev-name">{name}</span>
            </Link>
          </h1>
          <p>
            <Link to={url} className="list-item_title">
              <span className="dev-username">{username}</span>
            </Link>
          </p>
        </div>
      </div>

      <div className="list-item_subtitle">
        <div>
          <i className="fas fa-fire fire"></i>
          <span className="small-text">POPULAR REPO</span>
        </div>
        <div>
          <i className="far fa-clipboard fa-rotate-180 icon"></i>
          <Link to={popularRepository.url} className="repo-link">
            {popularRepository.repositoryName}
          </Link>
        </div>
        <div className="small-text">{popularRepository.description}</div>
      </div>

      <div className="dev-list-item_info">
        <div className="align-text">
          <Link to={url} className="button">
            Follow
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DevListItem;
