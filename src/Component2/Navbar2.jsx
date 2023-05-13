import "./Css2/Navbar2.css"


const Navbar2=()=>{
    return(
        <nav className="navbar">
            <div className="title">
                <h4>Hi Admin</h4>
                <h1>Welcome to <span>MY DASHBOARD</span></h1>
            </div>
            <div className="search">
                <i className="bi bi-search"></i>
                <input type="text" placeholder="Search" />
            </div>
        </nav>
    )
}
export default Navbar2;