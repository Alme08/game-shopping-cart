import { useState, useEffect } from 'react';
import Carousel from './components/Carousel';
import Nav from './components/Nav';
import CarouselPlaceholder from './components/CarouselPlaceholder';
import Button from './components/Button';

function App() {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games?key=${
						import.meta.env.VITE_API_KEY
					}&page_size=10&dates=2024-01-01,2024-02-10&ordering=-rating`
				);
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				let data = await response.json();
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
				{!loading && <Carousel slides={data.results} />}
			</header>
			<main className='text-atomic_orange-50 px-20'>
				<section>
					<div className='flex items-center justify-between py-10'>
						<h2 className='font-modern text-4xl'>
							Trending <span className='text-atomic_orange-950'>Now!</span>
						</h2>
						<Button text={'View all'} primary={true} />
					</div>
					<div className='flex gap-5'>
						<div className='w-full aspect-video bg-demonic_red-950'></div>
						<div className='w-full'></div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;

