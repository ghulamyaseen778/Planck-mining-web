/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./styles.css";
import Back from "../../assets/Arrow 1.svg";
import Shopping from "../../assets/Shopping.svg";
import PlanckLogo from "../../assets/PlanckLogo.svg";
import Step2 from "../../assets/Step2.svg";
import Step3 from "../../assets/Step3.svg";
import Step4 from "../../assets/Step4.svg";
import HardWareNotSupported from "../../assets/HardwareNotSupported.svg";
const NewWallet = () => {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const [step5, setStep5] = useState(false);

  const step1Click = () => {
    setStep1(false);
    setStep2(true);
  };
  const step2Click = () => {
    setStep2(false);
    setStep3(true);
  };
  const step3Click = () => {
    setStep3(false);
    setStep4(true);
  };
  const step4Click = () => {
    setStep4(false);
    setStep5(true);
  };
  return (
    <div className="newWalletMain">
      {/* <h2 className="getStartheading">Getting Started</h2>
      <button className="backBtn">
        <img src={Back} alt="back" />
        Back to main screen
      </button> */}
      <div>
        <div className="stepperMain">
          <div className="everyStep">
            <div
              className="stepperCircle"
              style={{
                background: step1
                  ? "rgba(0, 255, 239, 0.87)"
                  : "rgba(24, 171, 162, 0.63)",
              }}
            >
              1
            </div>
            <p>Prepare</p>
          </div>
          <div className="line"></div>
          <div className="everyStep">
            <div
              className="stepperCircle"
              style={{
                background: step2
                  ? "rgba(0, 255, 239, 0.87)"
                  : "rgba(24, 171, 162, 0.63)",
              }}
            >
              2
            </div>
            <p>Seed Phrase</p>
          </div>
          <div className="line"></div>

          <div className="everyStep">
            <div
              className="stepperCircle"
              style={{
                background: step3
                  ? "rgba(0, 255, 239, 0.87)"
                  : " rgba(24, 171, 162, 0.63)",
              }}
            >
              3
            </div>
            <p>Name</p>
          </div>
          <div className="line"></div>

          <div className="everyStep">
            <div
              className="stepperCircle"
              style={{
                background: step4
                  ? "rgba(0, 255, 239, 0.87)"
                  : "rgba(24, 171, 162, 0.63)",
              }}
            >
              4
            </div>
            <p>Benchmark</p>
          </div>
        </div>
      </div>
      {/* <div> */}
      <div className="imgContentWrapper">
        {step1 && (
          <>
            <img src={Shopping} alt="Shopping" />
            <div className="content">
              <div>
                <h3>We will create a wallet for you</h3>
                <p>You will need either:</p>
                <li>Pen and paper</li>
                <li>or a working printer</li>
              </div>

              <div className="buttonWrapper">
                <button className="cancelBtn">Cancel</button>
                <button className="gotItBtn" onClick={step1Click}>
                  Got it
                </button>
              </div>
            </div>
          </>
        )}
        {step2 && (
          <>
            <img src={Step2} alt="step2" />
            <div className="content">
              <h3>Your wallet is being created</h3>
              <p>In a moment you will be presented with 12 words.</p>
              <p
                style={{
                  marginBottom: "60px",
                }}
              >
                If your disk should fail or you encounter any other unforeseen
                circumstances, you can use these 12 words as a backup for your
                wallet - you will be able to recreate your wallet with your
                earnings in any external wallet!
              </p>
              <button
                className="gotItBtn"
                style={{
                  width: "-webkit-fill-available",
                  marginBottom: "20px",
                }}
                onClick={step2Click}
              >
                Got it{" "}
              </button>
            </div>
          </>
        )}
        {step3 && (
          <>
            <div>
              <img src={Step3} alt="step2" />
              <button className="gotItBtn">Print</button>
            </div>

            <div className="content">
              <div>
                <h3>Write down these words</h3>
                <p>(and keep them in a safe place)</p>
              </div>

              <button
                className="gotItBtn"
                style={{
                  width: "-webkit-fill-available",
                }}
                onClick={step3Click}
              >
                I&apos;ve noted every single one of them
              </button>
            </div>
          </>
        )}
        {step4 && (
          <>
            <img src={Step4} alt="step2" />
            <div className="content">
              <div>
                <h3>Name your node</h3>
                <p style={{
                  width:"70%"
                }}>
                  Your computational resources will be visible to other users in
                  the Planck Network under his name. You can always change this
                  later!
                </p>
                <input placeholder="John Smith" />
                <div className="nodeName">Valid node name</div>
              </div>

              <button
                className="gotItBtn"
                style={{
                  width: "-webkit-fill-available",
                  marginBottom: "20px",
                }}
                onClick={step4Click}
              >
                Next{" "}
              </button>
            </div>
          </>
        )}
        {step5 && (
          <div style={{
            height:"300px",
            display:"flex",
            alignItems:"flex-start",
            gap:"50px"
          }}>
            <img src={HardWareNotSupported} alt="step2" />
            <div
              className="content"
              style={{
                width: "75%",
              }}
            >
              <div>
                <h3>Hardware not supported</h3>
                <p
                  style={{
                    width: "75%",
                  }}
                >
                  It looks like your hardware config is not supported by our
                  application. Please e-mail us with the specifications of your
                  device and we will get back to you as soon as possible. Till
                  then you can get familiarised with the app. Stay tuned!
                </p>
              </div>

              <button
                className="gotItBtn"
                style={{
                  width: "70%",
                  marginBottom: "20px",
                }}
                onClick={()=>{}}
              >
                Continue{" "}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* <div className="logoBox">
        <img src={PlanckLogo} alt="logo" />
      </div> */}
      {/* </div> */}
    </div>
  );
};

export default NewWallet;
