import { IMovie, MovieInput} from "../ts/interfaces/global_interface";
import {useForm} from "react-hook-form";
import { useEffect } from "react";

interface Props {
    onSave: (movie: MovieInput) => void;
    editMovie?: IMovie;
}



export default function FormEdit({onSave, editMovie}: Props): JSX.Element {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<MovieInput>();
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
        <form className="input-movie-form" onSubmit={handleSubmit(onSave)}>
            <label htmlFor="title">
                Title: 
                <input type="text" placeholder="Movie title" {...register("title", {
                    required: true, minLength: 2, maxLength:30
                })}/>
            </label>
            {errors.title && (
                <p>
                    {errors.title.type === "required" && "Title is required"}
                    {errors.title.type === "minLength" && "Title must have min. 2 letters"}
                    {errors.title.type === "maxLength" && "Title must have max. 30 letters"}
                </p>
            )}
            <label htmlFor="director">
                Director: 
                <input type="text" placeholder="Movie director" {...register("director", {
                    required: true, minLength: 5, maxLength:30
                })}/>
            </label>
            {errors.director && (
                <p>
                    {errors.director.type === "required" && "Director is required"}
                    {errors.director.type === "minLength" && "Director must have min. 2 letters"}
                    {errors.director.type === "maxLength" && "Director must have max. 30 letters"}
                </p>
            )}
            <label htmlFor="title">
                Title: 
                <input type="number" placeholder="0" {...register("runtime", {
                    required: true, valueAsNumber: true, min: 0, max: 500
                })}/>
            </label>
            {errors.runtime && (
                <p>
                    {errors.runtime.type === "required" && "Runtime is required"}
                    {errors.runtime.type === "valueAsNumber" && "Must be a number"}
                    {errors.runtime.type === "min" && "Min. 0"}
                    {errors.runtime.type === "max" && "Max. 500"}
                </p>
            )}
            <button type="submit">Save</button>
        </form>
    )
}