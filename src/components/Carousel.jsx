import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { FaComputer } from 'react-icons/fa6';
import { FaPlaystation, FaXbox } from 'react-icons/fa';
import Button from './Button';
import PropTypes from 'prop-types';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

function Carousel({ slides }) {
	const [current, setCurrent] = useState(0);
	let currentSvgs = [];

	return (
		<section className='h-screen'>
			<Swiper
				className='h-screen'
				slidesPerView={1}
				loop={true}
				modules={[Autoplay, Navigation, Pagination]}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				pagination={{
					el: '.swiper-pagination',
					horizontalClass: '.swiper-pagination',
					clickable: true,
				}}
				onSlideChange={swiper => setCurrent(swiper.realIndex)}
			>
				{slides.map((s, index) => {
					return (
						<SwiperSlide key={s.id} className='h-full'>
							<img
								className='object-cover min-w-full min-h-full h-full opacity-60'
								src={s.background_image}
								alt={`slide-${index}`}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div className='absolute top-0 h-full w-full justify-between items-center flex text-autumn_white-50 px-10 text-3xl z-10 [&>button]:px-2 [&>button]:from-atomic_orange-700 [&>button]:to-atomic_orange-950 [&>button]:rounded-md'>
				<button className='bg-gradient-to-r swiper-button-prev'>
					<IoIosArrowBack />
				</button>
				<div className='text-center text-autumn_white-50 flex flex-col justify-end h-full gap-28'>
					<div className='flex flex-col gap-12'>
						<h2 className='font-modern text-5xl'>{slides[current].name}</h2>
						<div className='flex gap-5 justify-center text-4xl'>
							{slides[current].platforms.map(platform => {
								if (
									platform.platform.name.includes('PC') &&
									!currentSvgs.includes('PC')
								) {
									currentSvgs.push('PC');
									return <FaComputer key={platform.platform.id} />;
								} else if (
									platform.platform.name.includes('PlayStation') &&
									!currentSvgs.includes('PlayStation')
								) {
									currentSvgs.push('PlayStation');
									return <FaPlaystation key={platform.platform.id} />;
								} else if (
									platform.platform.name.includes('Xbox') &&
									!currentSvgs.includes('Xbox')
								) {
									currentSvgs.push('Xbox');
									return <FaXbox key={platform.platform.id} />;
								}
							})}
						</div>
					</div>

					<div className='mb-32 flex justify-center items-end gap-5'>
						<Button text='details' />
						<Button text='Buy Now' primary={true} />
					</div>
				</div>
				<button className='bg-gradient-to-l swiper-button-next'>
					<IoIosArrowForward />
				</button>
			</div>
			<div
				className='swiper-pagination absolute bottom-0 py-4 flex justify-center gap-10 w-full z-10
			 [&>*]:bg-autumn_white-50
			  [&>*]:h-3
			   [&>*]:w-3
			   [&>*]:rounded-full
			   [&>*]:opacity-100
			   [&>*]:bottom-0
			   [&>.swiper-pagination-bullet-active]:bg-atomic_orange-950
			   [&>.swiper-pagination-bullet-active]:w-5'
			></div>
		</section>
	);
}

Carousel.propTypes = {
	slides: PropTypes.array,
};
export default Carousel;
