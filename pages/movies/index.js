import React from "react";

export default function Movies({ movies }) {
  console.log("client", movies);
  return (
    <div>
      {movies ? (
        movies.map((movie) => <h1 key={movie.id}>{movie.title}</h1>)
      ) : (
        <h1>Loding...</h1>
      )}
    </div>
  );
}
export async function getServerSideProps() {
  const stream = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=293a7d3b6bf12a19fa75475364fcbd0f&language=en-US&page=1"
  );
  const data = await stream.json();

  return { props: { movies: data.results } };
}
