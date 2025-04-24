interface JokeProps {
  id: string;
  title: string;
  rating: number;
  duration: number;
}

export default function Joke({ id, title, rating, duration }: JokeProps) {
  return (
    <tr id={id}>
      <td className="border border-gray-300 p-2">{title}</td>
      <td className="border border-gray-300 p-2">{rating}</td>
      <td className="border border-gray-300 p-2">{duration} min</td>
    </tr>
  );
}
