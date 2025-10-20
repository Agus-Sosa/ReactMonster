import React from "react";

export default function Game() {
  return (
    <div style={{ width: "100%", height: "100vh", background: "black" }}>
      <iframe
        src="/rpg/Rm//www/index.html"
        style={{
          border: "none",
          width: "100%",
          height: "100%",
        }}
        title="React Monsters RPG"
      />
    </div>
  );
}