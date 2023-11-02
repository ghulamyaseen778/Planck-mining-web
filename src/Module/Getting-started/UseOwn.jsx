/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./styles.css";
import Shopping from "../../assets/Shopping.svg";
import Back from "../../assets/Arrow 1.svg";
import Step4 from "../../assets/Step4.svg";
import gotItIcon from "../../assets/Group 91.svg"
const UseOwn = () => {
  const [gotIt, setGotIt] = useState(false);
  const [step1, setStep1] = useState(true);

  const GotItClick = () => {
    setGotIt(true);
  };
  return (
    <>
      {!gotIt ? (
        <div className="useOwnMainStart">
          <div className="useOwnWrapper">
            <img src={gotItIcon} alt="step2" />
            <div
              className="content"
              style={{
                height: "85%",
              }}
            >
              <h3>Don’t use an exchange address</h3>
              <p>
                Planck works best with addresses where the user has self
                custody. We dont support using an centralized exchange adress.
              </p>
              <p
                style={{
                  marginBottom: "60px",
                }}
              >
                We strongly advise using Metamask wallet or a wallet similar to
                it, such as Flash wallet or Trust wallet.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button
                  className="gotItBtn"
                  style={{
                    width: "300px",
                  }}
                  onClick={GotItClick}
                >
                  Got it{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="useOwnStep2">
          <h2 className="getStartheading">Getting Started</h2>
          <button className="backBtn">
            <img src={Back} alt="back" />
            Back to main screen
          </button>
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
                <p>Wallet</p>
              </div>
              <div className="line"></div>
              <div className="everyStep">
                <div
                  className="stepperCircle"
                  style={{
                    background: "rgba(24, 171, 162, 0.63)",
                  }}
                >
                  2
                </div>
                <p>Name</p>
              </div>
              <div className="line"></div>

              <div className="everyStep">
                <div
                  className="stepperCircle"
                  style={{
                    background: " rgba(24, 171, 162, 0.63)",
                  }}
                >
                  3
                </div>
                <p>Benchmark</p>
              </div>
            </div>

            <div className="imgContentWrapper" style={{
                height:"370px"
            }}>
              <img src={Step4} alt="step2" />
              <div className="content">
                <div>
                  <h3
                    style={{
                      fontSize: "24px",
                      marginBottom: 0,
                    }}
                  >
                    Only use a Metamask address or a comparable version
                  </h3>
                  <p
                    style={{
                      color: "#C7C7C7",
                      fontFamily: "DM Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      marginTop: 0,
                    }}
                  >
                    Paste your address
                  </p>
                  <input />
                </div>
                <div>
                  <p
                    style={{
                      color: "#C7C7C7",
                      fontFamily: "DM Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      marginTop: 0,
                    }}
                  >
                    If you provide an exchange address then we cannot pay out
                    your PLN tokens.{" "}
                  </p>
                  <button
                    className="gotItBtn"
                    style={{
                      width: "500px",
                      marginBottom: "20px",
                    }}
                    onClick={() => {}}
                  >
                    Next{" "}
                  </button>
                </div>
                <p
                  style={{
                    color: "#FFF",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    width:"75%"
                  }}
                >
                  <span
                    style={{
                      fontWeight: 400,
                    }}
                  >
                    IMPORTANT:{" "}
                  </span>
                  Please make sure you provide a valid address and that you have
                  control over it. We recommend using Metamask, Flash Wallet or
                  Trust Wallet. Please make sure that you have read this
                  document: How to configure Planck&apos;s Constant-Chain and
                  PLN token in your wallet. Press HERE to read the document
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UseOwn;
