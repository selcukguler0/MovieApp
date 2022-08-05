/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["image.tmdb.org"],
	},
	env: {
		MOVIE_API_KEY: "5d97390fd3e9ffc8e1cb4890477153b3"
	}
};

module.exports = nextConfig
