import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import Typewriter from "./Typewriter";

// images
//import certificate from "../assets/img/certificates/certificate.webp";
import ai_gaming from "../assets/img/certificates/ai_algorithms_for_gaming.png";
import ai_business from "../assets/img/certificates/AI_business.png";
import ai_unity from "../assets/img/certificates//AI_unity.png";
//import english from "../assets/img/certificates/englishC2.webp";
import scrum from "../assets/img/certificates/ScrumMasterCertified-KingaZawarty.png";
import ui_ux from "../assets/img/certificates/UI_UX.png";
import unreal from "../assets/img/certificates/unreal_essential.png";

import agh from "../assets/img/agh.jpg";

const Education: React.FC = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const stages = [
    { title: "Scrum", img: scrum, description: "during my studies I had the opportunity to participate in official Scrum Master and Agile course. I learned this iterative workflow early, and it was applied in some way in all my professional experiences." },
    { title: "Ai Algorithms for Gaming", img: ai_gaming, description: "course about AI algorithims and their practical application in gaming. It focused on turn-based games, minimax algorithm, depth-limited search and iterative deepening." },
    { title: "Unreal", img: unreal, description: "learning basics of development in Unreal Engine" },
    { title: "Ai Unity", img: ai_unity, description: "very practical AI algorithms course in Unity environment. It includes for example waypoints, navigation, nav meshes, crowd simulation, behaviour trees and goal oriented action planning." },
    { title: "UI UX", img: ui_ux, description: "getting to know UI and UX design principles. Hands on experience with Figma and design." },
    { title: "AI in Business Development", img: ai_business, description: "course organized by Google I got in. It focused on efficient usage of AI as well as possibilities it gives, especially in business and automation." },
    //{ title: "English C2", img: english, description: "description" },
  ];

  const [activeStage, setActiveStage] = useState(0);

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const index = Math.floor(p * stages.length);
    setActiveStage(index - 1);
  });

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        height: "400vh",
        marginTop: "20vh"
      }}
    >
      {/* sticky viewport */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* main title */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 20,
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "4vw",
              fontWeight: "bold",
              color: "#688c71ff",
              textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
              letterSpacing: "2px",
            }}
          >
            <Typewriter text="MY EDUCATION 🎓"  />
          </h1>
        </div>
        
        {/* university */}
        <motion.div
          style={{
            position: "absolute",
            top: isMobile ? "15vh" : "28vh",
            height: "80vh",
            width: isMobile ? "46vh" : "60vh",
            marginLeft: "8vh",
            objectFit: "contain",
          }}
          initial={{ scale: 0, y: 50, opacity: 0 }}
          whileInView={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          
          <div style={{ opacity: 0.7, fontSize: "2rem", marginBottom: "1rem" }}>
            2017 — 2021
          </div>

          <div style={{ fontSize: "1.2rem", fontWeight: 600 }}>
            AGH University of Kraków
          </div>

          <div style={{ fontSize: "2rem", opacity: 0.85, marginTop: "1rem", fontFamily: "JetBrains Mono, monospace", }}>
            Applied Computer Science
          </div>

          <div style={{ fontSize: "1.2rem", opacity: 0.6, marginTop: "0.25rem"}}>
            Bachelor of Engineering
          </div>

          <img
            src={agh}
            style={{
              marginTop: "1rem",
              width: "60%",
              objectFit: "contain",
              opacity: 0.95,
            }}
          />

        </motion.div>

        {/* certificates */}
        {!isMobile && ( <div
          style={{
            position: "absolute",
            top: "15vh",
            left: "25vw",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4px",
              maxWidth: "80vw",
              margin: "10vh",
            }}
          >
            {stages.map((stage, i) => {
              const isVisible = i <= activeStage;
              return (
                <motion.div
                  key={i}
                  style={{
                    height: "30vh",
                    width: "18vw",
                    margin: "1vh",
                    perspective: "1000px",
                  }}
                  initial={{ scale: 0, y: 50, opacity: 0 }}
                  animate={isVisible ? { scale: 1, y: 0, opacity: 1 } : { scale: 0, y: 50, opacity: 0 }}
                  exit={{ scale: 0, y: 50, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 12 }}
                  className="flip-card"
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={stage.img}
                        alt={stage.title}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    </div>
                    <div className="flip-card-back">{stage.description || "No description"}</div>
                  </div>

                  <style>
                    {`
                      .flip-card-inner {
                        width: 100%;
                        height: 100%;
                        transition: transform 0.8s;
                        transform-style: preserve-3d;
                        position: relative;
                      }
                      .flip-card:hover .flip-card-inner {
                        transform: rotateY(180deg);
                      }
                      .flip-card-front,
                      .flip-card-back {
                        position: absolute;
                        inset: 0;
                        backface-visibility: hidden;
                      }
                      .flip-card-back {
                        background: #fff;
                        color: #000;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 0.5rem;
                        transform: rotateY(180deg);
                        box-sizing: border-box;
                      }
                    `}
                  </style>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default Education;
