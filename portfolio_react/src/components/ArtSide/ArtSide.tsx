
import ArtSlide from "./ArtSlide.tsx";
import { artData } from "./artData.ts"

const ArtSide: React.FC = () => {

  return (
    <section style={{ position: "relative", height: `${artData.length * 100}vh`}}>

        {artData.map((project, i) => (
          <ArtSlide key={i} project={project} />
        ))}

    </section>
  );
};

export default ArtSide;
