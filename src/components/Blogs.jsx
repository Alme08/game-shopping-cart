import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import BlogCard from './BlogCard';

function Blogs() {
	return (
		<section className='px-20'>
			<h2 className='font-modern text-4xl pb-8'>
				Blogs & <span className='text-atomic_orange-950'>News</span>
			</h2>
			<main
				className='relative flex justify-between items-center text-3xl px-20 
            [&>button]:px-2 [&>button]:from-atomic_orange-700 [&>button]:to-atomic_orange-950 [&>button]:rounded-md [&>button]:absolute [&>button]:z-10'
			>
				<button className='bg-gradient-to-r swiper-button-prev -left-10'>
					<IoIosArrowBack />
				</button>
				<div className='flex gap-10'>
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
				<button className='bg-gradient-to-l swiper-button-next -right-10'>
					<IoIosArrowForward />
				</button>
			</main>
		</section>
	);
}

export default Blogs;
