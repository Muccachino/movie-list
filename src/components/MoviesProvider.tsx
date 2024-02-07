import { useState } from "react";
import { IMovie } from "../ts/interfaces/global_interface";
import MovieContext from "../ts/MovieContext";

interface Props {
  children: React.ReactNode;
}

export default function MoviesProvider({ children }: Props) {
  const [movies, setMovies] = useState<IMovie[]>([]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
}
