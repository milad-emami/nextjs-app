import React from "react";
import Link from "next/link";

export default function Movies({ movies }) {
  return (
    <div>
      {movies ? (
        movies.map((movie) => (
          <Link key={movie.id} href={`movies/${movie.id}`}>
            <a>
              <h1>{movie.title}</h1>
            </a>
          </Link>
        ))
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
