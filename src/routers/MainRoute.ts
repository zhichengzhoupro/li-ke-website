
import NotFound from "../views/not-found";
import Home from "../views/home";
import Desgin from "../views/design";
import Route from "./Route";
import MainLayout from "../components/Layout";


const MainRoutes: Route[] = [
    {
        path:'/home',
        component: Home,
        isExact: true,
        layout: MainLayout
    },
    {
        path:'/design',
        component: Desgin,
        isExact: false,
        layout: MainLayout
    },
    {
        path:'/not-found',
        component: NotFound,
        isExact: true,
        layout: MainLayout
    }
];

export default MainRoutes;