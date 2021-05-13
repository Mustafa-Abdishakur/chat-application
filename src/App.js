import './App.css';
import profilePic from './img/blank-profile.png';
import optionsImg from './img/options.png';

function App() {
  return (
    <div className="App">
     <div className="main-container">
       <div className="left-container">
         <div className="main-profile-container">
            {/* profile pic, name, create group, sign out, optional: name and username instead of just name */}
            <div className="profile-info-container">
              <img src={profilePic} alt="profile picture" />
              <span>Name</span>
            </div>
            <div className="profile-options-container">
              <img src={optionsImg} alt="options" />
            </div>
            
         </div>
       </div>
       <div className="middle-container"></div>
       <div className="right-container"></div>
     </div>
    </div>
  );
}

export default App;
