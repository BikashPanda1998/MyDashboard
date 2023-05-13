import {AreaChart, Area, Tooltip, ResponsiveContainer} from "recharts"
import "./Css2/Earning.css"
const data=[
    {data:4500},
    {data:5000},
    {data:4700},
    {data:4400},
    {data:4800},
    {data:5300},
    {data:5800},
    {data:6000},
    {data:6300},
    {data:6500},
    {data:6800},
    {data:5700},
    {data:5300},
    {data:5000},
    {data:6000},
    {data:7000},
    {data:7300},
    {data:7500},
    {data:7200},
    {data:8090},
    {data:8190},
    {data:8500}
]
const Earning2=()=>{
    return(
        <section className="earning_section" style={{marginTop:"-2rem"}}>
            <div className="card" style={{height:"24rem"}}>
            <div className="top">
                <div className="info">
                    <h4>This month earning</h4>
                    <h1>$682.5</h1>
                    <div className="growth">
                        <span>+2.45%</span>
                    </div>
                </div>
            </div>
            <div className="chart">
                <ResponsiveContainer height="100%" width="100%">
                    <AreaChart width={500} height={400} data={data} margin={{top:0, left:0, right:0, bottom:0}}>
                        <Tooltip cursor={false}/>
                        <Area animationBegin={800} animationDuration={2000} type="monotone" dataKey="data" stroke="#ffc107" fill="#8068233e" strokeWidth={4}/ >
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            </div>
        </section>
    )
}
export default Earning2;