import Analytics2 from "./Analytics2";
import Earning2 from "./Earning2";
import FAQ from "./FAQ";
import Navbar2 from "./Navbar2";
import Profile2 from "./Profile2";
import Transfers2 from "./Transfers2";
import "./Css2/Dashboard2.css";
const Dashboard2 = () => {
  return (
    <section className="dashboard">
      <Navbar2 />
      <div className="grid">
        <div className="row_one">
               <Analytics2 />
               <FAQ />
        </div>
        <div className="row_two">
          <Earning2 />
           <Transfers2 />
          <Profile2 /> 
        </div>
      </div>
    </section>
  );
};
export default Dashboard2;
