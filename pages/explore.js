import { useState, useEffect } from "react";
import Products from "../data/Product/Products.json";
import ProductSingle from "../components/common/ProductSingle";
import GetRandomMovies from "../pages/api/getRandomMovies";
import GetGenres from "../pages/api/getGenres";
import GetMoviesByGenre from "./api/getMoviesByGenre";
import { InfinitySpin } from "react-loader-spinner"; //Loader

const Explore = () => {
	const [movies, setMovies] = useState(null);
	const [genres, setGenres] = useState(null);
	const [selectedGenres, setSelectedGenres] = useState([]);
	useEffect(() => {
		async function fetchData() {
			//Math.floor(Math.random() * 100) random movies every time
			setMovies(await GetRandomMovies(Math.floor(Math.random() * 100)));
			setGenres(await GetGenres());
		}
		fetchData();
	}, []);

	const genreOnChange = async (e) => {
		const { value } = e.target;
		console.log("e.target.checked", e.target.checked);
		console.log("selectedGenres", selectedGenres);
		if (e.target.checked) {
			selectedGenres === undefined
				? setSelectedGenres([value])
				: setSelectedGenres((selectedGenres) => [...selectedGenres, value]);
			console.log("selectedGenresAdd", selectedGenres);
		} else {
			setSelectedGenres(selectedGenres.filter((e) => e !== value));
			console.log(
				"selectedGenresRemove",
				selectedGenres.filter((e) => e !== value)
			);
		}
		console.log("selectedGenresAll", selectedGenres);
		setMovies(await GetMoviesByGenre(selectedGenres));
	};
	const sortOnChange = async (e) => {
		setMovies(await GetMoviesByGenre(selectedGenres, e.target.value));
	};

	if (!movies || !genres) {
		return (
			<div style={{ display: "flex", justifyContent: "center" }}>
				<InfinitySpin width="200" color="#4fa94d" />
			</div>
		);
	}
	console.log("movies", movies.length);
	return (
		<div>
			<section className="explore-section padding-top padding-bottom">
				<div className="container">
					<div className="section-wrapper">
						<div className="row gy-5 flex-row-reverse">
							<div className="col-lg-9">
								<div className="explore-wrapper explore-load">
									<div className="row g-4">
										{movies.length === 0 ? (
											<div>No movies Found</div>
										) : (
											movies.map((item) => (
												<div className="col-xl-4 col-md-6" key={item.id}>
													<ProductSingle data={item} />
												</div>
											))
										)}
									</div>
								</div>
							</div>
							{/* Explorer Filter */}
							<div className="col-lg-3">
								<div className="nft-filter">
									<div className="accordion" id="accordionExample">
										<div className="accordion-item">
											<h2 className="accordion-header" id="headingOne">
												<button
													className="accordion-button"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseOne"
													aria-expanded="true"
													aria-controls="collapseOne">
													<i className="icofont-atom"></i> Genres
												</button>
											</h2>
											<div
												id="collapseOne"
												className="accordion-collapse collapse show"
												aria-labelledby="headingOne"
												data-bs-parent="#accordionExample">
												<div className="accordion-body">
													<div className="form-check">
														{genres.map((item,i) => (
															<div key={i}>
																<label className="form-check-label">
																	{item.name}
																</label>
																<input
																	className="form-check-input"
																	type="checkbox"
																	value={item.id}
																	id={item.id}
																	onChange={genreOnChange}
																/>
																<br />
															</div>
														))}
													</div>
												</div>
											</div>
										</div>
										<div className="accordion-item">
											<h2 className="accordion-header" id="headingTwo">
												<button
													className="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseTwo"
													aria-expanded="false"
													aria-controls="collapseTwo">
													<i className="icofont-ui-browser"></i> Sort By
												</button>
											</h2>
											<div
												id="collapseTwo"
												className="accordion-collapse collapse"
												aria-labelledby="headingTwo"
												data-bs-parent="#accordionExample">
												<div className="accordion-body">
													<div className="form-check">
														<input
															onChange={sortOnChange}
															className="form-check-input"
															type="radio"
															value="popularity.desc"
															id="popularity.desc"
															name="sort"
														/>
														<label
															htmlFor="popularity.desc"
															className="form-check-label">
															Popularity Desc
														</label>
													</div>
													<div className="form-check">
														<input
															onChange={sortOnChange}
															className="form-check-input"
															type="radio"
															value="popularity.asc"
															id="popularity.asc"
															name="sort"
														/>
														<label
															htmlFor="popularity.asc"
															className="form-check-label">
															Popularity Asc
														</label>
													</div>
													<div className="form-check">
														<input
															onChange={sortOnChange}
															className="form-check-input"
															type="radio"
															value="vote_average.desc"
															id="vote_average.desc"
															name="sort"
														/>
														<label
															htmlFor="vote_average.desc"
															className="form-check-label">
															Vote Desc
														</label>
													</div>
													<div className="form-check">
														<input
															onChange={sortOnChange}
															className="form-check-input"
															type="radio"
															value="vote_average.asc"
															id="vote_average.asc"
															name="sort"
														/>
														<label
															htmlFor="vote_average.asc"
															className="form-check-label">
															Vote Asc
														</label>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Explore;
