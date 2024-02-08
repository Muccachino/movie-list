import { IMovie, MovieInput} from "../ts/interfaces/global_interface";
import {useForm} from "react-hook-form";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import style from "./css/FormEdit.module.css"

interface Props {
    onSave: (movie: MovieInput) => void;
    editMovie?: IMovie;
}


const movieSchema = yup.object({
    title: yup
    .string()
    .required("Title is required")
    .min(2, "The title must have min. 2 characters.")
    .max(30, "The title must have max. 30 characters."),
    director: yup.string().required("Director is required"),
    runtime: yup.number().required("Runtime is required"),
}).required();



export default function FormEdit({onSave, editMovie}: Props): JSX.Element {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<MovieInput>({resolver: yupResolver(movieSchema)});
 /*    useEffect(() => {
        if(editMovie) {
            setMovie(editMovie);
        }
    }, [editMovie])
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setMovie(prevMovie => {
            return{...prevMovie, [name]: value}
        })
    }
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSave(movie);
    } */

    useEffect(() => {
        reset(editMovie);
    }, [editMovie, reset])

    return (
        <form className={style.inputMovieForm} onSubmit={handleSubmit(onSave)}>
            <label htmlFor="title">
                Title: 
                <input
                type="text"
                placeholder="Movie title"
                {...register("title")}
                className={errors.title && style.error}/>
            </label>
            {errors.title && <div className={style.error}>{errors.title.message}</div>}
            <label htmlFor="director">
                Director: 
                <input
                type="text"
                placeholder="Movie director" 
                {...register("director")}
                className={errors.director && style.error}/>
            </label>
            {errors.director && <div className={style.error}>{errors.director.message}</div>}
            <label htmlFor="title">
                Title: 
                <input
                type="number"
                placeholder="0"
                {...register("runtime")}
                className={errors.runtime && style.error}/>
            </label>
            {errors.runtime && <div className={style.error}>{errors.runtime.message}</div>}
            <button type="submit" className={style.saveBtn}>Save</button>
        </form>
    )
}