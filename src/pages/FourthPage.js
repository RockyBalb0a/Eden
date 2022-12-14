import React from "react";
import "./FourthPage.css";
import Button from '@mui/material/Button';

function FourthPage() {
  return (
    <div className="fourthPage">
        <div className="fourthPage__Logo">
            <img className="logo" src="https://i.postimg.cc/gJyG0qZD/icon.png" alt="Logo.png" />
            <h2>Eden</h2>
        </div>
        <img className="progress__Four" src="https://i.postimg.cc/Pf2PzTCM/Progress4.png" alt="Progress.png" />
        <br></br>
        <img className="end__Image" src="https://i.postimg.cc/j5jrs0Rs/Done.png" alt="End.png" />
        <h1>Congratulations, Eren!</h1>
        <div className="fourthPage__Tagline">
            You have completed onboarding, you can start using the Eden!
        </div>
        <Button className="fourthPage__Button">
          Launch Eden
        </Button>
    </div>
  )
}

export default FourthPage;