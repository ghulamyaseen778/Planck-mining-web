import React from "react";
import "./index.css"
import { useNavigate } from "react-router-dom";
const Wallet = () => {
    const navigate = useNavigate();
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        textAlign: "left",
        fontSize: "9px",
        color: "#fff",
        fontFamily: "'DM Sans'",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "786px",
          minHeight:"100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            backgroundColor:"#18ABA2"
          }}
        />
        <b style={{ position: "absolute", top: "222px", left: "608px" }}>
          COPY
        </b>
        <b style={{ position: "absolute", top: "222px", left: "690px" }}>
          EDIT
        </b>
        <div
          style={{
            position: "absolute",
            top: "242.19px",
            left: "845.99px",
            border: "2px solid rgba(255, 255, 255, 0.15)",
            boxSizing: "border-box",
            width: "48.19px",
            height: "397.1px",
            transform: " rotate(-89.72deg)",
            transformOrigin: "0 0",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "240.22px",
            left: "574px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxSizing: "border-box",
            width: "24.22px",
            height: "64.67px",
            transform: " rotate(-89.72deg)",
            transformOrigin: "0 0",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "239.88px",
            left: "657px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxSizing: "border-box",
            width: "23.88px",
            height: "60.49px",
            transform: " rotate(-89.72deg)",
            transformOrigin: "0 0",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "25px",
            left: "1109px",
            width: "126.01px",
            height: "16.01px",
          }}
          alt=""
          src="/group-22.svg"
        />
        <div
          style={{
            position: "absolute",
            top: "-0.37px",
            left: "147.63px",
            borderRight: "0.8px solid rgba(255, 255, 255, 0.7)",
            boxSizing: "border-box",
            width: "0.75px",
            height: "768.75px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "99.63px",
            left: "169.63px",
            borderRight: "0.8px solid rgba(255, 255, 255, 0.7)",
            boxSizing: "border-box",
            width: "0.75px",
            height: "25.75px",
          }}
        />
        <img
        onClick={()=>navigate("/")}
          style={{
            position: "absolute",
            top: "97px",
            left: "40px",
            width: "45px",
            height: "45px",
            objectFit: "cover",
          }}
          alt=""
          src="../../../src/assets/ControlPanel.png"
        />
        <img
         onClick={()=>navigate("/wallet")}
          style={{
            position: "absolute",
            top: "163px",
            left: "49px",
            width: "27px",
            height: "27px",
            objectFit: "cover",
          }}
          alt=""
          src="../../../src/assets/Wallet.png"
        />
        <img
         onClick={()=>navigate("/setting")}
          style={{
            position: "absolute",
            top: "222px",
            left: "47px",
            width: "31px",
            height: "31px",
            objectFit: "cover",
          }}
          alt=""
          src="../../../src/assets/Settings.png"
        />
        <img
          style={{
            position: "absolute",
            top: "670px",
            left: "35px",
            width: "36px",
            height: "36px",
            objectFit: "cover",
          }}
          alt=""
          src="../../../src/assets/Info.png"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "97px",
          left: "199px",
          fontSize: "25px",
          fontWeight: "500",
        }}
      >
        Wallet
      </div>
      <div
        style={{
          position: "absolute",
          top: "222px",
          left: "199px",
          fontSize: "10px",
        }}
      >
        Your Address:
      </div>
      <b
        style={{
          position: "absolute",
          top: "205px",
          left: "995px",
          fontSize: "21px",
        }}
      >
        Withdraw
      </b>
      <div
        style={{
          position: "absolute",
          top: "285px",
          left: "195px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          width: "1047px",
          height: "334px",
          fontSize: "15px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            border: "2px solid rgba(255, 255, 255, 0.15)",
            boxSizing: "border-box",
            width: "404px",
            height: "334px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "432px",
            border: "2px solid rgba(255, 255, 255, 0.15)",
            boxSizing: "border-box",
            width: "191px",
            height: "334px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "651px",
            border: "2px solid rgba(255, 255, 255, 0.15)",
            boxSizing: "border-box",
            width: "396px",
            height: "334px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "74px",
            left: "691px",
            width: "103px",
            height: "107px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "75px",
            left: "473px",
            width: "115px",
            height: "106px",
            objectFit: "cover",
          }}
          alt=""
          src="../../../src/assets/coins and banknotes.png"
        />
        <img
          style={{
            position: "absolute",
            top: "77px",
            left: "19px",
            width: "100px",
            height: "98px",
            objectFit: "cover",
          }}
          alt=""
          src="../../../src/assets/wallet with money.png"
        />
        <div style={{ position: "absolute", top: "31px", left: "29px" }}>
          My Balance
        </div>
        <div style={{ position: "absolute", top: "216px", left: "475px" }}>
          Estimated Profit
        </div>
        <div
          style={{
            position: "absolute",
            top: "172px",
            left: "691px",
            fontSize: "12px",
          }}
        >
          <p
            style={{ margin: "" }}
          >{`Using an external wallet is the most secure way to keep `}</p>
          <p
            style={{ margin: "" }}
          >{`your hard-earned tokens safe. By selecting the Wallet `}</p>
          <p
            style={{ margin: "" }}
          >{`tab and clicking edit, you may quickly change your `}</p>
          <p style={{ margin: "" }}>
            <span>{`wallet address. `}</span>
            <span style={{ fontSize: "11px" }}>
              (For example your existing Metamask wallet)
            </span>
          </p>
        </div>
        <b
          style={{
            position: "absolute",
            top: "83px",
            left: "146px",
            fontSize: "30px",
          }}
        >
          $0.00
        </b>
        <b
          style={{
            position: "absolute",
            top: "83px",
            left: "691px",
            fontSize: "20px",
          }}
        >
          Tips and tricks
        </b>
        <b
          style={{
            position: "absolute",
            top: "216px",
            left: "144px",
            fontSize: "20px",
          }}
        >
          $0.00
        </b>
        <b
          style={{
            position: "absolute",
            top: "254px",
            left: "465px",
            fontSize: "20px",
          }}
        >
          $-.-- / month
        </b>
        <div
          style={{
            position: "absolute",
            top: "130px",
            left: "146px",
            color: "#939191",
          }}
        >
          0.0000 PLN
        </div>
        <div
          style={{
            position: "absolute",
            top: "251px",
            left: "146px",
            color: "#939191",
          }}
        >
          0.0000 PLN
        </div>
        <div
          style={{
            position: "absolute",
            top: "187px",
            left: "146px",
            color: "#939191",
          }}
        >
          Pending
        </div>
      </div>
      <img
        style={{
          position: "absolute",
          top: "220px",
          left: "664px",
          width: "16px",
          height: "16px",
          objectFit: "cover",
        }}
        alt=""
        src="../../../src/assets/Edit.png"
      />
      <img
        style={{
          position: "absolute",
          top: "220px",
          left: "580px",
          width: "16px",
          height: "16px",
          objectFit: "cover",
        }}
        alt=""
        src="../../../src/assets/Paste.png"
      />
      <img
        style={{
          position: "absolute",
          top: "706px",
          left: "1123px",
          width: "108px",
          height: "30px",
          objectFit: "cover",
        }}
        alt=""
        src="../../../src/assets/Planck white no background 1.png"
      />
    </div>
  );
};

export default Wallet;
