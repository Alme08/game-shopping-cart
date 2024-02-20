import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Card({ game }) {
	const { background_image, slug, genres, name } = game;
	return (
		<div className='p-3 bg-firmament_blue-900 rounded-xl flex flex-col justify-between w-[23rem] h-[28rem]'>
			<div className='flex flex-col gap-2'>
				<img
					src={background_image}
					alt={slug}
					className='aspect-video rounded-xl'
				/>
				<p className='text-base text-autumn_white-50/80'>
					<span className='text-atomic_orange-950'>Genre: </span>
					{genres.map((genre, index) => {
						return index === genres.length - 1
							? `${genre.name}.`
							: `${genre.name}, `;
					})}
				</p>
				<h3 className='text-xl font-bold'>{name}</h3>
				<p className='text-sm text-autumn_white-50/80'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
					deserunt quo natus officiis sequi architecto...
				</p>
			</div>
			<div className='flex flex-col gap-3'>
				<p className='text-2xl font-bold'>
					<span className='text-atomic_orange-950 text-base pr-2'>$60.00</span>
					$30.00
				</p>

				<div className='flex gap-5 text-lg [&>*]:px-10 [&>*]:py-1 [&>*]:rounded-xl [&>*]:uppercase'>
					<Link className='border-atomic_orange-950 border-2 hover:shadow-custom hover:shadow-atomic_orange-950'>
						details
					</Link>
					<Link className='bg-atomic_orange-950 border-[3px] border-atomic_orange-950	hover:shadow-custom'>
						pre-order
					</Link>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	game: PropTypes.object,
};

export default Card;
