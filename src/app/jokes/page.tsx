import { supabase } from "@/lib/client";
import Joke from "@/components/Joke";

export default async function Jokes() {
  const { data: jokes } = await supabase.from("jokes").select();

  return (
    <div className="m-6 mx-auto max-w-4xl">
      <h1 className="text-2xl font-bold mb-8">Jokes</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-800">
            <th className="border border-gray-300 p-2 text-left">Name</th>
            <th className="border border-gray-300 p-2 text-left">Rating</th>
            <th className="border border-gray-300 p-2 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          {jokes?.map((joke) => (
            <Joke key={joke.id} {...joke} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
