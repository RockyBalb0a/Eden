import React from "react";
import "./HomePage.css";
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

function HomePage() {
  const navigate = useNavigate()

  return (
    //BEM
    <div className="homePage">
      <div className="homePage__Logo">
        <img className="logo" src="https://i.postimg.cc/gJyG0qZD/icon.png" alt="Logo.png" />
        <h2>Eden</h2>
      </div>
      <img className="progress__One" src="https://i.postimg.cc/wTp0J5sN/Progress1.png" alt="Progress.png" />
      <h1>Welcome! First things first...</h1>
      <div className="homePage__Tagline">
        You can always change them later.
      </div>

      <div className="homePage__Body">
        <p className="hinput__Title1">Full Name</p>
        <input className="homePage__Input"
          placeholder = "Steve Jobs"
          type = "text"
        />
        <p className="hinput__Title2">Display Name</p>
        <input className="homePage__Input"
          placeholder = "Steve"
          type = "text"
        />
        <br></br>
        <Button className="homePage__Button"
          onClick={() => {
            navigate("/second");
          }}
        >
          Create Workspace
        </Button>
      </div>

    </div>

    
  )
}

export default HomePage;