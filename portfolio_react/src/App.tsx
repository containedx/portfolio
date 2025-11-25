import { useState, useEffect } from "react";
import IntroCanvasSequence from "./components/IntroCanvasSequence";
import LoadingScreen from "./components/LoadingScreen";
import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Education from "./components/Education";
import Projects from "./components/Projects/Projects";
import SmallProjects from "./components/Projects/SmallProjects";
import Hobbies from "./components/Hobbies";
import Footnote from "./components/Footnote";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [imagesReady, setImagesReady] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => setMinTimePassed(true), 1500);
    return () => clearTimeout(timer);
  }, []);

 
  useEffect(() => {
    if (imagesReady && minTimePassed) {
      setLoading(false);
    }
  }, [imagesReady, minTimePassed]);

  return (
    <div style={{ position: "relative" }}>
      <IntroCanvasSequence onReady={() => setImagesReady(true)} />

      {loading && <LoadingScreen />}

      {!loading && (
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{ height: "5500px", width: "100vw" }} />
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
