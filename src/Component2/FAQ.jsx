import "./Css2/Faq.css"
import "./Css2/Style2.css"

const FAQ=()=>{
    const faqs=[
        {
            icon:<i className="bi bi-calendar"></i>,
            text:"How to manage time and get good marks for trips"
        },
        {
            icon:<i className="bi bi-clock-fill"></i>,
            text:"How to regulate tranction our time"
        },
        {
            icon:<i className="bi bi-menu-button-wide-fill"></i>,
            text:"Withdrawing money through an ATM"
        },
    ];
return(
    <section className="faqs_section">
        <div className="card">
        <div className="title">
            <h2>INFORMATION FOR DRIVERS</h2>
        </div>
        <div className="faqm">
            {
                faqs.map((item, index)=>{
                    return(
                        <div className="faq"key={index} >
                            <div className="info" >
                                {item.icon}
                                <h4>{item.text}</h4>
                            </div>
                            <i className="bi bi-chevron-right"></i>
                        </div>
                    )
                })
            }
        </div>
        </div>
    </section>
)
}
export default FAQ;