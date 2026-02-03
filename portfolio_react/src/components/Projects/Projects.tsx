import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import Typewriter from "../Typewriter";
import HighlightedProject from "./HighlightedProject.tsx";
import { projects } from "./projectsData.ts"


const Projects: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [activeStage, setActiveStage] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");


  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const index = Math.floor(p * projects.length);
    if (index !== activeStage) {
      setDirection(index > activeStage ? "forward" : "backward");
      setActiveStage(index);
    }
  });

  return (
    <section ref={ref} style={{ position: "relative", height: `${projects.length * 100}vh`, 
                                backgroundColor: direction === "forward"
                                ? projects[Math.max(0, activeStage - 1)]?.color 
                                : projects[Math.min(projects.length - 1, activeStage + 1)]?.color,
                                }}>

        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        
        {/* Main title */}
        <div style={{ position: "absolute", left: 0, right: 0, zIndex: 20, textAlign: "center" }}>
          <h1 style={{ fontSize: "4vw", fontWeight: "bold", color: "#c7161fff", textShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}>
            <Typewriter text="HIGHLIGHTED PROJECTS 🚀"  />
          </h1>
        </div>

        {/* Current project */}
        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          {projects.map((stage, i) =>
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

                <HighlightedProject project={stage} />

              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
