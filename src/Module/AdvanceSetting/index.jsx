import React from "react";
import { Slider, Checkbox } from "antd";

const AdvancedSetting = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "768px",
        textAlign: "left",
        fontSize: "13px",
        color: "#fff",
        fontFamily: "'DM Sans'",
        backgroundColor: "#18ABA2",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "46px",
          left: "165px",
          width: "141.03px",
          height: "18px",
          fontSize: "14px",
        }}
      >
        <img
          style={{
            position: "absolute",
            top: "0.16px",
            left: "-1.5px",
            width: "20.55px",
            height: "22.09px",
          }}
          alt=""
          src="../../../src/assets/Arrow 1.png"
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "37.03px",
            width: "100%",
          }}
        >
          Back to settings
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "179px",
          left: "227px",
          display: "inline-block",
          width: "166px",
        }}
      >
        Close on exit
      </div>
      <div
        style={{
          position: "absolute",
          top: "231px",
          left: "227px",
          display: "inline-block",
          width: "166px",
        }}
      >
        Hide to tray on Minimize
      </div>
      <div
        style={{
          position: "absolute",
          top: "283px",
          left: "227px",
          display: "inline-block",
          width: "166px",
        }}
      >
        Start with windows
      </div>
      <div
        style={{
          position: "absolute",
          top: "412px",
          left: "255px",
          display: "inline-block",
          width: "226px",
        }}
      >
        Disable notifications when minimized
      </div>
      <div
        style={{
          position: "absolute",
          top: "488px",
          left: "255px",
          display: "inline-block",
          width: "234px",
        }}
      >
        Auto restart mining after benchmark
      </div>
      <div
        style={{
          position: "absolute",
          top: "537px",
          left: "255px",
          display: "inline-block",
          width: "229px",
        }}
      >
        Display notification if mining is active
      </div>
      <div
        style={{
          position: "absolute",
          top: "632px",
          left: "227px",
          display: "inline-block",
          width: "258px",
        }}
      >
        Send diagnostic information about crashes and errors (requires app
        restart to apply)
      </div>
      <div
        style={{
          position: "absolute",
          top: "266px",
          left: "627px",
          display: "inline-block",
          width: "258px",
        }}
      >{`Use T-Rex miner `}</div>
      <div
        style={{
          position: "absolute",
          top: "451px",
          left: "191px",
          display: "inline-block",
          width: "258px",
        }}
      >
        Benchmark:
      </div>
      <div
        style={{
          position: "absolute",
          top: "583px",
          left: "189px",
          display: "inline-block",
          width: "132px",
        }}
      >
        Background Opacity:
      </div>
      <div
        style={{
          position: "absolute",
          top: "323px",
          left: "191px",
          display: "inline-block",
          width: "258px",
        }}
      >
        Notifications:
      </div>
      <div
        style={{
          position: "absolute",
          top: "172px",
          left: "627px",
          display: "inline-block",
          width: "258px",
        }}
      >
        Force low memory (4GB) mode, for older cards it sometimes generates
        higher earnings, it also leaves more VRAM for other use.
      </div>
      <div
        style={{
          position: "absolute",
          top: "362px",
          left: "255px",
          display: "inline-block",
          width: "166px",
        }}
      >
        Enable notifications
      </div>
      <div
        style={{
          position: "absolute",
          top: "95px",
          left: "201px",
          fontSize: "25px",
          fontWeight: "500",
          color: "white !important",
        }}
      >
        Advanced Settings
      </div>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          backgroundColor: "rgba(24, 171, 162, 0.6)",
          width: "1263.97px",
          height: "768px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "162px",
          left: "184px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          border: "2px solid rgba(255, 255, 255, 0.15)",
          boxSizing: "border-box",
          width: "368px",
          height: "520px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "300.43px",
          left: "582px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          border: "2px solid rgba(255, 255, 255, 0.15)",
          boxSizing: "border-box",
          width: "140.64px",
          height: "344.2px",
          transform: " rotate(-90deg)",
          transformOrigin: "0 0",
        }}
      />
      <img
        style={{
          position: "absolute",
          top: "17px",
          left: "1118px",
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
        style={{
          position: "absolute",
          top: "89px",
          left: "40px",
          width: "45px",
          height: "45px",
          objectFit: "cover",
        }}
        alt=""
        src="../../../src/assets/ControlPanel.png"
      />
      <img
        style={{
          position: "absolute",
          top: "156px",
          left: "49px",
          width: "27px",
          height: "27px",
          objectFit: "cover",
        }}
        alt=""
        src="../../../src/assets/Wallet.png"
      />
      <img
        style={{
          position: "absolute",
          top: "216px",
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
          top: "662px",
          left: "44px",
          width: "36px",
          height: "36px",
          objectFit: "cover",
        }}
        alt=""
        src="../../../src/assets/Info.png"
      />
      <Checkbox style={{ position: "absolute", top: "178px", left: "196px" }} />
      <Checkbox style={{ position: "absolute", top: "196px", left: "596px" }} />
      <Checkbox style={{ position: "absolute", top: "265px", left: "596px" }} />
      <Checkbox style={{ position: "absolute", top: "230px", left: "196px" }} />
      <Checkbox style={{ position: "absolute", top: "282px", left: "196px" }} />
      <Checkbox style={{ position: "absolute", top: "282px", left: "196px" }} />
      <Checkbox style={{ position: "absolute", top: "412px", left: "223px" }} />
      {/* <Checkbox style={{ position: "absolute", top: "639px", left: "196px" }} /> */}
      <div
        style={{
          position: "absolute",
          top: "360px",
          left: "222px",
          borderRadius: "3px",
          background:
            "linear-gradient(rgba(24, 171, 162, 0.63), rgba(24, 171, 162, 0.63)), linear-gradient(rgba(24, 171, 162, 0.63), rgba(24, 171, 162, 0.63)), rgba(24, 171, 162, 0.63)",
          width: "20px",
          height: "20px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "487px",
          left: "222px",
          borderRadius: "3px",
          background:
            "linear-gradient(rgba(24, 171, 162, 0.63), rgba(24, 171, 162, 0.63)), linear-gradient(rgba(24, 171, 162, 0.63), rgba(24, 171, 162, 0.63)), rgba(24, 171, 162, 0.63)",
          width: "20px",
          height: "20px",
        }}
      />
      <Checkbox style={{ position: "absolute", top: "536px",
          left: "222px", }} />
      <Slider
        style={{
          position: "absolute",
          top: "575.75px",
          left: "322.75px",
          boxSizing: "border-box",
          width: "209.5px",
          height: "4.5px",
        }}
      />
      <Checkbox checked style={{ position: "absolute", top: "362px", left: "225px" }} />
      <Checkbox checked style={{ position: "absolute", top: "641px", left: "198px" }} />
      <Checkbox checked style={{ position: "absolute", top: "490px", left: "225px" }} />

      <img
        style={{
          position: "absolute",
          top: "703px",
          left: "1127px",
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

export default AdvancedSetting;
