import { motion} from "framer-motion";
import Typewriter from "./Typewriter";
import background_video from "../assets/img/PortfolioWebsiteHobbies720p.mp4"

const hobbies = [
  "reading 📚",
  "travel ✈️",
  "pole dance 💃",
  "aerial silks 🤸",
  "video editing 🎬",
  "ice skating ⛸️",
  "roller skating 🛼",
  "yoga 🧘",
  "programming 💻",
  "games 🎮",
  "swimming 🏊",
  "jewerly making 💍",
  "painting 🎨",
  "DIY & art in general 🛠️",
  "photography 📸",
];

const Hobbies: React.FC = () => {

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
        {/* Title */}
        <h1
          style={{
            fontSize: "8vh",
            fontWeight: "bold",
            marginBottom: "2vh",
          }}
        >
          <Typewriter text="MY HOBBIES" speed={100} />
        </h1>

        {/* collector text  */}
        <p
          style={{
            fontSize: "2vh",
            fontStyle: "italic",
            marginBottom: "4vh",
            opacity: 0.85,
          }}
        >
          Yes, I am a professional hobby collector
        </p>

        {/* Hobbies list */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5vh",
            fontSize: "2vh",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          {hobbies.map((hobby, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.15 }}
            >
              {hobby}
            </motion.div>
          ))}
        </div>
      </div>
      

    </section>
  );
};

export default Hobbies;
