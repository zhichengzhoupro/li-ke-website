import AppAppBar from "../../onepirate/modules/views/AppAppBar";
import AppFooter from "../../onepirate/modules/views/AppFooter";
import React from "react";

const MainLayout = (props: any) => {

    return (
        <>
            <AppAppBar/>
            {
                props.children
            }
            <AppFooter/>

        </>

    )

};

export  default MainLayout;