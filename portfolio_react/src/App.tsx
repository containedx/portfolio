
import IntroCanvasSequence from "./components/IntroCanvasSequence";
import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Education from "./components/Education";
import Projects from "./components/Projects/Projects";
import Hobbies from "./components/Hobbies";
import Footnote from "./components/Footnote";
import SmallProjects from "./components/Projects/SmallProjects";
import LoadingScreen from "./components/LoadingScreen";
import { useState } from "react";


const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ position: "relative" }}>
      <IntroCanvasSequence onReady={() => setLoading(false)} />

      {loading && <LoadingScreen />}

      {!loading && (
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{ height: "5500px", width: "100vw" }}></div>
          <main style={{ height: "17300px", width: "100vw" }}>
            <AboutMe />
            <Career />
            <Education />
            <Projects />
            <SmallProjects />
            <Hobbies />
            <Footnote />
          </main>
        </div>
      )}
    </div>
  );
};


export default App;
