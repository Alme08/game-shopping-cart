import PropTypes from 'prop-types';
import Card from './Card';
import Button from './Button';
function BestSeller({ games }) {
	return (
		<section className='px-20'>
			<h2 className='font-modern text-4xl pb-8'>
				Best <span className='text-atomic_orange-950'>Seller</span>
			</h2>
			<section className='flex flex-col items-center gap-8'>
				<div className='grid grid-flow-row grid-cols-3 gap-[60px] px-20'>
					{games.map(
						(game, index) => index !== 0 && <Card key={game.id} game={game} />
					)}
				</div>
				<Button text={'view all'} primary={true} to={`/browse/popular-year`} />
			</section>
		</section>
	);
}

export default BestSeller;

BestSeller.propTypes = {
	games: PropTypes.array,
};
