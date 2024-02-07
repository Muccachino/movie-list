import MovieList from "./components/MovieList";
import MoviesProvider from "./components/MoviesProvider";
import "./App.css"

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Move List</h1>
      <MoviesProvider>
        <MovieList />
      </MoviesProvider>
    </>
  );
}

export default App;
