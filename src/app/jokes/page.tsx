import { supabase } from '@/lib/client';

export default async function Jokes() {
  const { data: jokes } = await supabase.from("jokes").select();

  return <pre>{JSON.stringify(jokes, null, 2)}</pre>
}