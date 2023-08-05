import { useEffect, useState } from "react";

const useFetchMovie = (params) => {
  const [movie, setMovie] = useState({});

  const url = `https://api.themoviedb.org/3/movie/${params.id}`;

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmI5YzczNzQ5MDMyZDcyYWYzOTUxNTg4ZTBjNjY3NSIsInN1YiI6IjY0YzJjYjIxMzUyMGU4MDExYzkzY2U3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D3OsfsYcVcTq1U4ufXnccGDTI5-Np6MGHQbZUsAOGjQ`,
        },
      };
      const response = await fetch(url, options);
      const movie = await response.json();
      setMovie(movie);
    };
    fetchMovie();
  }, [url]);

  return { movie };
};

export default useFetchMovie;
