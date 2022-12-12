import React from "react";
import '../styles/host.css'
const Host= ({ host }) => {
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited;

  return (
    <div className="host">
      <div className="host__name">
        <p>{name}</p>
        <p>{lastname}</p>
      </div>

      <img src={host.picture} alt="host" className="host__picture" />
    </div>
  );
};

export default Host;