import { Joke } from "@/types/joke";

export function formatDuration(duration: Joke['duration']): string {
  if (!duration) return '';
  
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  
  const parts = [];
  if (minutes > 0) parts.push(`${minutes} min`);
  if (seconds > 0) parts.push(`${seconds} sec`);
  
  return parts.join(' ') || '0 sec';
} 