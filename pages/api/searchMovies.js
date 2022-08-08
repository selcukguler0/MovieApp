export default async function SearchMovie(query) {
	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
	);
	const data = await res.json();
	return data.results;
}
