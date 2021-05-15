import './App.css';
import profilePic from './img/blank-profile.png';
import optionsImg from './img/options.png';
import emojiBtn from './img/emoji-btn.png';
function App() {
  return (
    <div className="App">
     <div className="main-container">
       <div className="left-container">
         <div className="main-profile-container">
            {/* profile pic, name, create group, sign out, optional: name and username instead of just name */}
            <div className="profile-info-container">
              <img src={profilePic} alt="profile" />
              <span>Name</span>
            </div>
            <div className="profile-options-container">
              <img src={optionsImg} alt="options" />
            </div>
            
         </div>
         <div className="group-list-container">
           <ul>
             <li>
               <div className="list-item">
                 Demo group
               </div>
             </li>
           </ul>
         </div>
       </div>
       <div className="middle-container">
         <div className="group-info-container">
           <h1>Demo group</h1>
         </div>
          <div className="main-chat-container">

          </div>
          <div className="main-text-container">
            <input type="text" />
            <img src={emojiBtn} alt="emoji" />
          </div>
       
       </div>
       <div className="right-container"></div>
     </div>
    </div>
  );
}

export default App;
