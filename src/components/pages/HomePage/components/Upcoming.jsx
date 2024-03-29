import Card from './Card';
import PropTypes from 'prop-types';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';

function Upcoming({ games }) {
	return (
		<section className='px-20'>
			<h2 className='font-modern text-4xl pb-8'>
				Up<span className='text-atomic_orange-950'>coming</span>
			</h2>
			<div
				className='relative flex justify-between items-center text-3xl px-20 
            [&>button]:px-2 [&>button]:from-atomic_orange-700 [&>button]:to-atomic_orange-950 [&>button]:rounded-md [&>button]:absolute [&>button]:z-10'
			>
				<button className='bg-gradient-to-r swiper-button-prev -left-10'>
					<IoIosArrowBack />
				</button>
				<Swiper
					loop={true}
					modules={[Autoplay, Navigation]}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
					slidesPerView={3}
					spaceBetween={60}
					centeredSlides={true}
					// breakpoints={{
					// 	'@0.00': {
					// 		slidesPerView: 1,
					// 		spaceBetween: 25,
					// 	},
					// 	'@0.50': {
					// 		slidesPerView: 1.25,
					// 		spaceBetween: 25,
					// 	},
					// 	'@1.00': {
					// 		slidesPerView: 2,
					// 		spaceBetween: 25,
					// 	},
					// 	'@1.25': {
					// 		slidesPerView: 2.5,
					// 		spaceBetween: 20,
					// 	},
					// 	'@1.50': {
					// 		slidesPerView: 3,
					// 		spaceBetween: 0,
					// 	},
					// 	'@1.75': {
					// 		slidesPerView: 3,
					// 		spaceBetween: 0,
					// 	},
					// }}
				>
					<div>
						{games.map(game => {
							return (
								<SwiperSlide key={game.id}>
									<Card game={game} />
								</SwiperSlide>
							);
						})}
					</div>
				</Swiper>
				<button className='bg-gradient-to-l swiper-button-next -right-10'>
					<IoIosArrowForward />
				</button>
			</div>
		</section>
	);
}

Upcoming.propTypes = {
	games: PropTypes.array,
};

export default Upcoming;
