export default function ExplorerFilter() {
	return (
		<div className="col-lg-3">
			<aside className="nft-filter">
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
								<i className="icofont-atom"></i> Chain
							</button>
						</h2>
						<div
							id="collapseOne"
							className="accordion-collapse collapse show"
							aria-labelledby="headingOne"
							data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value="Ethereum"
										id="ethereum"
										onChange={(event) => productSearch(event.target.value)}
									/>
									<label className="form-check-label">Ethereum</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value="BSC"
										id="ethereum"
										onChange={(event) => productSearch(event.target.value)}
									/>

									<label className="form-check-label">BSC</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value="Polygone"
										id="ethereum"
										onChange={(event) => productSearch(event.target.value)}
									/>

									<label className="form-check-label">Polygone</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value="Cronos"
										id="ethereum"
										onChange={(event) => productSearch(event.target.value)}
									/>

									<label className="form-check-label">Cronos</label>
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
								<i className="icofont-ui-browser"></i> Status
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
										className="form-check-input"
										type="checkbox"
										value="For Sell"
										id="ethereum"
										onChange={(event) => productSearch(event.target.value)}
									/>
									<label className="form-check-label">For Sell</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value="For Collect"
										id="ethereum"
										onChange={(event) => productSearch(event.target.value)}
									/>
									<label className="form-check-label">For Collect</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value="Trending"
										id="ethereum"
										onChange={(event) => productSearch(event.target.value)}
									/>
									<label className="form-check-label">Trending</label>
								</div>
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingThree">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseThree"
								aria-expanded="false"
								aria-controls="collapseThree">
								<i className="icofont-library"></i> Collections
							</button>
						</h2>
						<div
							id="collapseThree"
							className="accordion-collapse collapse"
							aria-labelledby="headingThree"
							data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value="Dark Cat Mewo"
										id="ethereum"
										onChange={(event) => productSearch(event.target.value)}
									/>
									<label className="form-check-label">Dark Cat Mewo</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value="Space_Riderz"
										id="ethereum"
										onChange={(event) => productSearch(event.target.value)}
									/>
									<label className="form-check-label">Space_Riderz</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value="Mimi_chika chao"
										id="ethereum"
										onChange={(event) => productSearch(event.target.value)}
									/>
									<label className="form-check-label">Mimi_chika chao</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value="Trending_Sculpture"
										id="ethereum"
										onChange={(event) => productSearch(event.target.value)}
									/>
									<label className="form-check-label">Trending_Sculpture</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value="Happy_hellwon"
										id="ethereum"
										onChange={(event) => productSearch(event.target.value)}
									/>
									<label className="form-check-label">Happy_hellwon</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value="Rock dA_ Crypto"
										id="ethereum"
										onChange={(event) => productSearch(event.target.value)}
									/>
									<label className="form-check-label">Rock dA_ Crypto</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value="Trdzng_Sxpture"
										id="ethereum"
										onChange={(event) => productSearch(event.target.value)}
									/>
									<label className="form-check-label">Trdzng_Sxpture</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value="Mickao_Flyn re"
										id="ethereum"
										onChange={(event) => productSearch(event.target.value)}
									/>
									<label className="form-check-label">Mickao_Flyn re</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value="Coffiinnee_de Mritto"
										id="ethereum"
										onChange={(event) => productSearch(event.target.value)}
									/>
									<label className="form-check-label">
										Coffiinnee_de Mritto
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</aside>
		</div>
	);
}
