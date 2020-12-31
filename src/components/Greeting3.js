import React, { Component, useEffect, useState } from "react";

const Greeting3 = (props) => {
  const [timeState, refreshTimeState] = useState({
    time: props.time,
  });

  const refreshGreeting = () => {
    refreshTimeState({
      time: props.time,
    });
  };

  useEffect(() => {
    setInterval(() => refreshGreeting(), 10000);
  });

  return (
    <div className="Greeting3">
      <h1>Good {timeState.time}</h1>
    </div>
  );
};

export default Greeting3;
