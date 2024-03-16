import { useState, useEffect } from 'react';
import {
	startOfYear,
	endOfYear,
	startOfMonth,
	subMonths,
	addDays,
	format,
} from 'date-fns';
import Nav from '../../Nav';
import Carousel from './components/Carousel';
import Trending from './components/Trending';
import Upcoming from './components/Upcoming';
import Stream from './components/Stream';
import BestSeller from './components/BestSeller';
import Reviews from './components/Reviews';
import Blogs from './components/Blogs';
import Counter from './components/Counter';
import Contact from './components/Contact';
import Footer from '../../footer';
import { Oval } from 'react-loader-spinner';

function App() {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();

	useEffect(() => {
		const getData = async () => {
			try {
				setLoading(true);
				const { VITE_API_URL, VITE_API_KEY } = import.meta.env;
				const today = format(new Date(), 'yyyy-MM-dd');
				const tomorrow = format(addDays(new Date(), 1), 'yyyy-MM-dd');
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
					fetch(
						`${VITE_API_URL}games?key=${VITE_API_KEY}&page_size=1&dates=${tomorrow},${endYear}&ordering=released` //the next game to be released
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

	if (loading) {
		return (
			<div className='flex justify-center items-center h-screen bg-firmament_blue-950'>
				<Oval height='80' width='80' color='#f9a826' secondaryColor='#f9a826' />
			</div>
		);
	}

	const carouselData = data && data[0]?.results;
	const trendingData = data && data[1]?.results;
	const upcomingData = data && data[2]?.results;
	const counterData = data && data[3]?.results;
	return (
		<div className='bg-firmament_blue-950'>
			<header className='h-screen'>
				<Nav />
				<Carousel slides={carouselData} />
			</header>
			<main className='text-autumn_white-50 flex flex-col gap-14 py-14'>
				<Trending game={trendingData} />
				<Upcoming games={upcomingData} />
				<Stream game={carouselData[0]} />
				<BestSeller games={trendingData} />
				<Reviews game={trendingData[0]} />
				<Blogs />
				<Counter game={counterData} />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;

