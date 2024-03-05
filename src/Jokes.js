import JokeRating from "./JokeRating";

export default function Jokes({ jokes, setJokes, setlist, setSetlist }) {
  function handleAddJoke(joke) {
    setSetlist([...setlist, joke]);
  }

  function handleDeleteJoke(jokeId) {
    setJokes((jokes) => jokes.filter((joke) => joke.id !== jokeId))
  }

  return (
    <section className="left-section">
      <ul className="joke-list">
        {jokes.map((joke) => (
          <li>
            <h4>
              {" "}
              {joke.name}
              <JokeRating rating={joke.rating} />
            </h4>
            <div className="joke-info">
              <div className="joke-text">{joke.text}</div>
              {!setlist.includes(joke) && (
                <div>
                  <button className="add-to-setlist-btn" onClick={() => handleAddJoke(joke)}>
                    Add to Setlist
                  </button>
                  <button className="delete-joke-btn" onClick={() => handleDeleteJoke(joke.id)}>Delete</button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
