export default function JokeRating({ rating }) {
  const jokeRating = "⭐".repeat(rating);

  return <span className="joke-rating">{jokeRating}</span>;
}
