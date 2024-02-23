import PropTypes from 'prop-types';
import { FaYoutube, FaFacebookF, FaTwitch } from 'react-icons/fa';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import StarRating from './Stars';

function Reviews({ game }) {
	return (
		<section>
			<h2 className='font-modern text-4xl pb-8 px-20'>
				review by <span className='text-atomic_orange-950'>players</span>
			</h2>
			<section className=' bg-firmament_blue-900 w-full px-20 py-8 flex justify-between items-center gap-10'>
				<div className='flex flex-col items-center gap-3 w-1/3'>
					<img className='w-4/5' src='src\assets\gamer.svg' alt='' />
					<div className='text-center'>
						<p className='text-2xl'>The Game Theorists</p>
						<p className='text-base'>Professional Gamer</p>
					</div>
					<div className='flex text-xl gap-5 [&>button]:p-2 [&>button]:rounded-md'>
						<button className='bg-[#FF0000]'>
							<FaYoutube />
						</button>
						<button className='bg-[#4267B2]'>
							<FaFacebookF />
						</button>
						<button className='bg-[#6441a5]'>
							<FaTwitch />
						</button>
					</div>
				</div>
				<div className='flex flex-col items-center text-center w-1/3 gap-5'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Laudantium, rerum, quibusdam atque veritatis voluptates dolores
						voluptas pariatur repellendus maxime, ratione sed eveniet
						voluptatibus corrupti. Eius praesentium alias laborum labore ad!
					</p>
					<StarRating rating={game.rating} />
				</div>
				<div className='w-1/3 text-center'>
					<img
						className='aspect-video rounded-lg pb-2'
						src={game.background_image}
						alt=''
					/>
					<p className='text-xl'>{game.name}</p>
				</div>
			</section>
			<div className=' pt-4 w-full flex justify-center gap-5 text-3xl [&>button]:px-2 [&>button]:from-atomic_orange-700 [&>button]:to-atomic_orange-950 [&>button]:rounded-md'>
				<button className='bg-gradient-to-r swiper-button-prev'>
					<IoIosArrowBack />
				</button>
				<button className='bg-gradient-to-l swiper-button-next'>
					<IoIosArrowForward />
				</button>
			</div>
		</section>
	);
}

export default Reviews;

Reviews.propTypes = {
	game: PropTypes.object,
};
