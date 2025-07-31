import { useState } from "react";
import "./App.css";
import ParallaxContainer from "./components/ParallaxContainer/ParallaxContainer";
import Preloader from "./components/Preloader/Preloader";
import VideoContainer from "./components/VideoContainer/VideoContainer";

function App() {
  const [isLoad, setIsLoad] = useState(false);
  const [isStart, setIsStart] = useState(false);

  return (
    <div className="app">
      <Preloader isLoad={isLoad} setIsload={setIsLoad} />

      {isLoad && (
        <ParallaxContainer isStart={isStart} setIsStart={setIsStart} />
      )}

      {isStart && <VideoContainer />}
    </div>
  );
}

export default App;
