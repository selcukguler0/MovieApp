// import BannerAni from "../components/animations/BannerAni";

const Footer = () => {
	return (
		<div style={{ marginTop: "50px" }}>
			<footer className="footer-section">
				<div className="footer-top">
					{/* <BannerAni /> disabled for performance issues */}
					<div className="footer-newsletter">
						<div className="container">
							<div className="row g-4 align-items-center justify-content-center">
								<div className="col-lg-6">
									<div className="newsletter-part">
										<div className="ft-header">
											<h4>Get The Latest Updates</h4>
										</div>
										<form>
											<input type="email" placeholder="Your Mail Address" />
											<button type="submit" disabled>
												{" "}
												Subscribe now
											</button>
										</form>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="social-part ps-lg-5">
										<div className="ft-header">
											<h4>Social Medias</h4>
										</div>
										<ul className="social-list d-flex flex-wrap align-items-center mb-0">
											<li className="social-link">
												<a href="https://www.linkedin.com/in/sel%C3%A7ukg%C3%BCler/">
													<i className="icofont-linkedin"></i>
												</a>
											</li>
											<li className="social-link">
												<a href="https://github.com/selcukguler0">
													<i className="icofont-github"></i>
												</a>
											</li>
											<li className="social-link">
												<a href="https://www.instagram.com/selcuk.0/">
													<i className="icofont-instagram"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
				<div className="footer-bottom">
					<div className="container">
						<p className="text-center py-4 mb-0">
							Made with <i className="icofont-love"></i> by{" "}
							<a href="https://www.linkedin.com/in/sel%C3%A7ukg%C3%BCler/">
								Selçuk Güler
							</a>
						</p>
					</div>
				</div>
			</footer>

			<a href="#" className="scrollToTop">
				<i className="icofont-swoosh-up"></i>
			</a>
		</div>
	);
};

export default Footer;
