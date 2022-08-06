import BannerSingle from './common/BannerSingle'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
// import BannerAni from '../components/animations/BannerAni'
import GetRandomMovies from '../pages/api/getRandomMovies';
import { InfinitySpin } from "react-loader-spinner";//Loader

import { useSession, signIn, signOut } from "next-auth/react";

const Banner = () => {
	const [BannerImageListOne, setBannerImageListOne] = useState(null);
	const [BannerImageListTwo, setBannerImageListTwo] = useState(null);
	const [BannerImageListThree, setBannerImageListThree] = useState(null);
	const [BannerImageListFour, setBannerImageListFour] = useState(null);
	const [popup, setPopUp] = useState(false);
	const {data: session} = useSession();
	console.log("useSession", session);
	//http://image.tmdb.org/t/p/w500/your_poster_path.jpg
	useEffect(() => {
		async function fetchData() {
			//Math.floor(Math.random() * 100) random images every time
			setBannerImageListOne(
				await GetRandomMovies(Math.floor(Math.random() * 30))
			);
			setBannerImageListTwo(
				await GetRandomMovies(Math.floor(Math.random() * 30))
			);
			setBannerImageListThree(
				await GetRandomMovies(Math.floor(Math.random() * 30))
			);
			setBannerImageListFour(
				await GetRandomMovies(Math.floor(Math.random() * 30))
			);
		}
		fetchData();
	}, []);

	// PopUp SignIN 
	useEffect(() => {
		console.log("useEffect called");
		if (popup && !session) {
			console.log(screen.width);
			const left = (screen.width - 400) / 2;
			console.log("left", left);
			setPopUp(false);
			window.open(
				"/api/auth/signin",
				"SignIn",
				`left=${left},top=100,width=400,height=500`
			);
		} else if (session) {
			window.close();
		}
	}, [popup, session]);
	
	if (
		!BannerImageListOne ||
		!BannerImageListTwo ||
		!BannerImageListThree ||
		!BannerImageListFour
	) {
		return (
			<div style={{ display: "flex", justifyContent: "center" }}>
				<InfinitySpin width="200" color="#4fa94d" />
			</div>
		);
	}
	return (
		<div>
			<section className="banner-section style-1">
				{/* <BannerAni /> disabled for performance issues */}
				<div className="container">
					<div className="banner-wrapper">
						<div className="row align-items-center justify-content-center">
							<div className="col-lg-8">
								<div className="banner-content text-center">
									<h2>Discover, Like and Save Your Favorite Movies </h2>
									<p>Movie DB.</p>
									<div className="banner-btns d-flex flex-wrap justify-content-center">
										<Link href="/explore">
											<a className="default-btn move-top">
												<span>Explore Now</span>
											</a>
										</Link>

										{!session ? (
											<button
												style={{ border: "none" }}
												onClick={() => setPopUp(true)}
												className="default-btn style-2 move-right">
												<span>SignUp / SignIn</span>
											</button>
										) : null}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="banner_shape">
					<div className="banner_shape__1">
						<div className="row g-3 mb-3">
							{BannerImageListOne.map((item, key) => (
								<BannerSingle
									data={`http://image.tmdb.org/t/p/w500${item.poster_path}`}
									key={key}
								/>
							))}
						</div>

						<div className="row g-3">
							{BannerImageListTwo.map((item, key) => (
								<BannerSingle
									data={`http://image.tmdb.org/t/p/w500${item.poster_path}`}
									key={key}
								/>
							))}
						</div>
					</div>
					<div className="banner_shape__2">
						<div className="row g-3 mb-3">
							{BannerImageListThree.map((item, key) => (
								<BannerSingle
									data={`http://image.tmdb.org/t/p/w500${item.poster_path}`}
									key={key}
								/>
							))}
						</div>

						<div className="row g-3">
							{BannerImageListFour.map((item, key) => (
								<BannerSingle
									data={`http://image.tmdb.org/t/p/w500${item.poster_path}`}
									key={key}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Banner;