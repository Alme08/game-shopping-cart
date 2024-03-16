import { FaComputer } from 'react-icons/fa6';
import { FaPlaystation, FaXbox } from 'react-icons/fa';
import { BsNintendoSwitch } from 'react-icons/bs';

function GameCard({ game }) {
	let currentSvgs = [];
	return (
		<div className='bg-firmament_blue-900/90 rounded-3xl'>
			<img
				className='aspect-video rounded-t-3xl w-full object-cover'
				src={game.background_image}
				alt={game.slug}
			/>
			<section className='p-5 flex flex-col justify-between gap-3'>
				<div className='flex justify-between text-autumn_white-50/50'>
					<button>Add to card +</button>
					<p>$59.99</p>
				</div>
				<div className='flex gap-3 text-xl'>
					{game.platforms.map(platform => {
						const platformName = platform.platform.name;
						if (platformName.includes('PC') && !currentSvgs.includes('PC')) {
							currentSvgs.push('PC');
							return <FaComputer key={platform.platform.id} />;
						} else if (
							platformName.includes('PlayStation') &&
							!currentSvgs.includes('PlayStation')
						) {
							currentSvgs.push('PlayStation');
							return <FaPlaystation key={platform.platform.id} />;
						} else if (
							platformName.includes('Xbox') &&
							!currentSvgs.includes('Xbox')
						) {
							currentSvgs.push('Xbox');
							return <FaXbox key={platform.platform.id} />;
						} else if (
							platformName.includes('Nintendo') &&
							!currentSvgs.includes('Nintendo')
						) {
							currentSvgs.push('Nintendo');
							return <BsNintendoSwitch key={platform.platform.id} />;
						}
					})}
				</div>
				<h3 className='text-xl font-bold'>{game.name}</h3>
			</section>
		</div>
	);
}

export default GameCard;
