import { createClient } from '@/utils/supabase';

export default async function Jokes() {
  const supabase = await createClient();
  const { data: jokes } = await supabase.from("jokes").select();

  return <pre>{JSON.stringify(jokes, null, 2)}</pre>
}