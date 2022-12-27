import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { UserInfoContext, UserInfoType } from './context/UserInfoContext';
import { Layout } from './layout';
import { routes, redirectRoutes } from './router';
import { getUserInfoWithAvatar } from './apis/common';
import './App.less';
import './styles/index.css';

function App() {
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    username: '',
    avatar: '',
    mis: '',
  });

  // 获取用户信息
  const fetchUserInfo = () => {
    getUserInfoWithAvatar().then(setUserInfo);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <UserInfoContext.Provider value={userInfo}>
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
    </UserInfoContext.Provider>
  );
}

export default App;
