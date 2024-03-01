import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

function UpcomingPlaceholder() {
	return (
		<section className='px-20'>
			<h2 className='font-modern text-4xl pb-8'>
				Up<span className='text-atomic_orange-950'>coming</span>
			</h2>
			<div
				className='relative flex items-center text-3xl px-20 
            [&>button]:px-2 [&>button]:from-atomic_orange-700 [&>button]:to-atomic_orange-950 [&>button]:rounded-md [&>button]:absolute [&>button]:z-10'
			>
				<button className='bg-gradient-to-r swiper-button-prev -left-10'>
					<IoIosArrowBack />
				</button>
				<div className='flex w-full justify-between'>
					<div className='p-3 bg-autumn_white-50/30 rounded-xl w-[23rem] h-[28rem]' />
					<div className='p-3 bg-autumn_white-50/30 rounded-xl w-[23rem] h-[28rem]' />
					<div className='p-3 bg-autumn_white-50/30 rounded-xl w-[23rem] h-[28rem]' />
				</div>
				<button className='bg-gradient-to-l swiper-button-next -right-10'>
					<IoIosArrowForward />
				</button>
			</div>
		</section>
	);
}

export default UpcomingPlaceholder;
