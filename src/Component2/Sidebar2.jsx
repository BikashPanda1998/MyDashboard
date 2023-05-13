import "bootstrap-icons/font/bootstrap-icons.css";
import "./Css2/Sidebar2.css"
import { useState } from "react";

const Sidebar2=()=>{
    const[toggle, setToggle]=useState(0);
return(
    <>
    <section className="sidebar">
        <div className="top">
            <div className="brand">
            <i className="bi bi-clipboard2-pulse-fill"></i>
            <span>MY DASHBOARD</span>
            </div>
            <div className="toggle"></div>
            <div className="links">
                <ul>
                    <li onClick={()=>setToggle(1)} className={toggle===1?"active":""}>
                        <a ><i className="bi bi-grid-1x2-fill"></i><span> Dashboard</span></a >
                    </li>
                    <li onClick={()=>setToggle(2)} className={toggle===2?"active":""}>
                        <a ><i className="bi bi-emoji-heart-eyes-fill"></i><span> Riders</span></a >
                    </li>
                    <li onClick={()=>setToggle(3)} className={toggle===3?"active":""}>
                        <a ><i className="bi bi-paypal"></i><span> Payment Details</span></a >
                    </li>
                    <li onClick={()=>setToggle(4)} className={toggle===4?"active":""}>
                        <a ><i className="bi bi-book-fill"></i><span> Learning Center</span></a >
                    </li>
                    <li onClick={()=>setToggle(5)} className={toggle==51?"active":""}>
                        <a><i className="bi bi-chat-text-fill"></i><span> FAQs</span></a>
                    </li>
                    <li onClick={()=>setToggle(6)} className={toggle===6?"active":""}>
                        <a><i className="bi bi-gear-fill"></i><span> Settings</span></a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="logout">
            <a href=""><i className="bi bi-box-arrow-right"></i><span> Logout</span></a>
        </div>
    </section>
    </>
)
}
export default Sidebar2;