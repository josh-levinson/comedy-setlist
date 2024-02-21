export default function Setlist({ jokes }) {
  return (
    <div className="setlist">
      {jokes.map((joke) => (
        <p>
          {joke.name} {joke.rating}
        </p>
      ))}
    </div>
  );
}
