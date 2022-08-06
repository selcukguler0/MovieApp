import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import GetDetails from "../api/getDetails";
import { InfinitySpin } from "react-loader-spinner"; //Loader
import Image from "next/image";


const MovieDetails = () => {
	const router = useRouter();
	const [details, setDetails] = useState(null);
	const id = router.query.id;
	useEffect(() => {
		async function fetchData() {
			//Math.floor(Math.random() * 100) random movies every time
			setDetails(await GetDetails(id));
		}
		fetchData();
	}, [id]);

	if (!id || !details || !details.production_companies) {
		return (
			<div style={{ display: "flex", justifyContent: "center" }}>
				<InfinitySpin width="200" color="#4fa94d" />
			</div>
		);
	}

	return (
		<div>
			<div className="item-details-section padding-top padding-bottom">
				<div className="container">
					<div className="item-details-wrapper">
						<div className="row g-5">
							<div className="col-lg-6">
								<div className="item-desc-part">
									<div className="item-desc-inner">
										<div className="item-desc-thumb"></div>
										<div className="item-desc-content">
											<nav>
												<div
													className="nav nav-tabs"
													id="nav-tab"
													role="tablist">
													<button
														className="nav-link active"
														id="nav-details-tab"
														data-bs-toggle="tab"
														data-bs-target="#nav-details"
														type="button"
														role="tab"
														aria-controls="nav-details"
														aria-selected="true">
														Details
													</button>
													<button
														className="nav-link"
														id="nav-bids-tab"
														data-bs-toggle="tab"
														data-bs-target="#nav-bids"
														type="button"
														role="tab"
														aria-controls="nav-bids"
														aria-selected="false">
														Company
													</button>
												</div>
											</nav>
											<div className="tab-content" id="nav-tabContent">
												{/* Details Tab */}
												<div
													className="details-tab tab-pane fade show active"
													id="nav-details"
													role="tabpanel"
													aria-labelledby="nav-details-tab">
													<p>{`${details.overview}`}</p>
													<div className="author-profile d-flex flex-wrap align-items-center gap-15"></div>
													<ul className="other-info-list">
														<li className="item-other-info">
															<div className="item-info-title">
																<h6>Status</h6>
															</div>
															<div className="item-info-details">
																<p>{details.status}</p>
															</div>
														</li>
														<li className="item-other-info">
															<div className="item-info-title">
																<h6>Release Date</h6>
															</div>
															<div className="item-info-details">
																<p>{details.release_date}</p>
															</div>
														</li>

														<li className="item-other-info">
															<div className="item-info-title">
																<h6>Popularity</h6>
															</div>
															<div className="item-info-details">
																<p>{details.popularity}</p>
															</div>
														</li>
													</ul>
												</div>
												<div
													className="bids-tab tab-pane fade"
													id="nav-bids"
													role="tabpanel"
													aria-labelledby="nav-bids-tab">
													<div
														className="details-tab tab-pane fade show active"
														id="nav-details"
														role="tabpanel"
														aria-labelledby="nav-details-tab">
														{details.production_companies[0]?.logo_path ? (
															<>
																<Image
																	width={200}
																	height={200}
																	alt="logo"
																	src={`http://image.tmdb.org/t/p/w500/${details.production_companies[0].logo_path}`}
																/>
																<br />
																<span style={{color: "white"}}>{details.production_companies[0].name}</span>
															</>
														) : (
															<span>Company Data Not Found</span>
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-5">
								<div className="movie-part">
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											textAlign: "center",
										}}>
										<h3>{details.title}</h3>
									</div>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											marginTop: "10px",
										}}>
										<Image
											width={200}
											height={300}
											src={`http://image.tmdb.org/t/p/w500/${details.poster_path}`}
											alt="movie-img"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
