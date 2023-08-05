import { useState, useEffect } from "react";

const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  let url = queryTerm
    ? `https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}`
    : `https://api.themoviedb.org/3/${apiPath}`;

  console.log("----", process.env.REACT_APP_ACCESS_TOKEN);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmI5YzczNzQ5MDMyZDcyYWYzOTUxNTg4ZTBjNjY3NSIsInN1YiI6IjY0YzJjYjIxMzUyMGU4MDExYzkzY2U3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D3OsfsYcVcTq1U4ufXnccGDTI5-Np6MGHQbZUsAOGjQ`,
          },
        };

        const response = await fetch(url, options);
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [url]);

  return { data };
};

export default useFetch;
