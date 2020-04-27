import React, {createContext} from "react";
import {withRouter} from "react-router";
import UserStore from "./User.store";
import {UserService} from "../services";

export const GlobalContext = createContext({});



const GlobalContextProvider = (props: any) => {


    return (
        <GlobalContext.Provider value={{
            UserStore: new UserStore(new UserService())
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export default withRouter(GlobalContextProvider)