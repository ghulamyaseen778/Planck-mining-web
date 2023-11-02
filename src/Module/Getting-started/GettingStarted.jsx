/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./styles.css";
import Step4 from "../../assets/Step4.svg";
import PlanckLogo from "../../assets/PlanckLogo.svg";
import Back from "../../assets/Arrow 1.svg";
import NewWallet from "./NewWallet";
import UseOwn from "./UseOwn"
import useOwnIcon from "../../assets/Group 90.svg"
const GettingStarted = () => {
  const [initial, setInitial] = useState(true);
  const [newWallet, setNewWallet] = useState(false);
  const [useOwn, setUseOwn] = useState(false);

  const ShowNewWallet = () => {
    setInitial(false);
    setNewWallet(true);
  };

  const showUseOwn = () =>{
    setInitial(false);
    setNewWallet(false);
    setUseOwn(true)
  }

  return (
    <div className={useOwn?"":"mainStart"}>
      {useOwn===false && (
        <>
      <h2 className="getStartheading">Getting Started</h2>
      <button className="backBtn">
        <img src={Back} alt="back" />
        Back to main screen
      </button>
        </>
      )}

      {initial && (
        <div className="chooseWhether">
          <p className="chooseTypo">Choose whether you wish to:</p>
          <div className="WalletsWrap">
            <div className="imgBtnWrap">
              <img src={Step4} alt="step4" />
              <button
                className="gotItBtn"
                style={{
                  background: "background: rgba(24, 171, 162, 0.63)",
                  width: "-webkit-fill-available",
                }}
                onClick={ShowNewWallet}
              >
                NEW WALLET
              </button>
            </div>
            <div className="imgBtnWrap">
              <img src={useOwnIcon} alt="step4" />
              <button
                className="gotItBtn"
                style={{
                  width: "-webkit-fill-available",
                }}
                onClick={showUseOwn}
              >
                USE MY OWN
              </button>
            </div>
          </div>
        </div>
      )}

      {newWallet && (
        <NewWallet />
      )}
      {useOwn && (
        <UseOwn />
      )}

      <div className="logoBox">
        <img src={PlanckLogo} alt="logo" />
      </div>
    </div>
  );
};
export default GettingStarted;
