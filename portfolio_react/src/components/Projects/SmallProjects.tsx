import { smallProjects } from "./projectsData.ts";
import { motion } from "framer-motion";
import Typewriter from "../Typewriter.tsx";

const SmallProjects: React.FC = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column", // stack title + projects
        alignItems: "center",
        gap: "5vh",
        padding: "5vh 2vw",
        marginTop: "10vh",
        marginBottom: "20vh",
      }}
    >
      {/* Main title */}
      <div style={{ textAlign: "center", marginBottom: "5vh" }}>
        <h1
          style={{
            fontSize: "8vh",
            fontWeight: "bold",
            color: "#c7161fff",
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
          }}
        >
          <Typewriter text="MORE PROJECTS ✨" />
        </h1>
      </div>

      {/* Projects grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8vw",
          justifyContent: "center",
        }}
      >
        {smallProjects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "40vh",
              borderRadius: "2vh",
              overflow: "hidden",
              boxShadow: "0 1vh 2vh rgba(0,0,0,0.2)",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              backgroundColor: "#ef92cbff",
            }}
          >
            {/* Image with fade out on hover */}
            <motion.img
              src={project.picture1}
              alt={project.title}
              style={{
                width: "100%",
                height: "20vh",
                objectFit: "cover",
              }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Overlay description shown instead of image */}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "20vh",
                backgroundColor: "#ef92cbff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "1.5vh",
                opacity: 0,
                textAlign: "center",
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p style={{ margin: 0, fontSize: "1.5vh", overflowWrap: "break-word" }}>
                {project.description}
              </p>
            </motion.div>

            {/* Title/years always visible at bottom */}
            <div style={{ padding: "1.5vh", zIndex: 2 }}>
              <h3 style={{ margin: 0, fontSize: "2vh", color: "#c7161fff" }}>{project.title}</h3>

              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  marginTop: "1vh",
                }}
              >
                {project.topic.map((t, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: "#971636ff",
                      color: "#fff",
                      padding: "0.4rem 1rem",
                      borderRadius: "9999px",
                      fontSize: "1vh",
                      fontWeight: 600,
                      display: "inline-block",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SmallProjects;
