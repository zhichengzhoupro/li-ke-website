import React from 'react';
import {Route} from 'react-router-dom';

const RouteWithProps = (props: any) => {
    const {component: Component, layout: Layout, ...rest} = props;

    return (
        <Route
            {...rest}
            render={(matchProps) => {
                console.log(Layout);
                return (
                    <>
                        {
                            Layout  ? <Layout>
                                <Component {...matchProps} />
                            </Layout> :  <Component {...matchProps} />
                        }
                    </>
                )
            }}
        />

    );
};

export default RouteWithProps;