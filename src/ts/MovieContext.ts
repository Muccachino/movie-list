import { Dispatch, SetStateAction, createContext } from "react";
import { IMovie } from "./interfaces/global_interface";

type MovieContextType = [IMovie[] | null, Dispatch<SetStateAction<IMovie[]>>];

const MovieContext = createContext<MovieContextType>([null, () => {}]);

export default MovieContext;
