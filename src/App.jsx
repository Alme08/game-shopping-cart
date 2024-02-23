import { useState, useEffect } from 'react';
import {
	startOfYear,
	endOfYear,
	startOfMonth,
	subMonths,
	nextDay,
	format,
} from 'date-fns';
import Carousel from './components/Carousel';
import Nav from './components/Nav';
import CarouselPlaceholder from './components/Placeholder/CarouselPlaceholder';
import Trending from './components/trending';
import Upcoming from './components/Upcoming';
import TrendingPlaceholder from './components/Placeholder/TrendingPlaceholder';
import UpcomingPlaceholder from './components/Placeholder/UpcomingPlaceholder';
import Stream from './components/Stream';
import BestSeller from './components/BestSeller';

function App() {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();

	useEffect(() => {
		const getData = async () => {
			try {
				const { VITE_API_URL, VITE_API_KEY } = import.meta.env;
				const today = format(new Date(), 'yyyy-MM-dd');
				const tomorrow = format(nextDay(new Date(), 1), 'yyyy-MM-dd');
				const startYear = format(startOfYear(new Date()), 'yyyy-MM-dd');
				const endYear = format(endOfYear(new Date()), 'yyyy-MM-dd');
				const startPastMonth = format(
					startOfMonth(subMonths(new Date(), 1)),
					'yyyy-MM-dd'
				);

				const responses = await Promise.all([
					fetch(
						`${VITE_API_URL}games?key=${VITE_API_KEY}&page_size=10&dates=${startYear},${today}&ordering=-rating` //the highest rated games from the current year
					),
					fetch(
						`${VITE_API_URL}games?key=${VITE_API_KEY}&page_size=7&dates=${startPastMonth},${today}&ordering=-added` //the 7 most popular games from the past 2 months
					),
					fetch(
						`${VITE_API_URL}games?key=${VITE_API_KEY}&page_size=9&dates=${tomorrow},${endYear}&ordering=-added` //the most anticipated upcoming games from the current year
					),
				]);
				responses.forEach(response => {
					if (!response.ok) {
						throw new Error(`HTTP error: The status is ${response.status}`);
					}
				});
				let data = await Promise.all(
					responses.map(response => response.json())
				);
				setData(data);
				setError(null);
			} catch (error) {
				setError(error.message);
				setData(null);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, []);

	if (error) {
		throw new Error(error);
	}

	const carouselData = data && data[0]?.results;
	const trendingData = data && data[1]?.results;
	const upcomingData = data && data[2]?.results;
	return (
		<div className='bg-firmament_blue-950'>
			<header className='h-screen'>
				<Nav />
				{loading && <CarouselPlaceholder />}
				{!loading && <Carousel slides={carouselData} />}
			</header>
			<main className='text-autumn_white-50 px-20 flex flex-col gap-14 py-14'>
				{loading && <TrendingPlaceholder />}
				{!loading && <Trending game={trendingData} />}
				{loading && <UpcomingPlaceholder />}
				{!loading && <Upcoming games={upcomingData} />}
				{!loading && <Stream game={carouselData[0]} />}
				{!loading && <BestSeller games={trendingData} />}
			</main>
		</div>
	);
}

export default App;

