import { format } from 'date-fns';
import { CiCalendar } from 'react-icons/ci';
import { FaLongArrowAltRight } from 'react-icons/fa';

function BlogCard() {
	return (
		<div className='bg-firmament_blue-900 rounded-xl flex flex-col justify-between w-full h-max'>
			<img
				src='src/assets/news.jpg'
				alt='news'
				className='rounded-xl rounded-b-none'
			/>
			<div className='p-3 flex flex-col gap-3'>
				<p className='text-base text-autumn_white-50/80 flex items-center gap-2'>
					<CiCalendar className='text-xl' />{' '}
					{format(new Date(), 'MMM dd, yyyy')}
				</p>
				<h3 className='text-xl font-bold text-atomic_orange-950'>
					Up coming team of the year game overview by bithub
				</h3>
				<p className='text-base text-autumn_white-50/80'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
					deserunt quo natus officiis sequi architecto...
				</p>
				<a
					href='#'
					className='text-xl flex items-center gap-2 px-4 py-1 bg-gradient-to-br from-atomic_orange-700 to-atomic_orange-950 w-max rounded-md uppercase'
				>
					continue <FaLongArrowAltRight />
				</a>
			</div>
		</div>
	);
}

export default BlogCard;
