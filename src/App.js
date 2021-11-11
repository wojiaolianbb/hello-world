import { Route, Navigate, Routes } from "react-router-dom";
import React from "react";
import routes from "./route";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>头部</header>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
            );
          })}
          <Navigate exact from="/" to={routes[0].path} />
          {/* 这里用 Navigate  进行 首页自动跳转到 /home 路由下 
                 exact 意味着精确匹配 当为 / 时才跳转 /home 不是包含 / 就跳转到 /home
             */}
          <Navigate to="/404" />
          {/* 如果找不到页面 则去 4040页面 */}
        </Routes>
        <footer>尾部</footer>
      </div>
    );
  }
}

export default App;
