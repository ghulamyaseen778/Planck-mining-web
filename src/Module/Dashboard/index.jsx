import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Switch } from "antd";
import io from "socket.io-client";
// import PY from "../../PY/index.py"

function Dashboard() {
  const [ws, setWs] = useState(null);
  const navigate = useNavigate();
  //paste ip and port on these side
  const so = new WebSocket("ws://127.0.0.1:8765"); 
  useEffect(() => {
    so.onopen = () => {
      console.log("Connection success");
      setWs(so);
    };
  }, []);
  so.addEventListener("message", ({ data }) => {
    // const event = JSON.parse(data);
    // do something with event
    console.log(data);
  });
  const func = async () => {
    so.send(JSON.stringify("zahab"));
  };
  return (
    <div className="dashboard">
      <div className="frame-parent">
        <div className="rectangle-wrapper">
          <div className="frame-child" />
        </div>
        <div className="group-child" />
        <div className="group-item" />
        <div
          className="group-inner"
          onClick={func}
          style={{ cursor: "pointer" }}
        />
        <div className="rectangle-div" />
        <div className="group-child1" />
        <div className="line-div" />
        <div className="group-child2" />
        <img
          className="control-panel-icon"
          alt=""
          src="../../../src/assets/ControlPanel.png"
        />
        <img
         onClick={()=>navigate("/wallet")}
          className="wallet-icon"
          alt=""
          src="../../../src/assets/Wallet.png"
        />
        <img
          onClick={() => navigate("/setting")}
          className="settings-icon"
          alt=""
          src="../../../src/assets/Settings.png"
        />
        <img className="info-icon" alt="" src="../../../src/assets/Info.png" />
        <img
          className="charts-icon"
          alt=""
          src="../../../src/assets/charts.png"
        />
        <img
          className="browser-window-with-code"
          alt=""
          src="../../../src/assets/browser window with code.svg"
        />
        <img
          className="coins-and-banknotes"
          alt=""
          src="../../../src/assets/coins and banknotes.png"
        />
        <img
          className="wallet-with-money"
          alt=""
          src="../../../src/assets/wallet with money.png"
        />
        <div className="dashboard">Dashboard</div>
        <div className="my-balance">My Balance</div>
        <div className="estimated-profit">Estimated Profit</div>
        <b className="b">$0.00</b>
        <b className="gpu-mining">GPU Mining</b>
        <b className="cpu-mining">CPU Mining</b>
        <b
          className="start-mining"
          onClick={func}
          style={{ cursor: "pointer" }}
        >
          Start Mining
        </b>
        <b className="b1">$0.00</b>
        <b className="month">$-.-- / month</b>
        <div className="pln">0.0000 PLN</div>
        <div className="pln1">0.0000 PLN</div>
        <div className="pending">Pending</div>
        <b className="enabled">Enabled</b>
        <b className="enabled1">Enabled</b>
        <Switch size="small" className="toggle-on-icon" />
        <Switch size="small" className="toggle-on-icon1" />
        <img
          className="planck-white-no-background-4"
          alt=""
          src="../../../src/assets/Planck white no background 1.png"
        />
      </div>
    </div>
  );
}

export default Dashboard;
