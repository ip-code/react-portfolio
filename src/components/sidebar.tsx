import React from 'react';
import ImageAvatar from '../assets/images/avatar.png';

export default () => {
  return (
    <div className="profile">
        <img src={ImageAvatar} alt="profile pic"/>
        <div className="info">
          <h3>Ip Code</h3>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            Solar system, Earth
          </p>
          <p className="email">
            <i className="fas fa-envelope"></i>
            mail@spacemail.com
          </p>
          <p>Student developer</p>

          <div className="tech-stack">
           
          </div>
        </div>
        <ul className="social">
          
        </ul>
      </div>
  );
};