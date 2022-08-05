export default async function GetRandomMovies(Page) {
	const page = Page || 1;
	const res = await fetch(
		`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
	);
	const data = await res.json();
	return data.results;
}