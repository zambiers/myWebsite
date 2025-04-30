import MainNavbar from './MainPageNavBar';
import { Outlet } from 'react-router-dom';

export function Layout(){
    return(
        <>
        <MainNavbar />
        <main>
            <Outlet/>
        </main>
        </>
    )
}