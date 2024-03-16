import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import GameCard from './GameCard';

function Category() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	const [data, setData] = useState();
	const { state } = useLocation();

	useEffect(() => {
		const controller = new AbortController();
		const { signal } = controller;
		const getData = async () => {
			try {
				setLoading(true);
				const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

				const response = await fetch(
					`${VITE_API_URL}games?key=${VITE_API_KEY}&page_size=12&${state.url}`,
					{
						signal,
					}
				);

				if (!response.ok) {
					throw new Error(`HTTP error: The status is ${response.status}`);
				}

				let data = await response.json();
				setData(data);
				setError(null);
				setLoading(false);
			} catch (error) {
				if (error.name !== 'AbortError') {
					setError(error.message);
					setData(null);
				}
			}
			// finally throws an error if the fetch is aborted because set the loading at false before the fetch is done
		};

		getData();

		return () => {
			controller.abort();
		};
	}, [state]);

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

	return (
		<div className='min-h-screen max-h-max'>
			<h2 className='text-5xl font-modern'>{state.text}</h2>
			<div className='grid grid-cols-3 gap-7 py-7'>
				{data.results.map(result => (
					<GameCard key={result.id} game={result} />
				))}
			</div>
		</div>
	);
}

export default Category;
