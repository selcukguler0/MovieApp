import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "../public/assets/css/icofont.min.css";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider value={session}>
			<Head>
				<title>MovieDB</title>
				<meta
					name="description"
					content="Explore movies."
				/>
				<link rel="icon" type="image/png" href="assets/images/favicon.png" />
			</Head>
			<Header></Header>

			<Component {...pageProps} />

			<Footer></Footer>
		</SessionProvider>
	);
}

export default MyApp;
