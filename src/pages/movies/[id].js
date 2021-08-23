import React from "react";

export default function Movies({ movie }) {
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const stream = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=293a7d3b6bf12a19fa75475364fcbd0f&language=en-US&page=1`
  );
  const data = await stream.json();
  return { props: { movie: data } };
}
