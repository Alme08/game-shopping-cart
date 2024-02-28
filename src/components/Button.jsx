import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Button({ text, primary, fontSize }) {
	return (
		<>
			<Link
				to='#'
				className={`bg-gradient-to-br py-2 px-10 font-modern rounded-md cursor-pointer text-${fontSize}xl ${
					primary
						? 'from-atomic_orange-700 to-atomic_orange-950'
						: 'from-firmament_blue-700 to-firmament_blue-950'
				}`}
			>
				{text}
			</Link>
		</>
	);
}

Button.propTypes = {
	text: PropTypes.string,
	primary: PropTypes.bool,
	px: PropTypes.number,
	py: PropTypes.number,
	fontSize: PropTypes.number,
};

Button.defaultProps = {
	text: 'lorem ipsum',
	primary: false,
	fontSize: 3,
};
export default Button;
