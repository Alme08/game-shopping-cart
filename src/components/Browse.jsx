import { Link, Outlet } from 'react-router-dom';
import { getYear } from 'date-fns';
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
import Nav from './Nav';
import { useState, useEffect } from 'react';

const links = [
	'New Releases',
	[
		{ svg: FaStar, text: 'Last 30 days', slug: 'last-30-days' },
		{ svg: FaFire, text: 'This week', slug: 'this-week' },
		{ svg: FaAngleDoubleRight, text: 'Next week', slug: 'next-week' },
	],
	'Top',
	[
		{ svg: FaTrophy, text: 'Best of the year', slug: 'best-year' },
		{
			svg: FaChartSimple,
			text: `Popular in ${getYear(new Date())}`,
			slug: 'popular-year',
		},
		{ svg: FaCrown, text: 'All time top', slug: 'popular-all-time' },
	],
	'Genres',
	[
		{ svg: RiBoxingFill, text: 'Action', slug: 'action' },
		{ svg: FaChessKnight, text: 'Strategy', slug: 'strategy' },
		{ svg: RiSwordFill, text: 'RPG', slug: 'rpg' },
		{ svg: FaGun, text: 'shooter', slug: 'shooter' },
		{ svg: FaMountain, text: 'Adventure', slug: 'adventure' },
		{ svg: FaPuzzlePiece, text: 'Puzzle', slug: 'puzzle' },
		{ svg: FaFlagCheckered, text: 'Racing', slug: 'racing' },
		{ svg: FaFootballBall, text: 'Sports', slug: 'sports' },
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
				className={`fixed top-0 bottom-0 overflow-y-scroll flex flex-col gap-10 bg-firmament_blue-950 text-autumn_white-50 w-1/5 px-10 transition-all duration-300 delay-75 ease-in-out
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
											<Link to={`${subLink.slug}`} key={index}>
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
			<div className='w-4/5 ml-[20%]'>
				<Outlet />
			</div>
		</div>
	);
}

export default Browse;
