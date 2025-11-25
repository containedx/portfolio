import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
//import cloud from "../assets/img/cloud.webp";
//import flower from "../assets/img/flower.webp";
import Typewriter from "./Typewriter";
import frame from "../assets/img/frameLong.webp";
import minecraftBackground from "../assets/img/backgroundFlowersMinecraft.png";

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
  //const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(stages.length - 1) * 100}%`]);

  const [activeStage, setActiveStage] = useState(-1);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const index = Math.round(p * (stages.length - 1 ));
    setActiveStage(index);
  });

  const bgAlpha = useTransform(scrollYProgress, [0, 1], [0, 1]);


  return (
    <section ref={ref} 
    style={{
        position: "relative",
        height: "400vh",
        marginTop: "20vh",
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
          <Typewriter text="MY CAREER GROWTH 🌼" />
        </h1>
      </div>

        {/* fade background*/}
      <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${minecraftBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
            opacity: bgAlpha,
          }}
        />

      {/* stages */}
      {stages.map((stage, i) => {

        const isVisible = i <= activeStage;

        return (
          <motion.div
            key={i}
            initial={{ x: "100vw", opacity: 0, scale: 0.5 }}
            animate={
              isVisible
                ? { x: "0vw", opacity: 1, scale: 0.8 }
                : { x: "100vw", opacity: 0, scale: 0.5 }
            }
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
            }}
            style={{
              position: "absolute",
              top: `${16 + i * 16}%`,
              left: "23vw",
              transform: "translateY(-50%)",
              width: "50vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "16vh",
                width: "100%",
                backgroundImage: `url(${frame})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              }}
            >
              <h2 style={{ fontSize: "1.2vw", margin: 0 }}>{stage.years}</h2>
              <h2 style={{ fontSize: "1.6vw", margin: 0 }}>{stage.role}</h2>
              <h3 style={{ fontSize: "1vw", margin: 0 }}>{stage.title}</h3>
              <p style={{ fontSize: "0.9vw", marginTop: "1vh" }}>
                {stage.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>

    </section>
  );
};

export default Career;
