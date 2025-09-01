
import IntroCanvasSequence from "./components/IntroCanvasSequence";
import AboutMe from "./components/AboutMe";


const App: React.FC = () => {
  

  return (
    <div style={{ position: "relative" }}>

      <IntroCanvasSequence/>

      {/* Scrollable Content Area */}
      <div style={{ position: "relative", zIndex: 2 }}>

        <div style={{ height: "5500px", width: "100vw" }}>
           { /* empty div for video animation length */ }
        </div>

        

        <main style={{ height: "5000px", width: "100vw" }}>

          <AboutMe/>

          
        </main>

      </div>
    </div>
  );
};

export default App;
