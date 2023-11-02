/* eslint-disable no-unused-vars */
import React from "react";
import "./styles.css";
import Back from "../../assets/Arrow 1.svg";
import Achievement from "../../assets/Academic achievement and higher education.svg";
import HandShake from "../../assets/Business men shaking hands after signing contract.svg";
import PlanckLogo from "../../assets/PlanckLogo.svg";

const ChoosePath = () => {
  return (
    <div className="useOwnStep2">
      <h2 className="getStartheading">Getting Started</h2>
      <button className="backBtn">
        <img src={Back} alt="back" />
        Back to main screen
      </button>

      <div className="chooseWhether">
        <p className="chooseTypo">Choose your path</p>
        <div className="WalletsWrap" style={{
            marginTop: '40px',
            gap:"30px"
        }}>
          <div className="choosePathCard">
            <p className="chooseTypo">I am interested to learn</p>
            <div className="choosePathCardWrapper">
              <img src={Achievement} alt="Achievement" />
              <div>
                <p className="chooseCardTypo">
                  If you want us to walk you through the procedurestep-by-step
                  and teach you about crypto safety, select this option.
                </p>
                <button className="gotItBtn">I want to learn</button>
              </div>
            </div>
          </div>

          <div className="choosePathCard">
            <p className="chooseTypo">I&apos;m quite experienced</p>
            <div className="choosePathCardWrapper">
              <img src={HandShake} alt="Achievement" />
              <div>
                <p className="chooseCardTypo">
                  You should know what you&apos;re doing and have either a
                  cryptocurrency wallet or experience making one.
                </p>
                <button className="gotItBtn">I&apos;m an expert</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="logoBox">
        <img src={PlanckLogo} alt="logo" />
      </div>
    </div>
  );
};

export default ChoosePath;
