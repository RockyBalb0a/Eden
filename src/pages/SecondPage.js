import React from "react";
import "./SecondPage.css";
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

function SecondPage() {
  const navigate = useNavigate()

  return (
    <div className="secondPage">
        <div className="secondPage__Logo">
            <img className="logo" src="https://i.postimg.cc/VvJnss8F/Icon.png" alt="Logo.png" />
            <h2>Eden</h2>
        </div>
        <img className="progress__Two" src="https://i.postimg.cc/qvwsG5jy/Progress-2.png" alt="Progress.png" />
        <h1>Let's set up a home for all your work</h1>
        <div className="secondPage__Tagline">
            You can always create another workspace later.
        </div>

        <div className="secondPage_Body">
            <p className="sinput__Title1">Workspace Name</p>
            <input className="secondPage__Input"
              placeholder = "Eden"
              type = "text"
            />
            <br></br>
            <p className="sinput__Title2">Workspace URL <p className="sinput__Bracket">(optional)</p></p>
            <br></br>
            <input className="secondPage__Input2"
              disabled
              defaultValue="www.eden.com/"
            />
            <input className="secondPage__Input3"
              placeholder = "Example"
              type = "text"
            />
            <br></br>
            <Button className="secondPage__Button"
              onClick={() => {
               navigate("/third");
              }}
            >
              Create Workspace
            </Button>
      </div>

    </div>
  )
}

export default SecondPage;