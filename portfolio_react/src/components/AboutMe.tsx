import { motion } from "motion/react";
import my_img from "../assets/img/COLLAGE_ME.png";
import arcade from "../assets/img/arcade.gif";
import aura from "../assets/img/aura.webp";
import background_blue_aura from "../assets/img/blue_background_aura.webp";

import Typewriter from "./Typewriter";

const ABOUT_ME_TEXT : string = "I'm Kinga 💻 I like programming, being creative and self development 👾 ";
const I_LOVE_TEXT : string = "words to describe me would be: 🌸 creative 🎨 organized 🗒️ curious 🌎 ambitious 🤖 analytical 🧠 persistent ⚡foodie 🍝 mermaid 🌊";

const AboutMe : React.FC = () => {

    return (
    <section>

    { /*DIV #1 */}
    <div  
      style={{
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        padding: "4rem 2rem",
        marginRight: "10vw",
        marginLeft: "10vw"
      }}
    >

        {/* Background image wrapped in motion */}
  <motion.div
    style={{
      position: "absolute",
      inset: 0,
      zIndex: -1,
    }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 3, ease: "easeOut" }}
  >
    <img
      src={background_blue_aura}
      style={{
        width: "100%"
      }}
    />
  </motion.div>

      {/* Left: Captions */}
      <div style={{ flex: 1,  maxWidth: "40vw", fontSize: "3vw" }}>
        <h2> <Typewriter text="Hi! ✨"  /> </h2> 
        <Typewriter text={ABOUT_ME_TEXT}   />
      </div>

      {/* Right: Image */}
      <motion.div
        style={{ flex: 1, maxWidth: "600px"}}
        initial={{ opacity: 0, scale: 0, x: 0 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}

        whileHover={{ // ON HOVER
            scale: 1.2,
            transition: { duration: 0.2, ease: "easeInOut" } 
        }}
      >
        <img
          src={my_img}
          alt="Me Collage"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "12px",
            display: "block",
            
          }}
        />
      </motion.div>
    </div>
    

    { /*DIV #2 */}
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        padding: "4rem 2rem",
        marginLeft: "20vw",
        marginRight: "20vw"
      }}
    >
        {/*Left Side - arcade gif */}
        <motion.div
        style={{ flex: 1, maxWidth: "40vw"}}
        initial={{ opacity: 0, scale: 0, x: 0 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}

        whileHover={{ // ON HOVER
            scale: 1.2,
            transition: { duration: 0.2, ease: "easeInOut" } 
        }}
        >
            <img
            src={arcade}
            style={{
            maxHeight: "50vh"
            }}
            />
        </motion.div>

        <div style={{ position: "relative", display: "inline-block"}}> {/*Right Side - aura and text */}
            <motion.div
                animate={{ opacity: [0.2, 0.8, 0.2] }} // pulse from transparent → visible → transparent
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                
            >
                <img
                src={aura}
                style={{
                maxHeight: "80vh"
                }}
                />
            </motion.div>

            <div
                style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",  
                fontSize: "2vh"
                }}
            >
            <Typewriter text={I_LOVE_TEXT}  />
            </div>
        </div>
        
    </div>

    </section>
    );
}

export default AboutMe;