import { useState } from "react";

export default function JokeInput({ jokes, setJokes }) {
  const [jokeName, setJokeName] = useState("");
  const [jokeText, setJokeText] = useState("");
  const [jokeRating, setJokeRating] = useState(null);

  function handleCreate(e) {
    e.preventDefault();

    const newJoke = {
      id: crypto.randomUUID(),
      name: jokeName,
      text: jokeText,
      rating: Number(jokeRating),
    };

    setJokes((jokes) => [...jokes, newJoke]);
    setJokeName("");
    setJokeText("");
    setJokeRating("1");
  }

  return (
    <div className="joke-input">
      <form onSubmit={handleCreate}>
        <div className="joke-input-field">
          <label>Name</label>
          <input
            type="text"
            value={jokeName}
            onChange={(e) => setJokeName(e.target.value)}
            placeholder="Joke title"
            required
          />
        </div>
        <div className="joke-input-field">
          <label>Text</label>
          <textarea
            rows="5"
            cols="40"
            placeholder="Text of joke..."
            value={jokeText}
            onChange={(e) => setJokeText(e.target.value)}
          />
        </div>
        <div className="joke-input-field">
          <label>Rating</label>
          <select
            value={jokeRating}
            onChange={(e) => setJokeRating(e.target.value)}
          >
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
        </div>
        <button className="create-joke-btn">Create</button>
      </form>
    </div>
  );
}
