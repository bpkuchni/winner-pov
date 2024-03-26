import React, { FunctionComponent } from "react";

const containerStyles = {
  display: "flex",
};

export const Rank: FunctionComponent<Rank> = (rank: Rank) => (
  <img src={`${rank.iconSmallUrl}`} />
);
