import JokeInput from "./JokeInput";
import Setlist from "./Setlist";
import Jokes from "./Jokes";
import { useState } from "react";

const initialJokes = [
  { id: 1, name: "korea", text: "You know the joke...", rating: 4 },
  { id: 2, name: "sponge", text: "I got sponge money", rating: 5 },
  { id: 3, name: "lenscrafters", text: "college job", rating: 2 },
];

function App() {
  const [jokes, setJokes] = useState(initialJokes);
  const [setlist, setSetlist] = useState(initialJokes);

  return (
    <main>
      <div className="jokes">
        <JokeInput jokes={jokes} setJokes={setJokes} />
        <Jokes jokes={jokes} setJokes={setJokes} setlist={setlist} setSetlist={setSetlist} />
      </div>
      <div className="setlist">
        <Setlist jokes={setlist} setSetlist={setSetlist} />
      </div>
    </main>
  );
}

export default App;
