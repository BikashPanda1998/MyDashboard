import profile from "./asset/avatar.jpeg";
import "./Css2/Profile.css"
import "./Css2/Style2.css"
const Profile2 = () => {
  return (
    <section className="profile-section">
      <div className="card" style={{width:"25rem",height:"24rem"}}>
        <div className="img">
          <img src={profile} alt="profile_pic" />
        </div>
        <div className="title">
          <h2>Ak kishan</h2>
          <h5>
            <i className="bi bi-pin-map-fill"></i>Odisha, India
          </h5>
        </div>
        <div className="info">
          <div className="container">
            <h5>Days at work</h5>
            <h3>28</h3>
          </div>
          <div className="container">
            <h5>rider</h5>
            <h3>427</h3>
          </div>
          <div className="container">
            <h5>Hours</h5>
            <h3>760</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile2;
