import { motion} from "framer-motion";
import Typewriter from "./Typewriter";
import background_video from "../assets/img/PortfolioWebsiteHobbies720p.mp4"

const EndVideo: React.FC = () => {

  return (
    <section
    style={{
        position: "relative",
        height: "100vh",
        width: "100%",
      }}
      >

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={background_video} type="video/mp4" />
      </video>

      {/* Foreground content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#FAF9FF",
          textShadow: "2px 2px 10px rgba(0,0,0,0.8)",
        }}
      >

        <h2 style={{ width: "80vw", maxWidth: "300px", fontSize: "3rem" }}>
                <Typewriter text={"The End ✨"} ></Typewriter>
        </h2>

      </div>
      

    </section>
  );
};

export default EndVideo;
