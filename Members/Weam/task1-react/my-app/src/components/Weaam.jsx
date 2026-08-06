import React from 'react';
import './Weaam.css';
import profile from '../assets/Profile.jfif';
function Weaam(){
    return(
    <div className="card-container">
      <img src={profile} alt="Profile-Photo" className="profile-img" />
      <h3 className="card-title">Weaam Nasser🌸</h3>
      <p className="card-text">
        Welcome to my React app! Learning modern web technologies every day.
      </p>
    </div>
    );

}
export default Weaam;