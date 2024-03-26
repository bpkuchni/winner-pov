import React, { FunctionComponent } from "react";
import { Rank } from "./rank";

const containerStyles = {
  "background-size": "cover",
};

export const Player: FunctionComponent<Player> = (player: Player) => (
  <div
    style={{
      ...containerStyles,
      backgroundImage: `url(${player.portraitUrl})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "150px",
      height: "360px",
      color: "white",
      padding: "5px",
      "text-align": "center",
      "text-wrap": "wrap",
    }}
  >
    <h2>
      {player.name}#{player.tag}
    </h2>
    <Rank {...player.rank} />
  </div>
);
