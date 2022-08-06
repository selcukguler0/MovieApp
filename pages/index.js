import Banner from '../components/Banner';
import Category from '../components/Category';
import RandomMovies from "../components/LiveAuction";
import TrendingNow from '../components/TrendingNow';

const Home = () => {
  return (
		<div>
			<Banner/>
			<Category />
			<RandomMovies />
			<TrendingNow />
		</div>
	);
}

export default Home
