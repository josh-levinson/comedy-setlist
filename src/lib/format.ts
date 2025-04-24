import { Joke } from "@/types/joke";

export function formatDuration(duration: Joke['duration']): string {
  if (!duration) return '';
  
  // Parse the interval string (HH:MM:SS)
  const [hours, minutes, seconds] = duration.split(':').map(Number);
  
  const parts = [];
  if (hours > 0) parts.push(`${hours} hr`);
  if (minutes > 0) parts.push(`${minutes} min`);
  if (seconds > 0) parts.push(`${seconds} sec`);
  
  return parts.join(' ') || '0 min';
} 