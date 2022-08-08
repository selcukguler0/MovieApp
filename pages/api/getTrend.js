export default async function GetTrend(time_window) {
	const time = time_window || "day";
	const res = await fetch(
		`https://api.themoviedb.org/3/trending/movie/${time}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
	);
	const data = await res.json();
	return data.results;
}
