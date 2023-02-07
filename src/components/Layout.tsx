import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation'

export type Props = {}

const Layout = (props:Props) =>{
    return (
        <>
        <Navigation/>
        <main>
            <Outlet/>
        </main>
        </>
    )
}

export default Layout;