
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
        <h2 style={{ margin: "0 0 1rem 0" }}>{project.years}</h2>
        <h2 style={{ margin: "0 0 1rem 0" }}>{project.topic}</h2>
        <h1 style={{ margin: "0 0 1rem 0" }}>{project.title}</h1>
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