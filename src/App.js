import JokeInput from "./JokeInput";
import Setlists from "./Setlists";
import Jokes from "./Jokes";
import { useState } from "react";

const initialJokes = [
  { name: "korea", text: "You know the joke...", rating: 4 },
  { name: "sponge", text: "I got sponge money", rating: 5 },
  { name: "lenscrafters", text: "college job", rating: 2 },
];

const categories = [
  { name: "silly", color: "#ffffff" },
  { name: "sarcastic", color: "#c4c466" },
  { name: "cool", color: "#111" },
];

function App() {
  const [jokes, setJokes] = useState(initialJokes);
  const [setlists, setSetlists] = useState([[initialJokes]]);

  return (
    <div>
      <div className="joke-section">
        <JokeInput jokes={jokes} setJokes={setJokes} />
        <Jokes jokes={jokes} />
      </div>
      <div>
        <Setlists setlists={setlists} />
      </div>
    </div>
  );
}

export default App;
