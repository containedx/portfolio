import { smallProjects } from "./projectsData.ts";
import { motion } from "framer-motion";
import Typewriter from "../Typewriter.tsx";

import frame from "../../assets/img/frame.png";

const SmallProjects: React.FC = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column", // stack title + projects
        alignItems: "center",
        gap: "5vh",
        padding: "5vh 2vw",
        backgroundColor: "#874c68ff"
      }}
    >
      {/* Main title */}
      <div style={{ textAlign: "center", marginBottom: "5vh" }}>
        <h1
          style={{
            fontSize: "4vw",
            fontWeight: "bold",
            color: "#efcaccff",
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
            marginTop: "10vh",
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
          gap: "3vw",
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
              width: "55vh",
              height: "40vh",
              borderRadius: "2vh",
              overflow: "hidden",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              backgroundImage: `url(${frame})`, 
              backgroundSize: "100% 100%", 
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              padding: "3vh 2vh", 
              boxSizing: "border-box",
            }}
          >
            {/* Image with fade out on hover */}
            <motion.img
              src={project.picture}
              alt={project.title}
              style={{
                width: "90%",
                height: "20vh",
                objectFit: "cover",
                margin: "0 auto",
                borderRadius: "10px",
                marginTop: "2vh"
              }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Overlay description shown instead of image */}
            <motion.div
              style={{
                position: "absolute",
                top: "4vh",
                left: "2vh",
                width: "85%",
                height: "20vh",
                backgroundColor: "#e68eb8",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "1.5vh",
                opacity: 0,
                textAlign: "center",
                color: "black"
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p style={{ margin: "8vh", fontSize: "1.6vh", overflowWrap: "break-word" }}>
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



        <div style = {{ marginBottom: "20vh" }}>
          <h2>find even more projects on my <a href="https://github.com/containedx">github</a> and <a href="https://containedx.itch.io/">itch.io</a></h2>
        </div>
      </div>
    </section>
  );
};

export default SmallProjects;
