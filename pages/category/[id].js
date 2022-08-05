import { useState, useEffect } from "react";
import ProductSingle from "../../components/common/ProductSingle";
import GetMoviesByGenre from "../../pages/api/getMoviesByGenre";
import { InfinitySpin } from "react-loader-spinner"; //Loader
import { useRouter } from "next/router";


const Explore = () => {
	const router = useRouter();
	const [movies, setMovies] = useState(null);

	console.log("router", router.query.id);
	useEffect(() => {
		async function fetchData() {
			setMovies(await GetMoviesByGenre(router.query.id));
		}
		fetchData();
	}, [router.query.id]);

	const sortOnChange = async (e) => {
		setMovies(await GetMoviesByGenre(router.query.id, e.target.value));
		console.log("sortOnChange", e.target.value);
	};

	if (!movies) {
		return (
			<div style={{ display: "flex", justifyContent: "center" }}>
				<InfinitySpin width="200" color="#4fa94d" />
			</div>
		);
	}
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
