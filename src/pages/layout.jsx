import { Outlet, Link} from "react-router-dom";
export default function Layout() {
    const layoutNavbar = 
    <>
        <nav id="main-navbar">
            <ul>
                <li>
                    <Link to="/">Home 🏠</Link>
                </li>
                <li>
                    <Link to="/projects">Projects 👨‍💻</Link>
                </li>
                <li>
                    <Link to="/resume">Resume 📝</Link>
                </li>
                <li>
                    <Link to="/about">About ⭐</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
    return layoutNavbar
}