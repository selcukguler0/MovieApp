export default async function GetDetails(id) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIE_API_KEY}&language=en-US`
	);
	const data = await res.json();
	return data;
}
