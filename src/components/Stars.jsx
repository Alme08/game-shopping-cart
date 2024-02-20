import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

const StarRating = ({ rating, ratings_count }) => {
	const filledStars = Math.floor(rating); // Entire part of the rating
	const hasHalfStar = rating % 1 !== 0; // check for a half star

	const totalStars = Array.from({ length: 5 });

	return (
		<div className='flex gap-3'>
			<div className='flex gap-1'>
				{totalStars.map((_, index) => (
					<span
						key={index}
						className={`text-xl ${
							index < filledStars
								? 'text-atomic_orange-950'
								: hasHalfStar && index === filledStars
								? 'text-atomic_orange-950'
								: 'text-autumn_white-50/80'
						}`}
					>
						{index < filledStars ? (
							<FaStar /> // full star
						) : hasHalfStar && index === filledStars ? (
							<FaStarHalfAlt /> // half star
						) : (
							<FaRegStar /> // empty star
						)}
					</span>
				))}
			</div>
			<p className='text-autumn_white-50/80'>({ratings_count} reviews)</p>
		</div>
	);
};

export default StarRating;

StarRating.propTypes = {
	rating: PropTypes.number,
	ratings_count: PropTypes.number,
};
