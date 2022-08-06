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
				<title>Anftiz- NFT Marketplace React Next.js Template</title>
				<meta
					name="description"
					content="Anftiz is a full-fledged NFT or Digital assets marketplace HTML template. It is suitable for selling NFTs, or non-fungible tokens, Digital Arts, Digital Music & All types of Digital Assets. You can create, sell & collect NFT’s or digital assets through this website."
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
