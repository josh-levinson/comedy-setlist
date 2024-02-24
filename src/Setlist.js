export default function Setlist({ jokes, setSetlist }) {
  function handleRemoveJoke(jokeId) {
    setSetlist((jokes) => jokes.filter((joke) => jokeId !== joke.id));
  }

  return (
    <div className="setlist">
      {jokes.map((joke) => (
        <div className="setlist-joke">
          {joke.name}
          <button onClick={() => handleRemoveJoke(joke.id)}>X</button>
        </div>
      ))}
    </div>
  );
}
