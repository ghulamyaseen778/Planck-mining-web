/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../src/assets/ControlPanel.png";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Module/Dashboard";
import Setting from "./Module/Setting";
import GettingStarted from "./Module/Getting-started/GettingStarted";
import ChoosePath from "./Module/Getting-started/ChoosePath";
import Wallet from "./Module/Wallet";
import AdvancedSetting from "./Module/AdvanceSetting";
function App() {
  return (
    <Routes>
      <Route  index path="/" element={<Dashboard />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/advance" element={<AdvancedSetting />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route  path="/getting-started" element={<GettingStarted />} />
      <Route path="/choose-path" element={<ChoosePath />} />
    </Routes>
  );
}

export default App;
