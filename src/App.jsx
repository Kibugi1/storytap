import { useState } from "react";
import { Box } from "@mui/material";

import StoryCard from "./components/StoryCard";
import story from "./data/story";

export default function App() {
  const [currentScene, setCurrentScene] = useState(0);

  const nextScene = () => {
    console.log("Tapped!");

    if (currentScene < story.length - 1) {
      setCurrentScene((prev) => prev + 1);
    }
  };

  return (
    <Box
      onClick={nextScene}
      sx={{
        cursor: "pointer",
      }}
    >
      <StoryCard scene={story[currentScene]} />
    </Box>
  );
}