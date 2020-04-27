
import NotFound from "../views/not-found";
import Home from "../views/home";

interface Route {
    path: string,
    component: any,
    isExact: boolean
}

export const MainRoutes: Route[] = [
    {
        path:'/home',
        component: Home,
        isExact: true,
    },
    {
        path:'/not-found',
        component: NotFound,
        isExact: true,
    }
];

export default MainRoutes;