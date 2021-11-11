import Home from "../pages/Home"; //导入页面
import Admin from "../pages/Admin"; //导入页面
//通过组件配置路由
const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/admin",
    component: <Admin />,
  },
];
export default routes;
