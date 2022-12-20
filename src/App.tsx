import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Layout } from './layout';
import { routes, redirectRoutes } from './router';
import './App.less';
import './styles/index.css';

function App() {
  return (
    <Router basename="/soa/v2">
      <Layout>
        <Switch>
          {routes.map((item) => {
            return (
              <Route
                path={item.path}
                key={item.key}
                component={item.component}
              />
            );
          })}
          {redirectRoutes.map((item) => {
            return <Redirect path={item.path} to={item.to} key={item.key} />;
          })}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
