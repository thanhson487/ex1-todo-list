import Home from "./../pages/Home";
import TodLists from "./../pages/TodoLists";

const router = [
  {
    component: () => <Home />,
    path: "/",
    exact: true,
  },
  {
    component: () => <TodLists />,
    path: "/todolists",
    exact: false,
  },
];
export default router;
