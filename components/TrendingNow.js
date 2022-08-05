import ProductSingle from "./common/ProductSingle";
import { useEffect, useState } from "react";
import GetTrend from "../pages/api/getTrend";
import { InfinitySpin } from "react-loader-spinner"; //Loader

const TrendingNow = () => {
	const [trendMovies, setTrendMovies] = useState(null);
	const [selectedGenre, setSelectedGenre] = useState("Genre");
	useEffect(() => {
		async function fetchData() {
			setTrendMovies(await GetTrend());
		}
		fetchData();
	}, []);

	if (!trendMovies) {
		return (
			<div style={{ display: "flex", justifyContent: "center" }}>
				<InfinitySpin width="200" color="#4fa94d" />
			</div>
		);
	}

	const selectChange = async (e) => {
		setSelectedGenre(await e.target.value);
		setTrendMovies(await GetTrend(e.target.value));
	}

	return (
		<div>
			<section className="artwork-section">
				<div className="container">
					<div className="section-header">
						<h3 className="header-title">Trending Now</h3>
						<div className="header-content">
							<ul className="filter-group d-flex flex-wrap align-items-center">
								<li className="li day-filter">
									<div
										className="select-wrapper arrow-blue"
										data-icon="&#xef74;">
										<select
											onChange={selectChange}
											className=" form-select"
											aria-label="Day select">
											<option value="day">Day</option>
											<option value="week">Week</option>
										</select>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="section-wrapper">
						<div className="row justify-content-center g-4">
							{trendMovies.map((item) => (
								<div
									className="col-xl-3 col-lg-4 col-md-6 col-sm-9"
									key={item.id}>
									<ProductSingle data={item} />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default TrendingNow;
