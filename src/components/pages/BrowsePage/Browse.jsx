import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nav from '../../Nav';
import {
	getYear,
	subDays,
	format,
	previousSunday,
	addDays,
	nextSunday,
	startOfYear,
	endOfYear,
} from 'date-fns';
import {
	FaStar,
	FaFire,
	FaAngleDoubleRight,
	FaTrophy,
	FaChessKnight,
	FaMountain,
	FaPuzzlePiece,
	FaFlagCheckered,
	FaFootballBall,
} from 'react-icons/fa';
import { FaChartSimple, FaCrown, FaGun } from 'react-icons/fa6';
import { RiBoxingFill, RiSwordFill } from 'react-icons/ri';

const today = format(new Date(), 'yyyy-MM-dd');
const last30Days = format(subDays(new Date(), 30), 'yyyy-MM-dd');
const startWeek = format(previousSunday(new Date()), 'yyyy-MM-dd');
const endWeek = format(addDays(startWeek, 7), 'yyyy-MM-dd');
const startNextWeek = format(nextSunday(new Date()), 'yyyy-MM-dd');
const endNextWeek = format(addDays(startNextWeek, 7), 'yyyy-MM-dd');
const startYear = format(startOfYear(new Date()), 'yyyy-MM-dd');
const endYear = format(endOfYear(new Date()), 'yyyy-MM-dd');

const links = [
	'New Releases',
	[
		{
			svg: FaStar,
			text: 'Last 30 days',
			slug: 'last-30-days',
			url: `dates=${last30Days},${today}&ordering=-rating`,
		},
		{
			svg: FaFire,
			text: 'This week',
			slug: 'this-week',
			url: `dates=${startWeek},${endWeek}&ordering=-rating`,
		},
		{
			svg: FaAngleDoubleRight,
			text: 'Next week',
			slug: 'next-week',
			url: `dates=${startNextWeek},${endNextWeek}&ordering=-rating`,
		},
	],
	'Top',
	[
		{
			svg: FaTrophy,
			text: 'Best of the year',
			slug: 'best-year',
			url: `dates=${startYear},${endYear}&ordering=-rating`,
		},
		{
			svg: FaChartSimple,
			text: `Popular in ${getYear(new Date())}`,
			slug: 'popular-year',
			url: `dates=${startYear},${endYear}&ordering=-added`,
		},
		{
			svg: FaCrown,
			text: 'All time top',
			slug: 'popular-all-time',
			url: `ordering=-added`,
		},
	],
	'Genres',
	[
		{
			svg: RiBoxingFill,
			text: 'Action',
			slug: 'action',
			url: `ordering=-added&genres=action`,
		},
		{
			svg: FaChessKnight,
			text: 'Strategy',
			slug: 'strategy',
			url: `ordering=-added&genres=strategy`,
		},
		{
			svg: RiSwordFill,
			text: 'RPG',
			slug: 'rpg',
			url: `ordering=-added&genres=role-playing-games-rpg`,
		},
		{
			svg: FaGun,
			text: 'shooter',
			slug: 'shooter',
			url: `ordering=-added&genres=shooter`,
		},
		{
			svg: FaMountain,
			text: 'Adventure',
			slug: 'adventure',
			url: `ordering=-added&genres=adventure`,
		},
		{
			svg: FaPuzzlePiece,
			text: 'Puzzle',
			slug: 'puzzle',
			url: `ordering=-added&genres=puzzle`,
		},
		{
			svg: FaFlagCheckered,
			text: 'Racing',
			slug: 'racing',
			url: `ordering=-added&genres=racing`,
		},
		{
			svg: FaFootballBall,
			text: 'Sports',
			slug: 'sports',
			url: `ordering=-added&genres=sports`,
		},
	],
];

function Browse() {
	const [hideTop, setHideTop] = useState(false);

	let currentScrollTop = window.scrollY;
	useEffect(() => {
		const handleScroll = () => {
			let lastScrollTop = window.scrollY;
			setHideTop(currentScrollTop >= lastScrollTop ? true : false);
			currentScrollTop = lastScrollTop;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`relative bg-firmament_blue-950 text-autumn_white-50 pt-20 transition-all duration-300 delay-75 ease-in-out
			${hideTop ? 'pt-20' : ''}`}
		>
			<Nav bgActive={true} />
			<aside
				style={{ scrollbarWidth: 'none' }}
				className={`fixed top-0 bottom-0 overflow-y-scroll flex flex-col gap-10 bg-firmament_blue-950 text-autumn_white-50 w-2/12 px-7 transition-all duration-300 delay-75 ease-in-out
				${hideTop ? 'pt-20' : ''}`}
			>
				<section
					className=' flex flex-col gap-8 
								[&_div]:flex [&_div]:flex-col 
								[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:py-2
								[&_a]:flex [&_a]:p-4 [&_a]:gap-3 [&_a]:items-center [&_a]:text-xl
								[&_a:hover]:bg-autumn_white-50/10  [&_a]:rounded-xl
								[&_a>p]:text-lg'
				>
					<div>
						{links.map((link, index) => (
							<div key={index}>
								{Array.isArray(link) ? (
									<>
										{link.map((subLink, index) => (
											<Link
												to={`${subLink.slug}`}
												state={{ url: subLink.url, text: subLink.text }}
												key={index}
											>
												<subLink.svg />
												<p>{subLink.text}</p>
											</Link>
										))}
									</>
								) : (
									<h2>{link}</h2>
								)}
							</div>
						))}
					</div>
				</section>
			</aside>
			<div className='w-10/12 ml-[16.666667%] pr-7'>
				<Outlet />
			</div>
		</div>
	);
}

export default Browse;
