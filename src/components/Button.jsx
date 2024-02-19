import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Button({ text, primary }) {
	return (
		<>
			<Link
				to='#'
				className={`bg-gradient-to-br px-12 py-2 font-modern rounded-md cursor-pointer text-3xl ${
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
};

Button.defaultProps = {
	text: 'lorem ipsum',
	primary: false,
};
export default Button;
