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

function Browse() {
	const year = getYear(new Date());
	return (
		<div className='flex bg-firmament_blue-950 h-screen'>
			<Nav bgActive={true} />
			<aside
				style={{ scrollbarWidth: 'none' }}
				className='sticky overflow-y-scroll flex flex-col gap-10 bg-firmament_blue-950 text-autumn_white-50 w-1/5 p-10 pr-0 pt-20'
			>
				<section
					className=' flex flex-col gap-8 [&>div]:flex [&>div]:flex-col [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:pb-2
        [&_button]:flex [&_button]:p-4 [&_button]:gap-3 [&_button]:items-center [&_button]:text-xl
        [&_button:hover]:bg-autumn_white-50/10  [&_button]:rounded-xl
        [&_button>p]:text-lg'
				>
					<div>
						<h2>New Releases</h2>
						<button>
							<FaStar />
							<p>Last 30 days</p>
						</button>
						<button>
							<FaFire />
							<p>This week</p>
						</button>
						<button>
							<FaAngleDoubleRight />
							<p>Next week</p>
						</button>
					</div>
					<div>
						<h2>Top</h2>
						<button>
							<FaTrophy />
							<p>Best of the year</p>
						</button>
						<button>
							<FaChartSimple />
							<p>Popular in {year}</p>
						</button>
						<button>
							<FaCrown />
							<p>All time top</p>
						</button>
					</div>
					<div>
						<h2>Genres</h2>
						<button>
							<RiBoxingFill />
							<p>Action</p>
						</button>
						<button>
							<FaChessKnight />
							<p>Strategy</p>
						</button>
						<button>
							<RiSwordFill />
							<p>RPG</p>
						</button>
						<button>
							<FaGun />
							<p>shooter</p>
						</button>
						<button>
							<FaMountain />
							<p>Adventure</p>
						</button>
						<button>
							<FaPuzzlePiece />
							<p>Puzzle</p>
						</button>
						<button>
							<FaFlagCheckered />
							<p>Racing</p>
						</button>
						<button>
							<FaFootballBall />
							<p>Sports</p>
						</button>
					</div>
				</section>
			</aside>
		</div>
	);
}

export default Browse;
