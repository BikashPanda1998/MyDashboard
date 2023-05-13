import "./Css2/Analytics2.css"
import "./Css2/Style2.css"

const Analytics2=()=>{
return(
    <section className="analytics_main">
        <div className="analytics card">
            <div className="content">
                <h5>Spent this month</h5>
                <h2>$682.5</h2>
            </div>
            <div className="logo">
                <i className="bi bi-credit-card-fill"></i>
            </div>
        </div>
        <div className="analytics card">
            <div className="logo">
                <i className="bi bi-bar-chart-fill"></i>
            </div>
            <div className="content">
                <h5>Earning</h5>
                <h2>$350.40</h2>
            </div>
        </div>
        <div className="analytics card">
            <div className="logo">
                <i className="bi bi-people-fill"></i>
            </div>
            <div className="content">
                <h5>New Clients</h5>
                <h2>321</h2>
            </div>
        </div>
        <div className="analytics card">
            <div className="content">
                <h5>Activity</h5>
                <h2>$540.50</h2>
            </div>
            <div className="logo">
                <i className="bi bi-activity"></i>
            </div>
        </div>
    </section>
)
}
export default Analytics2;