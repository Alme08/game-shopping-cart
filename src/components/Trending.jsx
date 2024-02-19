import Button from './Button';
import PropTypes from 'prop-types';
import StarRating from './Stars';

function Trending({ game }) {
	const { name, background_image, rating, ratings_count, genres } = game[0];
	return (
		<section className=''>
			<div className='flex items-center justify-between pb-10'>
				<h2 className='font-modern text-4xl'>
					Trending <span className='text-atomic_orange-950'>Now!</span>
				</h2>
				<Button text={'View all'} primary={true} />
			</div>
			<div className='flex gap-5'>
				<div className='aspect-video w-full relative overflow-hidden'>
					<img
						src={background_image}
						className='rounded-lg opacity-90'
						alt='Background Image'
					/>
					<div className='absolute -rotate-45 bg-autumn_white-50 z-10 top-5 md:top-10 -left-24 md:-left-28 scale-75'>
						<p className='px-20  py-1 font-modern text-demonic_red-950 text-4xl'>
							50% off!
						</p>
					</div>
				</div>
				<div className='w-full flex flex-col justify-between py-3'>
					<div className='flex flex-col gap-5'>
						<p className='text-xl'>
							<span className='text-atomic_orange-950'>Genre: </span>
							{genres.map((genre, index) => {
								return index === genres.length - 1
									? `${genre.name}.`
									: `${genre.name}, `;
							})}
						</p>
						<p className='text-5xl font-bold'>{name}</p>
						<StarRating rating={rating} ratings_count={ratings_count} />
						<p className='text-4xl'>
							<span className='text-atomic_orange-950 text-base pr-4'>
								$60.00
							</span>
							$30.00
						</p>
					</div>
					<div className='flex justify-center gap-10'>
						<Button text={'Details'} />
						<Button text={'Buy now'} primary={true} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Trending;

Trending.propTypes = {
	game: PropTypes.array,
};
