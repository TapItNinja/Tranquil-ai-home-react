import { useEffect, useState } from "react";
import Background from "./pages/Background";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";

const App = () => {
  let heroData = [
    { text1: "AI", text2: "Therapist" },
    { text1: "Mood Logging", text2: "and Tracking" },
    { text1: "Sleep", text2: "Sounds" },
    { text1: "Guided", text2: "Meditation" },
    { text1: "Journal", text2: "Entry" },
  ];
  
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroCount((count) => {
        console.log('Current Count:', count); // Debug log
        return count === 4 ? 0 : count + 1;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleHomeClick = (status) => {
    setPlayStatus(false);
  };

  return (
    <div>
      <Background  setPlayStatus={setPlayStatus} playStatus={playStatus} heroCount={heroCount} />
      <Navbar handleHomeClick={handleHomeClick} />
      {!playStatus && (
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />
      )}
    </div>
  );
};

export default App;
