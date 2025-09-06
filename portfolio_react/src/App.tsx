
import IntroCanvasSequence from "./components/IntroCanvasSequence";
import AboutMe from "./components/AboutMe";
import Career from "./components/Career";


const App: React.FC = () => {
  

  return (
    <div style={{ position: "relative" }}>

      <IntroCanvasSequence/>

      {/* Scrollable Content Area */}
      <div style={{ position: "relative", zIndex: 2 }}>

        <div style={{ height: "5500px", width: "100vw" }}>
           { /* empty div for video animation length */ }
        </div>

        

        <main style={{ height: "10000px", width: "100vw" }}>

          <AboutMe/>
          <Career/>
          
        </main>

      </div>
    </div>
  );
};

export default App;
