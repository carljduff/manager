import "../css/nav.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="nav-wrapper">
            <button className="nav-btn">IMAGE</button>
            <Link to="/"><button className="nav-btn">Home</button></Link>
            <Link to="projects"><button className="nav-btn">Projects</button></Link>
            <button className="nav-btn">Tickets</button>
            <button className="nav-btn">Account</button>
        </div>
    )
}

export default NavBar;