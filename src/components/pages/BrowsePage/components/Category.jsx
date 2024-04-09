import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import GameCard from './GameCard';
import { links } from '../links';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

function Category() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	const [data, setData] = useState();
	let { category, page } = useParams();
	const infoLink = findDataBySlug(links, category);

	useEffect(() => {
		const controller = new AbortController();
		const { signal } = controller;
		const getData = async () => {
			try {
				setLoading(true);
				const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

				const response = await fetch(
					`${VITE_API_URL}games?key=${VITE_API_KEY}&${
						infoLink.url
					}&page_size=12&page=${page ? page : '1'}`,
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
	}, [category, page]);

	function findDataBySlug(links, slug) {
		// Iterate over each element of the array links
		for (const section of links) {
			// Checks if the current element is an array and has elements in it
			if (Array.isArray(section) && section.length > 0) {
				// Iterate over the elements within the subarray
				for (const item of section) {
					// Checks if the slug matches the slug of the current element.
					if (item.slug === slug) {
						// Returns the element if a match is found
						return item;
					}
				}
			}
		}
		// Retorna null si no se encuentra ninguna coincidencia
		return null;
	}

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
		<div className='min-h-screen max-h-max h-full flex flex-col justify-between'>
			<div>
				<h2 className='text-5xl font-modern'>{infoLink.text}</h2>
				<div className='grid grid-cols-3 gap-7 py-7'>
					{data.results.map(result => (
						<GameCard key={result.id} game={result} />
					))}
				</div>
			</div>
			<div
				className='flex justify-center gap-5 text-2xl py-5 h-full
			[&>div]:flex [&>div]:gap-3
			[&_a]:w-10 [&_a]:h-10 [&_a]:rounded-full [&_a]:flex [&_a]:justify-center [&_a]:items-center [&_a]:transition-colors'
			>
				<Link
					className={`hover:text-atomic_orange-950 ${
						data.previous ? '' : 'invisible'
					}`}
					to={`/browse/${category}/${parseInt(page) - 1}`}
				>
					<GrFormPrevious />
				</Link>
				{!data.previous ? (
					<div>
						<Link
							to={`/browse/${category}/1`}
							className='bg-atomic_orange-950 text-firmament_blue-950'
						>
							1
						</Link>
						{data.count / 12 > 1 ? (
							<Link
								to={`/browse/${category}/2`}
								className='hover:text-atomic_orange-950'
							>
								2
							</Link>
						) : (
							''
						)}
						{data.count / 12 > 2 ? (
							<Link
								to={`/browse/${category}/3`}
								className='hover:text-atomic_orange-950'
							>
								3
							</Link>
						) : (
							''
						)}
					</div>
				) : data.previous && data.next ? (
					<div>
						<Link
							to={`/browse/${category}/${parseInt(page) - 1}`}
							className='hover:text-atomic_orange-950'
						>
							{parseInt(page) - 1}
						</Link>
						<Link
							to={`/browse/${category}/${parseInt(page)}`}
							className='bg-atomic_orange-950 text-firmament_blue-950'
						>
							{page}
						</Link>
						<Link
							to={`/browse/${category}/${parseInt(page) + 1}`}
							className='hover:text-atomic_orange-950'
						>
							{parseInt(page) + 1}
						</Link>
					</div>
				) : !data.next ? (
					<div>
						<Link
							to={`/browse/${category}/${parseInt(page) - 2}`}
							className='hover:text-atomic_orange-950'
						>
							{parseInt(page) - 2}
						</Link>
						<Link
							to={`/browse/${category}/${parseInt(page) - 1}`}
							className='hover:text-atomic_orange-950'
						>
							{parseInt(page) - 1}
						</Link>
						<Link className='bg-atomic_orange-950 text-firmament_blue-950'>
							{page}
						</Link>
					</div>
				) : (
					''
				)}
				<Link
					className={`hover:text-atomic_orange-950 ${
						data.next ? '' : 'invisible'
					}`}
					to={
						page
							? `/browse/${category}/${parseInt(page) + 1}`
							: `/browse/${category}/2`
					}
				>
					<GrFormNext />
				</Link>
			</div>
		</div>
	);
}

export default Category;
