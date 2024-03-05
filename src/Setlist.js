export default function Setlist({ jokes, setSetlist }) {
  function handleRemoveJoke(jokeId) {
    setSetlist((jokes) => jokes.filter((joke) => jokeId !== joke.id));
  }

  return (
    <div className="setlist">
      {jokes.map((joke) => (
        <div className="setlist-joke">
          <span className="setlist-joke-name">{joke.name}</span>
          <button onClick={() => handleRemoveJoke(joke.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}
