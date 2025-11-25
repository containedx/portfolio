import React, { useState, useEffect } from "react";
import cat from "../assets/cursor/cat_pixel_cursor.png";

const LoadingScreen: React.FC = () => {
  const [catPos, setCatPos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCatPos((prev) => (prev + 1) % 3); // cycle through 0,1,2
    }, 500); // half second per step
    return () => clearInterval(interval);
  }, []);

  const renderDots = () => {
    return [0, 1, 2].map((i) => {
      if (i === catPos) {
        return <img key={i} src={cat} style={{ width: "4rem", margin: "0 0.2rem" }} />;
      } else {
        return <span key={i}>.</span>;
      }
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "3rem",
        fontWeight: "bold",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      loading {renderDots()}
    </div>
  );
};

export default LoadingScreen;
