import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";

import StoryCard from "./components/StoryCard";
import story from "./data/story";
import PulseIndicator from "./components/PulseIndicator";
import Background from "./components/Background";
import BrandCard from "./components/BrandCard";

export default function App() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextScene = () => {
    if (isTransitioning) return;

    if (currentScene >= story.length - 1) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentScene((prev) => prev + 1);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }, 200);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const isNextKey =
        event.key === " " ||
        event.key === "Enter" ||
        event.key === "ArrowRight";

      if (!isNextKey) return;

      event.preventDefault();

      if (isTransitioning) return;

      if (currentScene >= story.length - 1) return;

      nextScene();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentScene, isTransitioning]);

  const scene = story[currentScene];

  return (
    <Background background={scene.background}>
      <Box
        onClick={nextScene}
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 3,
          cursor: isTransitioning ? "default" : "pointer"
        }}
      >
        {scene.type === "brand" ? (
          <BrandCard />
        ) : (
          <StoryCard
            scene={scene}
            current={currentScene}
            total={story.length}
          />
        )}

        {currentScene === 0 && (
          <Box
            sx={{
              mt: 6,
              display: "flex",
              justifyContent: "center",
            }}
          >

            <PulseIndicator />
          </Box>
        )}
      </Box>
    </Background>
  );
}