import Products from "../data/Product/Products.json";
import CollectionSingle from "../components/common/Collection";
import PopularList from "../data/Collection/Popular.json";
import ProductSingle from "../components/common/ProductSingle";
import FollowerSingle from "../components/common/Collector";
import User from "../data/User/Users.json";
import { InfinitySpin } from "react-loader-spinner";//Loader
import Image from "next/image"
import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";

var Follower = User.slice(0, 8);
var Following = User.slice(0, 8);

var GetPopularList = PopularList.slice(0, 3);

var productList = Products;
var featuredProduct = Products.slice(0, 9);

const Author = () => {
	const { data: session } = useSession();
	console.log("Author", session);
	if (!session) {
		return (
			<div style={{ display: "flex", justifyContent: "center" }}>
				<InfinitySpin width="200" color="#4fa94d" />
			</div>
		);
	}
	console.log(session);
	return (
		<div>
			<section className="profile-section padding-top padding-bottom">
				<div className="container">
					<div className="section-wrapper">
						<div className="member-profile">
							<div className="profile-item">
								<div className="profile-cover">
									<Image width={1146} height={336} src="/assets/images/profile/cover.jpg" alt="cover-pic" />
									<div className="edit-photo custom-upload">
										<div className="file-btn">
											<i className="icofont-camera"></i>
											Edit Photo
										</div>
										<input
											title="This is the text of the tooltip"
											type="file"
											disabled
										/>
									</div>
								</div>
								<div className="profile-information">
									<div className="profile-pic">
										<Image
											width={210}
											height={260}
											src={session.user.image}
											alt="profile-picture"
										/>
										<div className="custom-upload">
											<div className="file-btn">
												<span className="d-none d-lg-inline-block">
													{" "}
													<i className="icofont-camera"></i>
													Edit
												</span>
												<span className="d-lg-none mr-0">
													<i className="icofont-plus"></i>
												</span>
											</div>
											<input type="file" />
										</div>
									</div>
									<div className="profile-name">
										<h4>{session.user.name}</h4>
										<p>{session.user.email}</p>
									</div>
									<ul className="profile-contact">
										<li>
											<a href="#">
												<div className="icon">
													<i className="icofont-ui-rate-add"></i>
												</div>
												<div className="text">
													<p>Follow</p>
												</div>
											</a>
										</li>
										<li>
											<a href="#">
												<div className="icon">
													<i className="icofont-speech-comments"></i>
												</div>
												<div className="text">
													<p>Send Message</p>
												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="profile-item d-none">
								<div className="lab-inner">
									
									<div className="lab-content">
										<div className="profile-name">
											<div className="p-name-content">
												<h4>William Smith</h4>
												<p>Active 02 Minutes Ago</p>
											</div>

											<div className="contact-button">
												<button className="contact-btn">
													<i className="icofont-info-circle"></i>
												</button>
											</div>
										</div>
										<ul className="profile-contact">
											<li>
												<a href="#">
													<div className="icon">
														<i className="icofont-user"></i>
													</div>
													<div className="text">
														<p>Add Friends</p>
													</div>
												</a>
											</li>
											<li>
												<a href="#">
													<div className="icon">
														<i className="icofont-envelope"></i>
													</div>
													<div className="text">
														<p>Publice Message</p>
													</div>
												</a>
											</li>
											<li>
												<a href="#">
													<div className="icon">
														<i className="icofont-envelope"></i>
													</div>
													<div className="text">
														<p>Private Message</p>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="profile-details">
								<nav className="profile-nav">
									<div className="nav nav-tabs" id="nav-tab" role="tablist">
										<button
											className="nav-link active"
											id="nav-allNft-tab"
											data-bs-toggle="tab"
											data-bs-target="#allNft"
											type="button"
											role="tab"
											aria-controls="allNft"
											aria-selected="true">
											All NFT
										</button>
										<button
											className="nav-link"
											id="nav-about-tab"
											data-bs-toggle="tab"
											data-bs-target="#about"
											type="button"
											role="tab"
											aria-controls="about"
											aria-selected="false">
											About
										</button>

										<button
											className="nav-link"
											id="nav-follower-tab"
											data-bs-toggle="tab"
											data-bs-target="#follower"
											type="button"
											role="tab"
											aria-controls="follower"
											aria-selected="false">
											Follower <span className="item-number">231</span>
										</button>
										<button
											className="nav-link"
											id="nav-following-tab"
											data-bs-toggle="tab"
											data-bs-target="#following"
											type="button"
											role="tab"
											aria-controls="following"
											aria-selected="false">
											Following <span className="item-number">145</span>
										</button>

										<div className="dropdown">
											<a
												className="btn dropdown-toggle"
												href="#"
												role="button"
												data-bs-toggle="dropdown"
												aria-expanded="false">
												Setting
											</a>

											<ul className="dropdown-menu">
												<li>
													<a className="dropdown-item" href="#">
														Edit Profile
													</a>
												</li>
											</ul>
										</div>
									</div>
								</nav>
								<div className="tab-content" id="nav-tabContent">
									<div
										className="tab-pane activity-page fade show active"
										id="allNft"
										role="tabpanel">
										<div>
											<div className="row">
												<div className="col-xl-12">
													<article>
														<div className="activity-tab">
															<ul
																className="nav nav-pills mb-30 px-2"
																id="pills-tab"
																role="tablist">
																<li className="nav-item" role="presentation">
																	<button
																		className="nav-link active"
																		id="pills-mentions-tab"
																		data-bs-toggle="pill"
																		data-bs-target="#pills-mentions"
																		type="button"
																		role="tab"
																		aria-controls="pills-mentions"
																		aria-selected="true">
																		<i className="icofont-flash"></i>
																		On Sale
																	</button>
																</li>
																<li className="nav-item" role="presentation">
																	<button
																		className="nav-link"
																		id="pills-favorites-tab"
																		data-bs-toggle="pill"
																		data-bs-target="#pills-favorites"
																		type="button"
																		role="tab"
																		aria-controls="pills-favorites"
																		aria-selected="false">
																		<i className="icofont-license"></i>
																		owned
																	</button>
																</li>

																<li className="custom-select">
																	<select>
																		<option value="1">Everything</option>
																		<option value="2">Recent</option>
																		<option value="3">Relevant</option>
																		<option value="4">Popular</option>
																	</select>
																</li>
															</ul>
															<div
																className="tab-content activity-content"
																id="pills-tabContent">
																<div
																	className="tab-pane fade mentions-section show active onsale-loadmore"
																	id="pills-mentions"
																	role="tabpanel"
																	aria-labelledby="pills-mentions-tab">
																	<div className="row justify-content-center g-4">
																		{productList.map((item) => (
																			<div
																				className="col-lg-3 col-sm-4"
																				key={item.id}>
																				<ProductSingle data={item} />
																			</div>
																		))}
																	</div>
																</div>
																<div
																	className="tab-pane fade"
																	id="pills-favorites"
																	role="tabpanel"
																	aria-labelledby="pills-favorites-tab">
																	<div className="row justify-content-center g-4">
																		{productList.map((item) => (
																			<div
																				className="col-lg-3 col-sm-6"
																				key={item.id}>
																				<ProductSingle data={item} />
																			</div>
																		))}
																	</div>
																</div>
																<div
																	className="tab-pane fade"
																	id="pills-friends"
																	role="tabpanel"
																	aria-labelledby="pills-friends-tab">
																	<div className="row g-4">
																		{GetPopularList.map((item) => (
																			<CollectionSingle
																				item={item}
																				key={item.id}
																			/>
																		))}
																	</div>
																</div>
																<div
																	className="tab-pane fade"
																	id="pills-groups"
																	role="tabpanel"
																	aria-labelledby="pills-groups-tab">
																	<div className="row justify-content-center g-4">
																		{productList.map((item) => (
																			<div
																				className="col-lg-4 col-sm-6"
																				key={item.id}>
																				<ProductSingle data={item} />
																			</div>
																		))}
																	</div>
																</div>
															</div>
														</div>
													</article>
												</div>
											</div>
										</div>
									</div>

									<div
										className="tab-pane fade"
										id="about"
										role="tabpanel"
										aria-labelledby="nav-about-tab">
										<div>
											<div className="row">
												<div className="col-xl-9">
													<article>
														<div className="info-card mb-3">
															<div className="info-card-title">
																<h4>About</h4>
															</div>
															<div className="info-card-content">
																<p>
																	Lorem ipsum dolor sit amet consectetur
																	adipisicing elit. Consequuntur deserunt nemo
																	asperiores pariatur voluptatibus similique
																	illo obcaecati voluptate est reiciendis, sequi
																	commodi animi voluptatem ab ipsa debitis
																	assumenda iste saepe. A nesciunt omnis
																	repudiandae.
																</p>
															</div>
														</div>
														<div className="info-card">
															<div className="info-card-title">
																<h4>Other Info</h4>
															</div>
															<div className="info-card-content">
																<ul className="info-list">
																	<li>
																		<p className="info-name">Name</p>
																		<p className="info-details">
																			{session.user.name}
																		</p>
																	</li>
																	<li>
																		<p className="info-name">Country</p>
																		<p className="info-details">TR</p>
																	</li>
																	<li>
																		<p className="info-name">Age</p>
																		<p className="info-details">22</p>
																	</li>
																	<li>
																		<p className="info-name">Date of Birth</p>
																		<p className="info-details">01.01.2022</p>
																	</li>
																</ul>
															</div>
														</div>
													</article>
												</div>

												<div className="col-xl-3">
													<aside className="mt-5 mt-xl-0">
														<div className="profile-widget search-widget">
															<div className="widget-inner">
																<div className="widget-title">
																	<h5>Search NFT</h5>
																</div>
																<div className="widget-content">
																	<p>Search from best Rarest NFT collections</p>
																	<div className="form-floating nft-search-input">
																		<input
																			type="text"
																			className="form-control"
																			placeholder="Search NFT"
																		/>
																		<label>Search NFT</label>
																		<button type="button">
																			{" "}
																			<i className="icofont-search-1"></i>
																		</button>
																	</div>
																</div>
															</div>
														</div>
														<div className="widget widget-instagram">
															<div className="widget-header">
																<h5 className="title">Latest Liked Movies</h5>
															</div>
															<ul className="widget-wrapper d-flex flex-wrap justify-content-center">
																{featuredProduct.map((item) => (
																	<li key={item.id}>
																		<a>
																			<img
																				loading="lazy"
																				src={`${item.image}`}
																				alt="nft-img"
																			/>
																		</a>
																	</li>
																))}
															</ul>
														</div>
													</aside>
												</div>
											</div>
										</div>
									</div>

									<div
										className="tab-pane fade"
										id="activity"
										role="tabpanel"
										aria-labelledby="nav-activity-tab"></div>

									<div
										className="tab-pane fade"
										id="follower"
										role="tabpanel"
										aria-labelledby="nav-follower-tab">
										<div>
											<div className="row">
												<div className="col-xl-12">
													<div className="follow-wrapper">
														<h4 className="h4-title">All Followers</h4>
														<div className="row g-3">
															{Follower.map((item, i = 1) => (
																<FollowerSingle
																	key={item.id}
																	data={item}
																	count={i}
																	countShow={false}
																	columnSize="col-lg-4"
																/>
															))}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div
										className="tab-pane fade"
										id="following"
										role="tabpanel"
										aria-labelledby="nav-following-tab">
										<div className="row">
											<div className="col-xl-12">
												<div className="follow-wrapper">
													<h4 className="h4-title">Following</h4>
													<div className="row g-3">
														{Following.map((item, i = 1) => (
															<FollowerSingle
																key={item.id}
																data={item}
																count={i}
																countShow={false}
																columnSize="col-lg-4"
															/>
														))}
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

export default Author;

export async function getServerSideProps(context) {
	const session = await getSession(context)

	if (!session) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	}

	return {
		props: { session }
	}
}