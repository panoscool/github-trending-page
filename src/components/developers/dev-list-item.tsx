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
          <a href={url} rel="noreferrer noopener" className="list-item_title">
            <img src={avatar} alt="avatar" className="avatar" />
          </a>
        </div>
        <div>
          <h1>
            <a href={url} rel="noreferrer noopener" className="list-item_title">
              <span className="dev-name">{name}</span>
            </a>
          </h1>
          <p>
            <a href={url} rel="noreferrer noopener" className="list-item_title">
              <span className="dev-username">{username}</span>
            </a>
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
          <a href={popularRepository.url} rel="noreferrer noopener" className="repo-link">
            {popularRepository.repositoryName}
          </a>
        </div>
        <div className="small-text">{popularRepository.description}</div>
      </div>

      <div className="dev-list-item_info">
        <div className="align-text">
          <a href="/" className="button">
            Follow
          </a>
        </div>
      </div>
    </div>
  );
}

export default DevListItem;
