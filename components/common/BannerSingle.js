import Image from 'next/image'

const BannerSingle = ({ data }) => {
	//sometimes (image) url is not available
	if (!data.includes("tmdb")) {
		// "https://via.placeholder.com/500x750"
		return null;
	}
    return (
			<div key={data.id} className="col-md-3">
				<div className="banner_shape__item">
					<Image width={100} height={150} src={`${data}`} alt="BannerImage" />
				</div>
			</div>
		);
}

export default BannerSingle