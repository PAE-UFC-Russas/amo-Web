import React from "react";

export default function HorizontaLine({ height = "2px", color = "#ccc" }) {
  const style = {
    width: "100%",
    height: height,
    backgroundColor: color,
    margin: "20px 0",
  };

  return <div style={style}></div>;
}
