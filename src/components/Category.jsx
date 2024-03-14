import { useState, useEffect } from 'react';
import {
	subDays,
	format,
	previousSunday,
	addDays,
	nextSunday,
	startOfYear,
	endOfYear,
} from 'date-fns';
import { useParams } from 'react-router-dom';
const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

const today = format(new Date(), 'yyyy-MM-dd');
const last30Days = format(subDays(new Date(), 30), 'yyyy-MM-dd');
const startWeek = format(previousSunday(new Date()), 'yyyy-MM-dd');
const endWeek = format(addDays(startWeek, 7), 'yyyy-MM-dd');
const startNextWeek = format(nextSunday(new Date()), 'yyyy-MM-dd');
const endNextWeek = format(addDays(startNextWeek, 7), 'yyyy-MM-dd');
const startYear = format(startOfYear(new Date()), 'yyyy-MM-dd');
const endYear = format(endOfYear(new Date()), 'yyyy-MM-dd');

const categoryURLs = {
	'last-30-days': `dates=${last30Days},${today}&ordering=-rating`,
	'this-week': `dates=${startWeek},${endWeek}&ordering=-rating`,
	'next-week': `dates=${startNextWeek},${endNextWeek}&ordering=-rating`,
	'best-year': `dates=${startYear},${endYear}&ordering=-rating`,
	'popular-year': `dates=${startYear},${endYear}&ordering=-added`,
	'popular-all-time': `ordering=-added`,
	action: `ordering=-added&genres=action`,
	strategy: `ordering=-added&genres=strategy`,
	rpg: `ordering=-added&genres=role-playing-games-rpg`,
	shooter: `ordering=-added&genres=shooter`,
	adventure: `ordering=-added&genres=adventure`,
	puzzle: `ordering=-added&genres=puzzle`,
	racing: `ordering=-added&genres=racing`,
	sports: `ordering=-added&genres=sports`,
};

function Category() {
	const { category } = useParams();
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();
		const getData = async () => {
			try {
				setLoading(true);
				const response = await Promise(
					fetch(
						`${VITE_API_URL}games?key=${VITE_API_KEY}&page_size=10&${categoryURLs[category]}`,
						{ signal: abortController.signal }
					)
				);
				if (!response.ok) {
					throw new Error(`HTTP error: The status is ${response.status}`);
				}
				let data = await Promise(response => response.json());
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
		return () => abortController.abort();
	}, []);
	loading && <div>Loading...</div>;
	error && <div>Error: {error}</div>;

	return (
		<div>
			{' '}
			{data.results.map(result => (
				<h2>{result.name}</h2>
			))}
		</div>
	);
}

export default Category;
