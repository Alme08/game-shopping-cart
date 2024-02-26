import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Button({ text, primary, px, py, fontSize }) {
	return (
		<>
			<Link
				to='#'
				className={`bg-gradient-to-br px-${px} py-${py} font-modern rounded-md cursor-pointer text-${fontSize}xl ${
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
	px: 12,
	py: 2,
	fontSize: 3,
};
export default Button;
