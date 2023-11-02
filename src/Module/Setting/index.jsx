import React from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom';
import { Slider, Switch } from 'antd';

const Setting = () => {
  const navigate = useNavigate()
    const func = async () => {
        window
          .loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.17.0/full/",
          })
          .then((pyodide) => {
            pyodide
              .runPythonAsync(
                `
    print("hello python")
    import sys
    sys.version
    `
              )
              .then((version) => {
                console.log(version);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      };
      return (
        <div className='setting'>
<div className="rectangle-parent">
          <div className="group-child" />
          <div className="vector-parent">
            <div className="group-inner" />
            <div className="rectangle-div" />
            <div
              className="group-child1"
              onClick={func}
              style={{ cursor: "pointer" }}
            />
            <div className="line-div" />
            <div className="group-child3" />
            <img onClick={()=>navigate("/")} className="control-panel-icon" alt="" src="../../../src/assets/ControlPanel.png" />
            <img className="wallet-icon" alt="" src="../../../src/assets/Wallet.png" />
            <img
              className="settings-icon"
              alt=""
              src="../../../src/assets/Settings.png"
            />
            <img
              className="settings-icon1"
              alt=""
              src="../../../src/assets/Settings.png"
            />
            <img className="info-icon" alt="" src="../../../src/assets/Info.png" />
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
            <b className="mining-gpu">Mining GPU</b>
            <div className="advanced-settings">Advanced Settings</div>
            <b className="mining-cpu">Mining CPU</b>
            <div className="settings">Settings</div>
            <b className="task-type">Task type</b>
            <b className="try-running-benchmark">
              Try running benchmark to detect GPU
            </b>
            <b
              className="run-benchmark"
              style={{ cursor: "pointer" }}
              onClick={func}
            >
              Run Benchmark
            </b>
            <Switch size='small' className="toggle-off-icon"/> 
            <Switch size='small' className="toggle-on-icon"/> 
            <div className="line-parent">
              <div className="group-child4" />
              <div className="group-child5" />
              <div className="group-child6" />
              <img className="charts-icon" alt="" src="../../../src/assets/charts.png" />
              <b className="cpu">CPU</b>
              <b className="node-name">Node name</b>
              <div className="click-name-to">(Click name to edit)</div>
              <div className="cpu-threads-12-container">
                <span>CPU Threads:</span>
                <b> 1/2</b>
              </div>
              <Slider className="line-icon" defaultValue={30} />
            </div>
            <div className="estimated-profit-000-container">
              <span>
                <span>Estimated profit:</span>
                <span className="span">{` `}</span>
              </span>
              <b className="month">{`$0.00 / month `}</b>
            </div>
            <div className="current-hashrate-container">
              <span>
                <span>Current Hashrate</span>
                <span className="span1">:</span>
                <span className="span">{` `}</span>
              </span>
              <b className="month">-- MH/s</b>
            </div>
            <img
              className="planck-white-no-background-1"
              alt=""
              src="../../../src/assets/Planck white no background 1.png"
            />
          </div>
        </div>
        </div>
      );
}

export default Setting