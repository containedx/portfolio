import { motion } from "framer-motion";
import { type ArtDataProps } from "./artData";

const ArtSlide: React.FC<ArtDataProps> = ({ project }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        width: "100%",
        padding: "2rem",
        boxSizing: "border-box",
        marginTop: isMobile ? "0px" : "10vh",
      }}
    >

      {/* Left Image */}
      <motion.img
        src={project.picture1}
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, duration: 0.8 }}
        style={{
          width: isMobile ? "80%" : "20vw",
          height: "auto",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />

      {/* Text Section */}
      <div
        style={{
          width: "25vw",
          textAlign: "center",
          margin: "4vh",
        }}
      >
        <h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: isMobile ? "1rem" : "2rem",
            marginBottom: isMobile ? "1rem" : "2rem",
          }}
        >
          {project.title}
        </h1>
        <p
          style={{
            fontSize: isMobile ? "0.9rem" : "1.2rem",
            lineHeight: 1.5,
          }}
        >
          {project.description}
        </p>

        <motion.img
          src={project.picture3}
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 120, damping: 20, duration: 0.8 }}
          style={{
            width: isMobile ? "80%" : "20vw",
            height: "auto",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Right Image */}
      <motion.img
        src={project.picture2}
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, duration: 0.8 }}
        style={{
          width: isMobile ? "80%" : "20vw",
          height: "auto",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default ArtSlide;
