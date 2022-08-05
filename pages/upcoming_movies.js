import { useState, useEffect } from "react";
import GetUpcomingMovies from "./api/getUpcomingMovies";
import SearchMovie from "./api/searchMovies";
import ProductSingle from "../components/common/ProductSingle";
import { InfinitySpin } from "react-loader-spinner"; //Loader

const Auction = () => {
	const [movies, setMovies] = useState(null);
	const [search, setSearch] = useState();
	useEffect(() => {
		async function fetchData() {
			setMovies(await GetUpcomingMovies());
		}
		fetchData();
	}, []);

	const searchHandler = async (e) => {
		setSearch(e.target.value);
		if (!search) {
			async function fetchData() {
				setMovies(await GetUpcomingMovies());
			}
			fetchData();
		} else {
			setMovies(await SearchMovie(search));
		}
	};

	if (!movies) {
		return (
			<div style={{ display: "flex", justifyContent: "center" }}>
				<InfinitySpin width="200" color="#4fa94d" />
			</div>
		);
	}

	console.log(search);
	return (
		<div>
			<section className="explore-section padding-top padding-bottom">
				<div className="container">
					<div className="section-header">
						<div className="nft-filter d-flex flex-wrap align-items-center justify-content-center  gap-15">
							<h3>Upcoming Movies</h3>
						</div>
						<div className="nft-search">
							<div className="form-floating nft-search-input">
								<input
									type="text"
									className="form-control"
									id="nftSearch"
									placeholder="Search NFT"
									value={search}
									onChange={searchHandler}
								/>
								<label>Search Movies</label>
								<button type="button">
									{" "}
									<i className="icofont-search-1"></i>
								</button>
							</div>
						</div>
					</div>
					<div className="section-wrapper">
						<div className="explore-wrapper auction-loadmore">
							<div className="row g-4">
								{movies.map((item) => (
									<div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
										<ProductSingle data={item} />
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Auction;
