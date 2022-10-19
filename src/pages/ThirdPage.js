import React from "react";
import "./ThirdPage.css";
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';

function ThirdPage() {
  const navigate = useNavigate()

  return (
    <div className="thirdPage">
        <div className="thirdPage__Logo">
            <img className="logo" src="https://i.postimg.cc/gJyG0qZD/icon.png" alt="Logo.png" />
            <h2>Eden</h2>
        </div>
        <img className="progress__Three" src="https://i.postimg.cc/4NfpsW9W/Progress3.png" alt="Progress.png" />
        <h1>How are you planning to use Eden?</h1>
        <div className="thirdPage__Tagline">
            We'll streamline your setup experience accordingly.
        </div>

        <div className="thirdPage__Body">
            <Button className="thirdPage__Selection1">
              <PersonIcon className="icon"></PersonIcon>
              <p className="bold">For myself</p>
              Write better. Think more clearly. Stay organized.
            </Button>
            
            <Button className="thirdPage__Selection2">
              <GroupsIcon className="icon"></GroupsIcon>
              <p className="bold">With my team</p>
              Wikis, docs, tasks & projects, all in one place.
            </Button>
            <br></br>
            <Button className="thirdPage__Button"
              onClick={() => {
               navigate("/fourth");
              }}
            >
              Create Workspace
            </Button>
      </div>

    </div>
  )
}

export default ThirdPage;