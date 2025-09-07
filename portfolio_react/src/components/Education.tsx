import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Typewriter from "./Typewriter";

// images
import certificate from "../assets/img/certificates/certificate.webp";
import university from "../assets/img/university.webp";
import ai_gaming from "../assets/img/certificates/ai_algorithms_for_gaming.png";
import ai_business from "../assets/img/certificates/AI_business.png";
import ai_unity from "../assets/img/certificates//AI_unity.png";
import english from "../assets/img/certificates/englishC2.webp";
import scrum from "../assets/img/certificates/ScrumMasterCertified-KingaZawarty.png";
import ui_ux from "../assets/img/certificates/UI_UX.png";
import unreal from "../assets/img/certificates/unreal_essential.png";

const Education: React.FC = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const stages = [
  { title: "Scrum", img: scrum, description: "description"},
//  { title: "Agile PM Foundation", img: certificate, description: ""},
  { title: "Ai Algorithms for Gaming", img: ai_gaming, description: "description" },
  { title: "Unreal",  img: unreal, description: "description"},
  { title: "Ai Unity", img: ai_unity, description: "description"},
  { title: "UI UX", img: ui_ux, description: "description"},
  { title: "AI in Business Development", img: ai_business, description: "description"},
  { title: "English C2", img: english, description: "description"},
];

  // przesuwamy tylko tło
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(stages.length - 1) * 100}%`]);

  const [activeStage, setActiveStage] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const index = Math.round(p * (stages.length - 1 ));
    setActiveStage(index);
  });

  return (
    <section ref={ref} 
    style={{
        position: "relative",
        height: "400vh",
      }}
    >
      {/* sticky viewport */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >

        {/* main title */}
        <div
          style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          textAlign: "center",
        }}
        >
          <h1
            style={{
            fontSize: "8vh",
            fontWeight: "bold",
            color: "#688c71ff",
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
            letterSpacing: "2px",
            }}
          > 
              <Typewriter text="MY EDUCATION 🎓" speed={100} />
          </h1>
        </div>

        

            <motion.img
                src={university}
                alt="university"
                style={{
                    position: "absolute",
                    top: "15vh",
                    height: "80vh",
                    width: "40vh",
                    marginLeft: "10vh",
                    objectFit: "contain",
                }}
                initial={{ scale: 0, y: 50, opacity: 0 }}
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                viewport={{ once: false, amount: 0.2 }}
            />


        <div 
        style={{
            position: "absolute",
            top: "15vh",
            left: "25vw",          
            zIndex: 10
          }}>

        {/* education stages adding on */}
          <div style={{ display: "flex", gap: "4px" }}>
            {/* <h2>active stage {activeStage} </h2> */}
            <div style={{ 
                display: "flex",
                flexWrap: "wrap", gap: "4px",
                justifyItems: "center", 
                alignItems: "center",
                maxWidth: "80vw",
                margin: "10vh", }}>


                    

                    {stages.slice(0, activeStage).map((stage, i) => {
                        const isLast = i === activeStage - 1;
                        return (
                            <motion.div
                                key={i}
                                style={{
                                    height: "30vh",
                                    width: "18vw",
                                    margin: "1vh",
                                    perspective: "1000px", // potrzebne dla 3D
                                }}
                                initial={isLast ? { scale: 0, y: 50, opacity: 0 } : false}
                                animate={isLast ? { scale: 1, y: 0, opacity: 1 } : false}
                                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                                className="flip-card"
                                >
                                <div className="flip-card-inner">
                                    {/* FRONT */}
                                    <div className="flip-card-front">
                                    <img
                                        src={stage.img}
                                        alt={stage.title}
                                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                    />
                                    </div>

                                    {/* BACK */}
                                    <div className="flip-card-back">
                                    {stage.description || "No description"}
                                    </div>
                                </div>

                                <style>
                                    {`
                                    .flip-card-inner {
                                        width: 100%;
                                        height: 100%;
                                        transition: transform 0.8s;
                                        transform-style: preserve-3d;
                                        position: relative;
                                    }

                                    .flip-card:hover .flip-card-inner {
                                        transform: rotateY(180deg);
                                    }

                                    .flip-card-front,
                                    .flip-card-back {
                                        position: absolute;
                                        inset: 0; 
                                        backface-visibility: hidden;
                                    }

                                    .flip-card-back {
                                        background: #fff;
                                        color: #000;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        padding: 0.5rem;
                                        transform: rotateY(180deg);
                                        box-sizing: border-box;
                                    }
                                    `}
                                </style>
                                </motion.div>

                        );
                    })}


            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
