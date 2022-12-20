import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './layout';
import { routes } from './router';
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
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
