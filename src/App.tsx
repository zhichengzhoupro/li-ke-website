import React from 'react';
import './App.css';
import Home from "./onepirate/Home";
import {Redirect, Switch} from "react-router";
import {MainRoutes} from "./routers";
import RouteWithProps from "./components/RouteWithProps";
import withRoot from "./onepirate/modules/withRoot";
import GlobalContextProvider from "./store/Global.context";

function App() {
    return (
        <GlobalContextProvider>
            <Switch>
                {
                    MainRoutes.map((route: any) => {
                        return (
                            <RouteWithProps layout={route.layout} component={route.component} key={route.path}
                                            path={route.path}
                                            exact={route.isExact}/>);
                    })
                }
                <Redirect to="/home" from="/" exact/>
                <Redirect to="/not-found"/>
            </Switch>
        </GlobalContextProvider>
    );
}

export default withRoot(App)
