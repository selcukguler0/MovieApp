export default async function GetUpcomingMovies() {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&language=en-US&page=1`
	);
	const data = await res.json();
	return data.results;
}
