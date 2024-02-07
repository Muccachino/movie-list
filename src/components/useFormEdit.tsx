import { MovieInput } from "../ts/interfaces/global_interface";
import { useState } from "react";





export default function useFormEdit() {

    const [movie, setMovie] = useState<MovieInput>({
        title: "",
        director: "",
        runtime: 0
    })
    

    return {movie, setMovie}
}



