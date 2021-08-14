interface BuiltBy {
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
  builtBy: BuiltBy[];
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
  builtBy,
}: Repository) {
  return (
    <div className="repo-list-item">
      <div className="list-item_header">
        <a href={url} rel="noreferrer noopener" className="list-item_title">
          <i className="far fa-clipboard fa-rotate-180 icon"></i>
          <span className="title-dark">{username} /</span>{' '}
          <span className="title-light">{repositoryName}</span>
        </a>
        <div className="list-item_button">
          <a href={url} rel="noreferrer noopener" className="button">
            <i className="far fa-star"></i>
            <span className="button-label">Star</span>
          </a>
        </div>
      </div>

      <div className="list-item_subtitle">
        <p className="description">{description}</p>
      </div>

      <div className="list-item_info">
        <div className="left">
          <span>{language}</span>
          <a href="/" rel="noreferrer noopener" className="link-button">
            <i className="far fa-star"></i>
            <span className="button-label">{totalStars}</span>
          </a>
          <a href={url} rel="noreferrer noopener" className="link-button">
            <i className="fas fa-code-branch"></i>
            <span className="button-label">{forks}</span>
          </a>
          <span className="build-by-block">
            Built by{' '}
            {builtBy?.map(({ avatar, username }: BuiltBy) => (
              <img key={avatar} src={avatar} alt={username} className="build-by" />
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
