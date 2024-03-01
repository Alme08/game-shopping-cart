import Button from '../Button';
import { FaPlay } from 'react-icons/fa';

function StreamPlaceholder() {
	return (
		<section className='px-20 w-full'>
			<div className=' aspect-video bg-autumn_white-50/30 w-full rounded-xl flex flex-col items-center justify-between'>
				<span />
				<button className='bg-autumn_white-50 rounded-full relative h-16 w-16 flex'>
					<FaPlay className='text-firmament_blue-950 pl-1 text-xl absolute top-2/4 -translate-y-1/2 left-2/4 -translate-x-1/2' />
				</button>
				<Button text={'watch live streaming'} primary={true} />
			</div>
		</section>
	);
}

export default StreamPlaceholder;
