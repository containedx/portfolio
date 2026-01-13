
import { type ProjectProps } from "./projectsData";

const HighlightedProject: React.FC<ProjectProps> = ( {project} ) => {

    return(
        <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        maxWidth: "1600px",
        padding: "2rem",
        boxSizing: "border-box",
        marginTop: window.innerWidth <= 768 ? "0px" : "10vh"
      }}
    >
      {/* Text Section */}
      <div
        style={{
          flex: "1 1 300px",
          minWidth: "280px",
        }}
      >

        <h1 style={{ marginTop: window.innerWidth <= 768 ? "1vh" : "8vh", fontFamily: "'Montserrat', sans-serif", fontSize: window.innerWidth <= 768 ? "0.9rem" : "2rem" }}>{project.title}</h1>
        <h2 style={{ marginTop: window.innerWidth <= 768 ? "1vh" : "4vh", marginBottom: window.innerWidth <= 768 ? "1vh" : "4vh" }}>{project.years}</h2>
        
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          {project.topic.map((t, i) => (
            <span
              key={i}
              style={{
                backgroundColor: "#971636ff", // fallback color
                color: "#fff",
                padding: "0.4rem 1rem",
                borderRadius: "9999px", // makes it fully rounded
                fontSize: "0.8rem",
                fontWeight: 800,
                display: "inline-block",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {t}
            </span>
          ))}
        </div>



        
        <p style={{ margin: window.innerWidth <= 768 ? "1vh" : "5vh", fontSize: window.innerWidth <= 768 ? "0.9rem" : "1.2rem" }}>
          {project.description}
        </p>

        <h2 style={{ fontSize: window.innerWidth <= 768 ? "0.9rem" : "1.2rem" }}>
              for more information visit: <a href={project.link} target="_blank" rel="noopener noreferrer">LINK</a>
        </h2>
      </div>

      {/* Images Section */}
      <div
        style={{
          flex: "1 1 300px",
          minWidth: "280px",
          display: "flex",
          flexDirection: window.innerWidth <= 768 ? "row" : "column",
          gap: "1rem",
        }}
      >
        <img
          src={project.picture1}
          alt={`${project.title} 1`}
          style={{ width: window.innerWidth <= 768 ? "40vw" : "30vw", height: "auto", borderRadius: "8px", objectFit: "cover" }}
        />
        <img
          src={project.picture2}
          alt={`${project.title} 2`}
          style={{ width: window.innerWidth <= 768 ? "40vw" : "30vw", height: "auto", borderRadius: "8px", objectFit: "cover" }}
        />
      </div>



        

    </div>
    );
}

export default HighlightedProject;