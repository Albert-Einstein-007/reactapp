
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <h1>ReactApp</h1>
                <ul>
                    <li><Link classsName="link" to="/">Home</Link></li>
                    <li><Link classsName="link" to="/about">About</Link></li>
                    <li><Link classsName="link" to="/social">Contact</Link></li>
                </ul>
            </header >
            <Outlet />
        </>
    )
}

export default Layout;