import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
  },
];

export default routes;
