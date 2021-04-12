import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { PrivateRouter } from 'core/PrivateRouter';


export default function routerConfig(routers, pathParrent = '') {

    return (
        <Switch>
            {routers.map((e) => {
                const { exact, path, component: Component, routers: childRouters, auth } = e;
                let children = null;
                if (childRouters) {
                    children = routerConfig(childRouters, path);
                }

                if (auth) {
                    return <PrivateRouter exact={exact} path={path} component={(prop) => <Component {...prop}>{children}</Component>} />
                }
                return (
                    <Route
                        key={Component}
                        exact={exact}
                        path={path}
                        component={(...prop) => {
                            return <Component {...prop}>{children}</Component>
                        }}
                    />
                );
            })}
        </Switch>
    )
}