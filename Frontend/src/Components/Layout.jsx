import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Header />
            <main className=" bg-blue-100">
                <Outlet />
            </main>
            <div className="">
                <Footer />
            </div>
        </>
    );
}

export default Layout;