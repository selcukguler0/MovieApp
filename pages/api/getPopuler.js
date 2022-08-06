export default async function GetPopuler() {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`
	);
	const data = await res.json();
	return data.results;
}