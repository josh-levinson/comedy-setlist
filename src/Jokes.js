import JokeRating from "./JokeRating";

export default function Jokes({ jokes, setlist, setSetlist }) {
  function handleAddJoke(joke) {
    setSetlist([...setlist, joke]);
  }

  return (
    <div>
      <ul className="joke-list">
        {jokes.map((joke) => (
          <li>
            <h4>
              {" "}
              {joke.name}
              <JokeRating rating={joke.rating} />
            </h4>
            <p>
              {joke.text}
              {!setlist.includes(joke) && (
                <button onClick={() => handleAddJoke(joke)}>
                  Add to Setlist
                </button>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
