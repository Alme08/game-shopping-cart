import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
function CarouselPlaceholder() {
	return (
		<div className='h-full bg-[rgba(0,0,0,0.29)]'>
			<div className='absolute top-0 h-full w-full justify-between items-center flex text-autumn_white-50 px-10 text-3xl z-10 [&>button]:px-2 [&>button]:from-atomic_orange-700 [&>button]:to-atomic_orange-950 [&>button]:rounded-md'>
				<button className='bg-gradient-to-r'>
					<IoIosArrowBack />
				</button>
				<button className='bg-gradient-to-l'>
					<IoIosArrowForward />
				</button>
			</div>
			<div className='absolute bottom-0 py-4 flex justify-center gap-10 w-full z-10 '>
				<div
					className={`rounded-full h-3 w-3 cursor-pointer bg-autumn_white-50`}
				/>
				<div
					className={`rounded-full h-3 w-3 cursor-pointer bg-autumn_white-50`}
				/>
				<div
					className={`rounded-full h-3 w-3 cursor-pointer bg-autumn_white-50`}
				/>
			</div>
		</div>
	);
}

export default CarouselPlaceholder;
