import { useState, useEffect } from 'react';
import Carousel from './components/Carousel';
import Nav from './components/Nav';
import CarouselPlaceholder from './components/CarouselPlaceholder';

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
		return <h1>error</h1>;
	}

	return (
		<>
			<section className='h-screen'>
				<Nav />
				{loading && <CarouselPlaceholder />}
				{!loading && <Carousel slides={data.results} />}
			</section>
			<>hello world</>
		</>
	);
}

export default App;

