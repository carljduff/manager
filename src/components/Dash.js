import "../css/dash.css";

const Dash = () => {
    return(
        <div className="dash-wrapper">
            <div className="nav-wrapper">
                <div className="nav-list">
                    <button className="nav-item">Dashboard</button>
                    <button className="nav-item">Projects</button>
                    <button className="nav-item">Tickets</button>
                </div>
            </div>
        </div>
    )
}

export default Dash;