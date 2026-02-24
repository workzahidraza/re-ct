import React, { useState } from "react";
import TopBar from "../components/TopBar";
import Dock from "../components/Dock";
import Calculator from "../apps/Calculator";
import TimeCard from "../components/TimeCard";
import DateCard from "../components/DateCard";

const MacOS = () => {
  const [showCalc, setShowCalc] = useState(false);

  return (
    <div className="h-screen w-screen bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-green-900 opacity-60 blur-3xl"></div>

      <TopBar />

      {/* Right Widgets */}
      <div className="absolute right-10 top-20 flex flex-col gap-6">
        <TimeCard />
        <DateCard />
      </div>

      {/* Calculator */}
      {showCalc && <Calculator onClose={() => setShowCalc(false)} />}

      {/* Dock */}
      <Dock openCalculator={() => setShowCalc(true)} />
    </div>
  );
};

export default MacOS;
