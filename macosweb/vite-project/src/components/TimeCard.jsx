import React, { useEffect, useState } from "react";

const TimeCard = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-2xl px-10 py-6 text-center shadow-xl text-white">
      <h1 className="text-6xl font-light">{time}</h1>
    </div>
  );
};

export default TimeCard;
