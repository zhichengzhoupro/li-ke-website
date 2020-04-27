import React from 'react';
import {Route} from 'react-router-dom';

const RouteWithProps = (props: any) => {
    const {component: Component, ...rest} = props;

    return (
        <Route
            {...rest}
            render={(matchProps) => {
                return (
                    <>
                        {
                            <Component {...matchProps} />
                        }
                    </>

                )
            }}
        />

    );
};

export default RouteWithProps;