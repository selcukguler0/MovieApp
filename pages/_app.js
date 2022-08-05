import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import '../public/assets/css/icofont.min.css';
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useEffect} from 'react';

function MyApp({ Component, pageProps }) {
	// useEffect(() => {
	// 	const threeScript = document.createElement("script");
	// 	threeScript.setAttribute("id", "threeScript");
	// 	threeScript.setAttribute(
	// 		"src",
	// 		"https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
	// 	);
	// 	document.getElementsByTagName("head")[0].appendChild(threeScript);
	// 	return () => {
	// 		if (threeScript) {
	// 			threeScript.remove();
	// 		}
	// 	};
	// }, []); vantajs
  return (
		<div>
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
		</div>
	);
}

export default MyApp
