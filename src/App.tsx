import React from 'react';
import './assets/styles/App.css';
import { Fade } from 'react-awesome-reveal';
import ImageAvatar from './assets/images/avatar.png';

function App() {
  return (
    <Fade>
    <div className="App">
      <header className="App-header">
      
        <img src={ImageAvatar} alt="profile pic"/>
          <h3>Ip Code</h3>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            Solar system, Earth
          </p>
          <p className="email">
            <i className="fas fa-envelope"></i>
            ip-code@spacemail.com
          </p>
          <p>Developer Trainee</p>
        
      </header>
    </div>
    </Fade>

  );
}

export default App;
