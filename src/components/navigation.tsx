import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navbar">
      <div className="button-group">
        <NavLink exact to="/trending" activeClassName="active" className="button-link">
          Repositories
        </NavLink>
        <NavLink to="/trending/developers" activeClassName="active" className="button-link">
          Developers
        </NavLink>
      </div>
      <div className="dropdown-menus">
        <details>
          <summary className="select-menu">
            Spoken Language: <span>English</span>
          </summary>
        </details>
        <details>
          <summary className="select-menu">
            Language: <span>Any</span>
          </summary>
        </details>
        <details>
          <summary className="select-menu">
            Date Range: <span>Today</span>
          </summary>
        </details>
      </div>
    </div>
  );
}

export default Navigation;
