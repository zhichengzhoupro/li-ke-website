import React from "react";
import {Redirect, Switch} from "react-router-dom";
import {DesignRoutes} from "../../routers";
import RouteWithProps from "../../components/RouteWithProps";

const Desgin = () => {
    return (
        <>
            <Switch>
                {
                    DesignRoutes.map((route: any) => {
                        return (
                            <RouteWithProps layout={route.layout} component={route.component} key={route.path}
                                            path={route.path}
                                            exact={route.isExact}/>);
                    })
                }
                <Redirect to={DesignRoutes[0].path} from='/design' exact/>
            </Switch>
        </>
    )
}

export default Desgin;