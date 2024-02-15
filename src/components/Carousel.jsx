import { useState, useEffect, useCallback } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { FaComputer } from 'react-icons/fa6';
import { FaPlaystation } from 'react-icons/fa';
import { FaXbox } from 'react-icons/fa';

function Carousel({ slides }) {
	const [current, setCurrent] = useState(0);

	const previousSlide = () => {
		setCurrent(prevCurrent =>
			prevCurrent === 0 ? slides.length - 1 : prevCurrent - 1
		);
	};
	const nextSlide = useCallback(() => {
		setCurrent(prevCurrent =>
			prevCurrent === slides.length - 1 ? 0 : prevCurrent + 1
		);
	}, [slides.length]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			nextSlide();
		}, 5000);

		return () => {
			clearInterval(intervalId);
		};
	}, [current, nextSlide]);

	return (
		<div className='overflow-hidden relative h-screen'>
			<div
				className='flex transition ease-out duration-300 h-screen'
				style={{
					transform: `translateX(-${current * 100}%)`,
				}}
			>
				{slides.map((s, index) => {
					return (
						<img
							key={'image' + index}
							className='object-cover min-w-full min-h-full h-full'
							src={s.background_image}
							alt={`slide-${index}`}
						/>
					);
				})}
			</div>
			<div className='absolute bg-firmament_blue-950/50 top-0 h-full w-full z-0' />
			<div className='absolute top-0 h-full w-full justify-between items-center flex text-autumn_white-50 px-10 text-3xl z-10 [&>button]:px-2 [&>button]:from-atomic_orange-700 [&>button]:to-atomic_orange-950 [&>button]:rounded-md'>
				<button className='bg-gradient-to-r' onClick={previousSlide}>
					<IoIosArrowBack />
				</button>
				<div className='text-center text-autumn_white-50 flex flex-col justify-end h-full gap-28'>
					<div className='flex flex-col gap-12'>
						<h2 className='font-modern text-5xl'>{slides[current].name}</h2>
						<div className='flex gap-5 justify-center text-4xl'>
							<FaComputer />
							<FaXbox />
							<FaPlaystation />
						</div>
					</div>

					<div className=' mb-32 flex justify-center items-end gap-5 [&>a]:bg-gradient-to-br [&>a]:px-12 [&>a]:py-2 [&>a]:font-modern [&>a]:rounded-md [&>a]:h-min [&>a]:cursor-pointer'>
						<a className='from-firmament_blue-700 to-firmament_blue-950'>
							Details
						</a>
						<a className='from-atomic_orange-700 to-atomic_orange-950'>
							Buy Now
						</a>
					</div>
				</div>
				<button className='bg-gradient-to-l' onClick={nextSlide}>
					<IoIosArrowForward />
				</button>
			</div>
			<div className='absolute bottom-0 py-4 flex justify-center gap-10 w-full z-10 '>
				{slides.map((slide, index) => {
					return (
						<div
							key={'circle' + index}
							onClick={() => setCurrent(index)}
							className={`transition-all ease-in-out duration-300 rounded-full h-3 cursor-pointer ${
								current === index
									? 'bg-atomic_orange-950 w-5'
									: 'bg-autumn_white-50 w-3'
							}`}
						></div>
					);
				})}
			</div>
		</div>
	);
}

export default Carousel;
