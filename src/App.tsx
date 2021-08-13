import { Redirect, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import DevList from './components/developers/dev-list';
import RepoList from './components/repositories/repo-list';
import Navigation from './components/navigation';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <header className="header">
          <h1 className="title">Trending</h1>
          <p className="subtitle">See what the GitHub community is most excited about today.</p>
        </header>
        <div className="line"></div>
        <div className="container">
          <Navigation />
          <Switch>
            <Route path="/trending/developers" component={DevList} />
            <Route path="/trending" component={RepoList} />
            <Redirect from="/" to="/trending" />
          </Switch>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
