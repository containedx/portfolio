import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import Typewriter from "./Typewriter";

const Projects: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [activeStage, setActiveStage] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

const stages = [
  { title: "Project X", years: "2017 - 2021", description: "University of Science", color: "#A79CC9" }, // fiolet podstawowy
  { title: "Project Z", years: "2021", description: "C#, Unity", color: "#92A6DD" }, // delikatny niebiesko-fioletowy
  { title: "Project W", years: "2021-2023", description: "GDScript, Godot Engine", color: "#8AB8E0" }, // pastelowy błękit
  { title: "Project V", years: "2023-now", description: "C#, Unity Engine", color: "#B7C9E2" }, // jasny błękit z Twojej palety
];


  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const index = Math.floor(p * stages.length);
    if (index !== activeStage) {
      setDirection(index > activeStage ? "forward" : "backward");
      setActiveStage(index);
    }
  });

  return (
    <section ref={ref} style={{ position: "relative", height: `${stages.length * 100}vh`, 
                                backgroundColor: direction === "forward"
                                ? stages[Math.max(0, activeStage - 1)]?.color 
                                : stages[Math.min(stages.length - 1, activeStage + 1)]?.color,
                                }}>

        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        
        {/* Main title */}
        <div style={{ position: "absolute", left: 0, right: 0, zIndex: 20, textAlign: "center" }}>
          <h1 style={{ fontSize: "8vh", fontWeight: "bold", color: "#FAF9FF", textShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}>
            <Typewriter text="MY HIGHLIGHTED PROJECTS 🚀"  />
          </h1>
        </div>

        {/* Current project */}
        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          {stages.map((stage, i) =>
            i === activeStage && (
              <motion.div
                key={i}
                style={{
                  height: "100vh",
                  width: "100vw",
                  backgroundColor: stage.color,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "2rem",
                  position: "absolute",
                }}
                initial={{ x: direction === "forward" ? "100vw" : "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === "forward" ? "-100vw" : "100vw", opacity: 0 }}
                transition={{ type: "tween", stiffness: 120, damping: 12 }}
              >
                <h2>{stage.years}</h2>
                <h1>{stage.title}</h1>
                <p>{stage.description}</p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
