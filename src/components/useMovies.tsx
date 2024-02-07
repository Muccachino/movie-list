import { useState, useEffect, useContext } from "react";
import { IMovie } from "../ts/interfaces/global_interface";
import MovieContext from "../ts/MovieContext";

export default function useMovies() {
  const [movies, setMovies] = useContext(MovieContext);
  const [err, setErr] = useState<Error | null>(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const connect = async () => {
      try {
        const data = await fetch("http://localhost:5000/movies", options);
        if (!data.ok) {
          throw new Error("Sorry, we couldn't connect to our server!");
        }
        setMovies((await data.json()) as IMovie[]);
      } catch (error) {
        setErr(error as Error);
      }
    };
    connect();
  }, [setMovies]);



  return [movies, err];
}
