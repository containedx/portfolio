import React  from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import IntroCanvasSequence from "./components/IntroCanvasSequence";

gsap.registerPlugin(ScrollTrigger);


const App: React.FC = () => {
  

  return (
    <div style={{ position: "relative" }}>
      
      <IntroCanvasSequence/>

      {/* Scrollable Content Area */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ height: "6000px", width: "100vw" }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                padding: "20vh 2rem",
              }}
            >
              <p>
              </p>
            </div>
          ))}
        </div>

        <div style={{ height: "5000px", width: "100vw" }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                padding: "20vh 2rem",
              }}
            >
              <p
                style={{
                  background: "rgba(0, 0, 0, 0.85)",
                  color: "#fff",
                  padding: "2rem",
                  maxWidth: "40%",
                  fontSize: "1.25rem",
                  lineHeight: "2rem",
                  borderRadius: "8px",
                }}
              >
                Paragraph {i + 1}: some cool stuff about mee
                bragging about ME 
                etc etc etc
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default App;
