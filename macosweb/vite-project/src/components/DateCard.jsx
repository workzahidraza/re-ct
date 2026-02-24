import React from "react";

const DateCard = () => {
  const now = new Date();
  const date = now.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  const year = now.getFullYear();

  return (
    <div className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-2xl px-10 py-6 text-center shadow-xl text-white">
      <h2 className="text-3xl font-light">{date}</h2>
      <p className="text-lg opacity-70">{day}</p>
      <p className="text-sm opacity-50">{year}</p>
    </div>
  );
};

export default DateCard;
