
import img2 from "./asset/Avatar2.png";
import img3 from "./asset/avatar3.jpeg";
import "./Css2/transfer.css";
import "./Css2/Style2.css";

const Transfers2=()=>{
    const transaction=[
        {
            image: img3,
            name:"From kisan seth",
            time:"Today, 16:36",
            amount:"+$50",
        },
        {
            image: img3,
            name:"From Ashish saint",
            time:"Today, 11:36",
            amount:"+$25",
        },
        {
            image: img2,
            name:"From sudhansu",
            time:"Today, 8:36",
            amount:"+$35",
        },
    ]
return(
    <section className="transfer_section">
       <div className="card" style={{height:"24rem"}}>
       <div className="title">
            <h2>Your Transfers</h2>
        </div>
        <div className="transactions">
            {
                transaction.map((transct, index)=>{
                    return(
                        <div className="content" key={index}>
                            <div className="transaction_title">
                                <div className="transaction_img">
                                    <img src={transct.image} alt={transct.name} />
                                </div>
                                <div className="transaction_details">
                                    <h3>{transct.name}</h3>
                                    <h5>{transct.time}</h5>
                                </div>
                                <div className="transaction_amount">
                                    <span>{transct.amount}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
            <a className="view" href="#">View All <i className="bi bi-arrow-right"></i></a >
       </div>
    </section>
)
}
export default Transfers2;