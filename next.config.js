/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["image.tmdb.org", "lh3.googleusercontent.com"],
	},
	env: {
		MOVIE_API_KEY: "5d97390fd3e9ffc8e1cb4890477153b3",
		GOOGLE_CLIENT_ID:
			"630435442634-oqnrpkgjlt9lfb1l9q86chjc858m7bfg.apps.googleusercontent.com",
		GOOGLE_CLIENT_SECRET: "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",
		NEXTAUTH_SECRET:
			"f422c32636d3f9e10cbef287f5a0b782043a5fe5d5dfe54124363f576f0b6a92",
	},
};

module.exports = nextConfig
