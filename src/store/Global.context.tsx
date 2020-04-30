import React, {createContext} from "react";
import UserStore from "./User.store";
import {UserService} from "../services";
import DesignStore from "./Design.store";

export const GlobalContext = createContext({});



const GlobalContextProvider = (props: any) => {


    return (
        <GlobalContext.Provider value={{
            UserStore: new UserStore(new UserService()),
            DesignStore: new DesignStore()
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider