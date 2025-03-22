export interface Joke {
  id: string
  title: string
  content: string
  rating: number
  notes: string
  duration: {
    minutes: number
    seconds: number
  }
  created_at: string
  updated_at: string
}

export type NewJoke = Omit<Joke, 'id' | 'created_at' | 'updated_at'> 
