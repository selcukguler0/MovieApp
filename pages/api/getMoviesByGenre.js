export default async function GetMoviesByGenre(Genre, Sort) {
	const sort = Sort || "popularity.desc";
	const res = await fetch(
		`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&sort_by=${sort}&with_genres=${Genre}`
	);
	const data = await res.json();
	return data.results;
}
