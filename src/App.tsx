import MovieList from "./components/MovieList";
import MoviesProvider from "./components/MoviesProvider";
import "./App.css"
import FormEdit from "./components/FormEdit";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Move List</h1>
      <MoviesProvider>
        <MovieList />
      </MoviesProvider>
      <FormEdit onSave={(movie) => console.log(movie)}
      editMovie={{
        id: 9,
        title: "Best Film",
        director: "Best Director",
        runtime: 300,
        rating: 5
      }}/>
    </>
  );
}

export default App;
