import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import Typewriter from "./Typewriter";
import cloud from "../assets/img/cloud3.png";

const Career: React.FC = () => {
  const isMobile = window.innerWidth < 768;

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const stages = [
    {
      title: "Applied Computer Science",
      role: "Studies",
      years: "2017 - 2021",
      description: "C++ ● C ● web dev ● math ● physics ● java ● php ● linux ● python",
    },
    {
      title: "Push Gaming",
      role: "Game Developer",
      years: "July 2020 - September 2020",
      description: "JavaScript ● TypeScript ● PixiJS",
    },
    {
      title: "Intermarum",
      role: "Game Developer",
      years: "February 2021 - August 2021",
      description: "C# ● Unity Engine",
    },
    {
      title: "Plucky Bytes",
      role: "Game Programmer",
      years: "October 2021 - May 2023",
      description: "GDScript ● C++ ● Godot Engine",
    },
    {
      title: "Hello There Games",
      role: "Game Developer",
      years: "November 2023 - now",
      description: "C# ● Unity Engine",
    },
  ];

  const [activeStage, setActiveStage] = useState(-1);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const index = Math.round(p * (stages.length - 1));
    setActiveStage(index);
  });

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        height: "400vh",
        marginTop: "20vh",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* TITLE */}
        <div
          style={{
            position: "absolute",
            top: "4vh",
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
            }}
          >
            <Typewriter text="MY CAREER GROWTH 🌼" />
          </h1>
        </div>

        {/* STAGES FLEX WRAP */}
        <div
          style={{
            position: "absolute",
            top: isMobile ? "15vh" :"25vh",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center", 
            gap: "3vh", 
            zIndex: 10,
          }}
        >
          {stages.map((stage, i) => {
            const isVisible = i <= activeStage;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
                style={{
                  height: isMobile ? "20vh" : "35vh",
                  width: isMobile ? "46vw" : "30vw",
                  display: "flex",
                  justifyContent: "center",
                }}
              >

                {/* CLOUD */}
                <motion.div
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "1vh",
                    backgroundImage: `url(${cloud})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                  }}
                  animate={{
                    x: ["0px", "5px", "-5px", "3px", "0px"],
                    y: ["0px", "3px", "-3px", "2px", "0px"],
                  }}
                  transition={{
                    duration: 6 + Math.random() * 4,  // random duration 6-10s for each cloud
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                    <h2 style={{ fontSize: isMobile ? "0.6rem" : "1.2vw", margin: 0 }}>
                      {stage.years}
                    </h2>

                    <h2 style={{ fontSize: isMobile ? "1.4rem" : "1.5vw", margin: 0, color:"#B7C9E2", fontFamily: "JetBrains Mono, monospace" }}>
                      {stage.role}
                    </h2>

                    <h3 style={{ fontSize: isMobile ? "1rem" : "1vw", margin: 0 }}>
                      {stage.title}
                    </h3>

                    {!isMobile && (<p style={{ fontSize: "0.9vw", marginTop: "0.5vh", width: "30vh", }}>
                      {stage.description}
                    </p>)}
                </motion.div>

                {/* END CLOUD */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Career;
