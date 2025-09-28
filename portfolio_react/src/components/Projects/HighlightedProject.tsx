
interface ProjectProps {
  project: {
    title: string;
    years: string;
    topic: string;
    description: string;
    color?: string;
    link: string;
    picture1: string;
    picture2: string;
  };
}

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
        marginTop: "10vh"
      }}
    >
      {/* Text Section */}
      <div
        style={{
          flex: "1 1 300px",
          minWidth: "280px",
        }}
      >

        <h1 style={{ marginTop:"8vh", fontFamily: "'Montserrat', sans-serif", }}>{project.title}</h1>
        <h2 style={{ marginTop: "4vh", marginBottom: "4vh" }}>{project.years}</h2>
        
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
                fontSize: "0.9rem",
                fontWeight: 800,
                display: "inline-block",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {t}
            </span>
          ))}
        </div>



        
        <p style={{ margin: "5vh" }}>{project.description}</p>

        <h2>
              for more information and demo visit github project site: <a href={project.link} target="_blank" rel="noopener noreferrer">github</a>
        </h2>
      </div>

      {/* Images Section   TODO: NEEDS SOME STYLING  ITS TERRIBLE */}
      <div
        style={{
          flex: "1 1 300px",
          minWidth: "280px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <img
          src={project.picture1}
          alt={`${project.title} 1`}
          style={{ width: "30vw", height: "auto", borderRadius: "8px", objectFit: "cover" }}
        />
        <img
          src={project.picture2}
          alt={`${project.title} 2`}
          style={{ width: "30vw", height: "auto", borderRadius: "8px", objectFit: "cover" }}
        />
      </div>
    </div>
    );
}

export default HighlightedProject;