import * as React from "react";
import { useState, useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Player } from "../components/player";
import icon from "../images/icon.png";

const flexContainer = {
  display: "flex",
  gap: "3rem",
  "justify-content": "center",
  "flex-wrap": "wrap",
};

const imageStyle = {
  height: "180px",
  width: "180px",
  "margin-left": "auto",
  "margin-right": "auto",
  display: "block",
};

const IndexPage: React.FC<PageProps> = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetch("http://173.46.250.62:26082/api/Players")
      .then((res: Response) => {
        return res.json();
      })
      .then((data: Player[]) => {
        console.log(data);
        setPlayers(data);
      });
  }, []);

  return (
    <main>
      <img src={icon} style={imageStyle} />
      <div style={flexContainer}>
        {players
          .sort((a: Player, b: Player) => b.mmr - a.mmr)
          .map((player) => (
            <Player {...player} />
          ))}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Winner POV</title>;
