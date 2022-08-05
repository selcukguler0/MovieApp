import Image from 'next/image';
import Link from 'next/link';

const ProductSingle = ({data,style}) => {
    return (
			<div className="nft-item" style={style}>
				<div className="nft-inner">
					<div className="nft-item-top d-flex justify-content-between align-items-center"></div>

					<div className="nft-item-bottom">
						<div className="nft-thumb">
							{/* http://image.tmdb.org/t/p/w500 */}
							{data.poster_path ? (
								<Image
								width={250}
								height={350}
								src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`}
								alt="movie-img"
							/>) : <div style={{width: "236.49px", height: "337px", display: "flex", justifyContent: "center", alignItems: "center"}}>IMAGE NOT FOUND</div>}
							
							<span className="badge rounded-pill position-absolute">
								<i className="icofont-heart"></i>{" "}
								{`${data.vote_average}`.slice(0, 3)}k
							</span>
						</div>
						<div className="nft-content">
							<div className="content-title">
								<h5>
									<Link href="/itemdetails">
										{data.title.length > 20 ? (
											<a>{`${data.title}`.slice(0, 20) + "..."}</a>
										) : (
											<a>{`${data.title}`}</a>
										)}
									</Link>
								</h5>
							</div>

							<div className="nft-status d-flex flex-wrap justify-content-between align-items-center ">
								<div className="nft-stock">
									{" "}
									{`${data.overview}`.slice(0, 100) + "..."}
								</div>
							</div>
							<div className="price-like d-flex justify-content-between align-items-center">
								<Link href={`/moviedetails/${data.id}`}>
									<a className="nft-bid">More Info</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default ProductSingle;