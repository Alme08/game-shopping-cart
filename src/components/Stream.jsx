import Button from './Button';
import { FaPlay } from 'react-icons/fa';

import PropTypes from 'prop-types';

function Stream({ game }) {
	return (
		<section className='px-20 w-full relative '>
			<img
				className='opacity-60 rounded-xl'
				src={game.short_screenshots[1].image}
				alt=''
			/>
			<div className='absolute top-0 left-2/4 -translate-x-1/2 flex flex-col justify-between items-center h-full'>
				<div className='flex flex-col items-center pt-10'>
					<h3 className='font-modern text-6xl'>
						<i>{game.name}</i>
					</h3>
					<p className='uppercase font-modern text-2xl'>
						<i>Stream On!</i>
					</p>
				</div>
				<button className='bg-autumn_white-50 rounded-full relative h-16 w-16 flex'>
					<FaPlay className='text-firmament_blue-950 pl-1 text-xl absolute top-2/4 -translate-y-1/2 left-2/4 -translate-x-1/2' />
				</button>
				<Button text={'watch live streaming'} primary={true} />
			</div>
		</section>
	);
}

export default Stream;

Stream.propTypes = {
	game: PropTypes.object,
};
