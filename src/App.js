import React,{useState} from "react";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import"./App.css"

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: '21 Jump street',
      description: 'Two rookie cops go from park duty to prom when they re given a big assignment Bust a drug ring by going undercover as high school students',
      posterURL: 'https://m.media-amazon.com/images/I/919CiVIYu-L._AC_UF894,1000_QL80_.jpg',
      rating: 7.2,
    },
    {
      title: 'Interstellar',
      description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRE8xZbi8r7ImwqImi3Wow7AoKwATmbFldLmtbbu5O9w&s',
      rating: 8.7,
    },
    {
      title: 'Lucy',
      description: 'A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW9kkQ-6ihR_oqXdSqefA7mFARibpg2rIs91nAZC6Nzw&s',
      rating: 8.7,
    },
    {
      title: 'Wanted',
      description: 'A frustrated office worker discovers that he is the son of a professional assassin, and that he shares his father s superhuman killing abilities.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTQwNDM2MTMwMl5BMl5BanBnXkFtZTgwMjE4NjQxMTE@._V1_FMjpg_UX1000_.jpg',
      rating: 8.7,
    },
  

  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setTitleFilter(value);
    filterMovies(value, ratingFilter);
  };

  const handleRatingChange = (e) => {
    const { value } = e.target;
    setRatingFilter(value);
    filterMovies(titleFilter, value);
  };


  const filterMovies = (title, rating) => {
    let filtered = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (!rating || movie.rating >= rating)
      );
    });
    setFilteredMovies(filtered);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter onTitleChange={handleTitleChange} onRatingChange={handleRatingChange} />
      <MovieList movies={filteredMovies} />
      <h2>Add New Movie</h2>
      <AddMovieForm addMovie={addMovie} />
    </div>
  );
};


const AddMovieForm = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(newMovie);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" value={newMovie.title} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={newMovie.description} onChange={handleChange} />
      <input type="url" name="posterURL" placeholder="Poster URL" value={newMovie.posterURL} onChange={handleChange} />
      <input type="number" name="rating" placeholder="Rating" value={newMovie.rating} onChange={handleChange} />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default App;