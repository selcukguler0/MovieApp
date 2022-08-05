import Link from "next/link";
import { useEffect, useState } from "react";
import GetGenres from "../pages/api/getGenres";
import { InfinitySpin } from "react-loader-spinner";//Loader


const Category = () => {
	const [genres, setGenres] = useState(null);
	useEffect(() => {
		async function fetchData() {
			setGenres(await GetGenres());
		}
		fetchData();
	}, [])
	if (!genres) {
		return (
			<div style={{ display: "flex", justifyContent: "center" }}>
				<InfinitySpin width="200" color="#4fa94d" />
			</div>
		);
	}
	console.log("genres",genres);
	return (
		<div>
			<section className="catergory-section padding-top padding-bottom">
				<div className="container">
					<div className="section-header">
						<h3 className="header-title">Browse By Genre</h3>
					</div>
					<div className="category-wrapper">
						<div className="row row-cols-2 row-cols-md-4 row-cols-xl-auto g-3">
							{genres.map((item) => (
								<div className="col" key={item.id}>
									<div className="cat-item">
										<Link href={`/category/${item.id}`}>
											<div className="cat-inner">
												<div className="cat-content">
													<h6>{`${item.name}`}</h6>
												</div>
											</div>
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Category;
