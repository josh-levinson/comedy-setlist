import JokeRating from "./JokeRating";

export default function Jokes({ jokes }) {
  return (
    <div>
      <ul>
        {jokes.map((joke) => (
          <li>
            <h3>
              {joke.name}
              <JokeRating rating={joke.rating} />
            </h3>
            <p>{joke.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
