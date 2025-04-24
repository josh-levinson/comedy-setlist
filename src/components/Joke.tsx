import { Joke as JokeType } from "@/types/joke";
import { formatDuration } from "@/lib/format";

interface JokeProps {
  joke: JokeType;
}

export default function Joke({ joke }: JokeProps) {
  return (
    <tr id={joke.id}>
      <td className="border border-gray-300 p-2">{joke.title}</td>
      <td className="border border-gray-300 p-2">{joke.rating}</td>
      <td className="border border-gray-300 p-2">{formatDuration(joke.duration)}</td>
    </tr>
  );
}
