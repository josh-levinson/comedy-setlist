interface JokeProps {
  id: string;
  title: string;
  content: string;
  rating: number;
  duration: number;
  notes: string;
}

export default function JokeDetail({ id, title, content, rating, duration, notes }: JokeProps) {
  return (
    <div id={id} className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-600">{content}</p>
      <p className="text-gray-600">{rating}</p>
      <p className="text-gray-600">{duration} min</p>
      <p className="text-gray-600">{notes}</p>
    </div>
  );
}