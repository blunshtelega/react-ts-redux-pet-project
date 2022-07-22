import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { User } from '../../features/User/User';
import { privateRoutes, publicRoutes } from '../../common/utils/routes'
import { useAppSelector } from '../../common/hooks/hooks';

export interface IAppRouterProps {

}

export function AppRouter(props: any) {

    const isAuth = useAppSelector(state => state.user.isAuth)
    console.log(isAuth)
    return (
        <main className='app-wrapper'>
            {
            isAuth
            ? 
                <Routes>
                    {privateRoutes.map(({ path, Component }) =>
                        <Route key={path} path={path} element={Component} />
                    )}
                    {publicRoutes.map(({ path, Component }) =>
                        <Route key={path} path={path} element={Component} />
                    )}
                </Routes>
            :
                <Routes>
                    {privateRoutes.map(({ path, Component }) =>
                        <Route key={path} path={path} element={<Navigate replace to="/auth"/>}/>
                    )}
                    {publicRoutes.map(({ path, Component }) =>
                        <Route key={path} path={path} element={Component} />
                    )}
                </Routes>
            }
        </main>
    )
}
