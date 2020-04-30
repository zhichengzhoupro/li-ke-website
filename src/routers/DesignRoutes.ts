import Route from "./Route";
import DesignDetail from "../views/design/DesignDetail/DesignDetail";
import DesginList from "../views/design/DesignList/DesignList";

const DesignRoutes: Route[] = [
    {
        path:'/design/list',
        component: DesginList,
        isExact: true
    },
    {
        path:'/design/detail/:id',
        component: DesignDetail,
        isExact: true
    }
];

export default DesignRoutes;