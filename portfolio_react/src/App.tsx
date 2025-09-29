
import IntroCanvasSequence from "./components/IntroCanvasSequence";
import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Education from "./components/Education";
import Projects from "./components/Projects/Projects";
import Hobbies from "./components/Hobbies";
import Footnote from "./components/Footnote";
import SmallProjects from "./components/Projects/SmallProjects";


const App: React.FC = () => {
  

  return (
    <div style={{ position: "relative" }}>

      <IntroCanvasSequence/>

      {/* Scrollable Content Area */}
      <div style={{ position: "relative", zIndex: 2 }}>

        <div style={{ height: "5500px", width: "100vw" }}>
           { /* empty div for video animation length */ }
        </div>

        

        <main style={{ height: "17500px", width: "100vw" }}>

          <AboutMe/>
          <Career/>
          <Education/>
          <Projects/>
          <SmallProjects/>
          <Hobbies/>
          <Footnote/>
          
        </main>

      </div>
    </div>
  );
};

export default App;
