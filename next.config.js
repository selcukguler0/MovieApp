/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["image.tmdb.org"],
	},
	env: {
		MOVIE_API_KEY: "5d97390fd3e9ffc8e1cb4890477153b3",
		GOOGLE_CLIENT_ID: "630435442634-oqnrpkgjlt9lfb1l9q86chjc858m7bfg.apps.googleusercontent.com",
		GOOGLE_CLIENT_SECRET:"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",
	}
};

module.exports = nextConfig
