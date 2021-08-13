import { Link } from 'react-router-dom';

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

function RepoListItem({
  description,
  forks,
  language,
  repositoryName,
  starsSince,
  totalStars,
  url,
  username,
  buildBy,
}: Repository) {
  return (
    <div className="repo-list-item">
      <div className="list-item_header">
        <Link to={url} className="list-item_title">
          <i className="far fa-clipboard fa-rotate-180 icon"></i>
          <span className="title-dark">{username} /</span>{' '}
          <span className="title-light">{repositoryName}</span>
        </Link>
        <div className="list-item_button">
          <Link to={url} className="button">
            <i className="far fa-star"></i>
            <span className="button-label">Star</span>
          </Link>
        </div>
      </div>

      <div className="list-item_subtitle">
        <p className="description">{description}</p>
      </div>

      <div className="list-item_info">
        <div className="left">
          <span>{language}</span>
          <Link to="/" className="link-button">
            <i className="far fa-star"></i>
            <span className="button-label">{totalStars}</span>
          </Link>
          <Link to={url} className="link-button">
            <i className="fas fa-code-branch"></i>
            <span className="button-label">{forks}</span>
          </Link>
          <span className="build-by-block">
            Build by{' '}
            {buildBy?.map(({ avatar, username }: BuildBy) => (
              <img src={avatar} alt={username} className="build-by" />
            ))}
          </span>
        </div>
        <div className="right">
          <i className="far fa-star"></i> {starsSince} stars today
        </div>
      </div>
    </div>
  );
}

export default RepoListItem;
