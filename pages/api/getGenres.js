export default async function GetGenres() {
	const res = await fetch(
		`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&language=en-US`
	);
	const data = await res.json();
	return data.genres;
}