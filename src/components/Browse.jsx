import { Link } from 'react-router-dom';
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

const links = [
	'New Releases',
	[
		{ svg: FaStar, text: 'Last 30 days' },
		{ svg: FaFire, text: 'This week' },
		{ svg: FaAngleDoubleRight, text: 'Next week' },
	],
	'Top',
	[
		{ svg: FaTrophy, text: 'Best of the year' },
		{ svg: FaChartSimple, text: `Popular in ${getYear(new Date())}` },
		{ svg: FaCrown, text: 'All time top' },
	],
	'Genres',
	[
		{ svg: RiBoxingFill, text: 'Action' },
		{ svg: FaChessKnight, text: 'Strategy' },
		{ svg: RiSwordFill, text: 'RPG' },
		{ svg: FaGun, text: 'shooter' },
		{ svg: FaMountain, text: 'Adventure' },
		{ svg: FaPuzzlePiece, text: 'Puzzle' },
		{ svg: FaFlagCheckered, text: 'Racing' },
		{ svg: FaFootballBall, text: 'Sports' },
	],
];

function Browse() {
	return (
		<div className='flex bg-firmament_blue-950 h-screen'>
			<Nav bgActive={true} />
			<aside
				style={{ scrollbarWidth: 'none' }}
				className='sticky overflow-y-scroll flex flex-col gap-10 bg-firmament_blue-950 text-autumn_white-50 w-1/5 p-10 pt-20'
			>
				<section
					className=' flex flex-col gap-8 
								[&_div]:flex [&_div]:flex-col 
								[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:py-2
								[&_button]:flex [&_button]:p-4 [&_button]:gap-3 [&_button]:items-center [&_button]:text-xl
								[&_button:hover]:bg-autumn_white-50/10  [&_button]:rounded-xl
								[&_button>p]:text-lg'
				>
					<div>
						{links.map((link, index) => (
							<div key={index}>
								{Array.isArray(link) ? (
									<>
										{link.map((subLink, index) => (
											<button key={index}>
												<subLink.svg />
												<p>{subLink.text}</p>
											</button>
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
		</div>
	);
}

export default Browse;
