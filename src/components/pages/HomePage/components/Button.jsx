import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Button({ text, primary, fontSize, to }) {
	return (
		<>
			<Link
				to={to}
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
	fontSize: PropTypes.number,
	to: PropTypes.string,
};

Button.defaultProps = {
	text: 'lorem ipsum',
	primary: false,
	fontSize: 3,
	to: '/',
};
export default Button;
