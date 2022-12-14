import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { InfinitySpin } from "react-loader-spinner"; //Loader
import SearchMovie from "../pages/api/searchMovies";

import { useSession, signOut, signIn } from "next-auth/react";

const Header = () => {
	const router = useRouter();
	const [search, setSearch] = useState("");
	const [movies, setMovies] = useState(null);
	const searchRef = useRef(null);
	const { data: session } = useSession();

	useEffect(() => {
		if (typeof document !== undefined) {
			require("bootstrap/dist/js/bootstrap");
		}
	}, []);

	const searchHandler = async (e) => {
		setSearch(e.target.value);
		if (search.length < 2 || !search) {
			document.getElementById("search-results").style.display = "none";
			setMovies(null);
		} else {
			document.getElementById("search-results").style.display = "";
			setMovies(await SearchMovie(search));
			console.log(movies);
		}
	};
	const onClickHandler = () => {
		setSearch("");
		document.getElementById("search-results").style.display = "none";
	};
	const onBlurHandler = () => {
		// timeout for not show immidiately
		setTimeout(() => {
			document.getElementById("search-results").style.display = "none";
		}, 100);
	};
	if (session) {
		<div style={{ display: "flex", justifyContent: "center" }}>
			<InfinitySpin width="200" color="#4fa94d" />
		</div>;
	}
	return (
		<div className="test">
			<header className="header">
				<div className="container-fluid">
					<div className="header__content">
						<div className="header__logo">
							<Link href="/">
								<a>
									<Image
										width={150}
										height={50}
										src="/assets/images/logo/logo.png"
										alt="logo"></Image>
								</a>
							</Link>
						</div>

						<div className="header__search">
							<input
								ref={searchRef}
								id="search-input"
								type="text"
								value={search}
								onBlur={onBlurHandler}
								onChange={searchHandler}
								onFocus={searchHandler}
								placeholder="Search movies"></input>
							<button onClick={() => searchRef.current.focus()} type="button">
								<i className="icofont-search-2"></i>
							</button>
							<ul
								style={{
									position: "absolute",
									top: "100%",
									left: "0",
									display: "none",
									zIndex: "1",
								}}
								id="search-results">
								{movies ? (
									movies.slice(0, 5).map((movie) => {
										console.log("movie inn");
										return (
											<li
												style={{ cursor: "pointer" }}
												onClick={onClickHandler}
												key={movie.id}>
												<Link href={`/moviedetails/${movie.id}`}>
													<div className="search-bar-items">
														<Image
															width={50}
															height={75}
															src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
															alt="search-bar-movie-image"
														/>
														<a
															style={{ color: "white" }}
															className={
																router.pathname == "/upcoming_movies"
																	? "drop-down-item active"
																	: "drop-down-item"
															}>
															{movie.title}
														</a>
													</div>
												</Link>
											</li>
										);
									})
								) : (
									<div style={{ display: "flex", justifyContent: "center" }}>
										<InfinitySpin width="200" color="#4fa94d" />
									</div>
								)}
							</ul>
						</div>
						<div className="header__menu ms-auto">
							<ul className="header__nav mb-0">
								<li className="header__nav-item">
									<Link href="/">
										<a className="header__nav-link">Home</a>
									</Link>
								</li>

								<li className="header__nav-item">
									<a
										className="header__nav-link"
										href="#"
										role="button"
										data-bs-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
										data-bs-offset="0,10">
										Pages
									</a>

									<ul
										className="dropdown-menu header__nav-menu"
										data-popper-placement="top-start">
										<li>
											<Link href="/upcoming_movies">
												<a
													className={
														router.pathname == "/upcoming_movies"
															? "drop-down-item active"
															: "drop-down-item"
													}>
													Upcoming Movies
												</a>
											</Link>
										</li>
										<li>
											<Link href="/populer">
												<a
													className={
														router.pathname == "/populer"
															? "drop-down-item active"
															: "drop-down-item"
													}>
													Populer Movies
												</a>
											</Link>
										</li>

										<li>
											<Link href="/explore">
												<a
													className={
														router.pathname == "/explore"
															? "drop-down-item active"
															: "drop-down-item"
													}>
													Explore
												</a>
											</Link>
										</li>
									</ul>
								</li>
								{session ? (
									<li className="header__nav-item">
										<Link href="/profile">
											<a className="header__nav-link">Profile</a>
										</Link>
									</li>
								) : null}
							</ul>
						</div>

						<div className="header__actions">
							<div className="header__action header__action--search">
								<button className="header__action-btn" type="button">
									<i className="icofont-search-1"></i>
								</button>
							</div>

							<div className="header__action header__action--profile">
								<div className="dropdown">
									<a
										className="dropdown-toggle"
										href="#"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
										data-bs-offset="-100,10">
										<span>
											<i className="icofont-user"></i>
										</span>{" "}
										{/* Username */}
										<span className="d-none d-md-inline">
											{session ? session.user.name : "Join"}
										</span>
									</a>

									<ul className="dropdown-menu">
										{!session ? (
											<>
												<li>
													<button
														onClick={() => signIn("google")}
														className={"dropdown-item"}>
														<span className="me-1">
															<i className="icofont-space-shuttle"></i>
														</span>
														Sign Up
													</button>
												</li>

												<li>
													<button
														onClick={() => signIn("google")}
														className={"dropdown-item"}>
														<span className="me-1">
															<i className="icofont-login"></i>
														</span>
														Sign In
													</button>
												</li>
											</>
										) : null}

										{session ? (
											<li>
												<button
													className="dropdown-item"
													onClick={() => signOut()}>
													{" "}
													Sign Out{" "}
													<span className="ms-1">
														<i className="icofont-logout"></i>
													</span>
												</button>
											</li>
										) : null}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
