import { useState, useEffect } from 'react';
import Carousel from './components/Carousel';
import Nav from './components/Nav';
import CarouselPlaceholder from './components/CarouselPlaceholder';
import Trending from './components/trending';
import Upcomming from './components/Upcomming';

function App() {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();

	useEffect(() => {
		const getData = async () => {
			try {
				const { VITE_API_URL, VITE_API_KEY } = import.meta.env;
				const responses = await Promise.all([
					fetch(
						`${VITE_API_URL}games?key=${VITE_API_KEY}&page_size=10&dates=2024-01-01,2024-02-19&ordering=-rating`
					),
					fetch(
						`${VITE_API_URL}games?key=${VITE_API_KEY}&page_size=1&dates=2024-02-01,2024-02-15&ordering=-added`
					),
					fetch(
						`${VITE_API_URL}games?key=${VITE_API_KEY}&page_size=9&dates=2024-02-20,2024-12-31&ordering=-added`
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

	return (
		<div className='bg-firmament_blue-950'>
			<header className='h-screen'>
				<Nav />
				{loading && <CarouselPlaceholder />}
				{!loading && <Carousel slides={data[0].results} />}
			</header>
			<main className='text-atomic_orange-50 px-20 flex flex-col gap-14 py-14'>
				{!loading && <Trending game={data[1].results} />}
				{!loading && <Upcomming games={data[2].results} />}
			</main>
		</div>
	);
}

export default App;

