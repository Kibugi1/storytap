import StoryCard from "./components/StoryCard";
import story from "./data/story";

export default function App() {
  return (
    <StoryCard text={story[0].text} />
  );
}