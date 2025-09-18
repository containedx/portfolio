import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import cloud from "../assets/img/cloud.webp";
import flower from "../assets/img/flower.webp";
import Typewriter from "./Typewriter";

const Career: React.FC = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const stages = [
  { title: "Bachelor of Engineering Deegree", role: "Applied Computer Science", color: "#9084b4ff", years: "2017 - 2021", description: "University of Science And Technology Krakow" },
  { title: "Push Gaming", role: "Game Developer", color: "#56679fff", years: "2020", description: "javascript ● typescript ● PixiJS ● web browser games"},
  { title: "Intermarum", role: "Game Developer", color: "#cc9c68ff", years: "2021", description: " C# ● UnityEngine" },
  { title: "Plucky Bytes", role: "Game Programmer", color: "#d572d5ff", years: "2021 - 2023", description: " gdscript ● C++ ● Godot Engine " },
  { title: "Hello There Games", role: "Game Developer", color: "#68935bff", years: "2023 - now", description: "C# ● Unity Engine" },
];

  // przesuwamy tylko tło
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(stages.length - 1) * 100}%`]);

  const [activeStage, setActiveStage] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const index = Math.round(p * (stages.length - 1 ));
    setActiveStage(index);
  });

  return (
    <section ref={ref} 
    style={{
        position: "relative",
        height: "400vh",
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
            fontSize: "8vh",
            fontWeight: "bold",
            color: "#688c71ff",
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
            letterSpacing: "2px",
            }}
          > 
              <Typewriter text="MY CAREER GROWTH 🌼"  />
          </h1>
        </div>

        <div 
        style={{
            position: "absolute",
            bottom: "1%",
            left: "2%",
            zIndex: 10
          }}>


        {/* growing flowers with stage */}
          <div style={{ display: "flex", gap: "4px" }}>
            {/* <h2>active stage {activeStage} </h2> */}
            <div style={{ display: "flex", gap: "4px" }}>
              {[...Array(stages.length)].map((_, i) => {
                const isVisible = i <= activeStage;
                //const isLast = i === activeStage;

                return (
                  <motion.img
                    key={i}
                    src={flower}
                    alt="flower"
                    style={{ height: "20vh" }}
                    initial={{ scale: 0, y: 50, opacity: 0 }}
                    animate={isVisible ? { scale: 1, y: 0, opacity: 1 } : { scale: 0, y: 50, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 120, damping: 12 }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* career stages */}
        <motion.div
          style={{
            display: "flex",
            height: "100%",
            x,
          }}
        >
          {stages.map((stage, i) => (
            <div
              key={i}
              style={{
                minWidth: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >

              <div
                style={{
                      height: "50vh",
                      width: "50vw",
                      backgroundImage: `url(${cloud})`,
                      backgroundSize: "100% 100%",
                      backgroundPosition: "center", 
                      backgroundRepeat: "no-repeat",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      
                      }}
              >     
                  <h2 style = {{ lineHeight: "0"}}>{stage.years}</h2>
                  <h2 style = {{fontSize: "2vw", lineHeight: "0"}}>{stage.role}</h2>
                  <h2 style = {{ lineHeight: "0"}}>{stage.title}</h2>
                  {stage.description}
              </div>
              
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Career;
