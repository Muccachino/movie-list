import * as yup from "yup";

const movieSchema = yup.object({
    title: yup
    .string()
    .required("Title is required")
    .min(2, "The title must have min. 2 characters.")
    .max(30, "The title must have max. 30 characters."),
    director: yup.string().required("Director is required"),
    runtime: yup.number().required("Runtime is required"),
}).required();

export default movieSchema;