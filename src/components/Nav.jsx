import { CgMenu, CgClose, CgShoppingCart } from 'react-icons/cg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	const [isActive, setIsActive] = useState(false);
	const [scrolling, setScrolling] = useState(false);
	//hover active and hover values are separated to manage the delay animation accurately
	const [isHoverActive, setIsHoverActive] = useState(false);
	const [hoverValues, setHoverValues] = useState({
		left: null,
		top: null,
		width: null,
		height: null,
	});

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleMenu = () => {
		setIsActive(!isActive);
	};

	const mouseEnter = ({ target }) => {
		const { left, top, width, height } = target.getBoundingClientRect();
		setHoverValues({
			left: left,
			top: top,
			width: width,
			height: height,
		});
		setIsHoverActive(true);
	};
	const mouseLeave = () => {
		setIsHoverActive(false);
	};

	const menuModal = (
		<nav className='fixed top-0 bg-firmament_blue-950 h-fit w-full py-3 px-9 text-autumn_white-950'>
			<div className='flex items-center justify-between text-2xl'>
				<Link
					to='/'
					className='text-2xl font-bold tracking-wide cursor-pointer font-modern'
				>
					Bit<span className='text-atomic_orange-950'>Hub</span>
				</Link>
				<CgClose className='cursor-pointer' onClick={handleMenu} />
			</div>
			<div className='text-2xl flex flex-row-reverse mt-5'>
				<span className='bg-firmament_blue-900 p-3 cursor-pointer rounded-full hover:bg-firmament_blue-800'>
					<CgShoppingCart />
				</span>
			</div>
			<ul className='flex flex-col my-5 gap-4 text-lg'>
				<Link
					to='/'
					className='bg-firmament_blue-900 py-3 px-5 rounded-xl cursor-pointer hover:bg-firmament_blue-800'
				>
					Home
				</Link>
				<Link
					to='browse'
					className='bg-firmament_blue-900 py-3 px-5 rounded-xl cursor-pointer hover:bg-firmament_blue-800'
				>
					Browse
				</Link>
			</ul>
		</nav>
	);
	return (
		<>
			{isActive ? (
				menuModal
			) : (
				<nav
					className={`fixed top-0 flex w-full justify-between items-center py-3 px-9 h-fit text-lg transition-colors z-20 text-autumn_white-50
				${scrolling && ' bg-firmament_blue-950'}`}
				>
					<div className='sm:flex sm:flex-grow sm:basis-0'>
						<Link
							to='/'
							className='text-2xl font-bold tracking-wide cursor-pointer font-modern	'
						>
							Bit<span className='text-atomic_orange-950'>Hub</span>
						</Link>
					</div>

					<ul
						className='z-20 hidden sm:flex [&>li]:cursor-pointer [&>*]:px-6 [&>*]:py-2 
					[&>*]:transition-colors [&>*]:tracking-wider'
					>
						<Link to='/' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
							Home
						</Link>
						<Link
							to='browse'
							onMouseEnter={mouseEnter}
							onMouseLeave={mouseLeave}
						>
							Browse
						</Link>
					</ul>

					<div className='z-10 sm:flex sm:flex-grow sm:basis-0 sm:justify-end'>
						<span
							className={`hidden sm:block p-3 rounded-full backdrop-blur-lg  transition-colors duration-300 delay-75 ease-in-out cursor-pointer
						${
							scrolling
								? 'hover:bg-autumn_white-50/10'
								: 'hover:bg-firmament_blue-950/10'
						}`}
						>
							<CgShoppingCart className='text-2xl' />
						</span>
					</div>

					<div
						id='menu-backdrop'
						className={` absolute  backdrop-blur-lg rounded transition-all duration-300 delay-75 ease-in-out
						${isHoverActive ? 'opacity-10 visible' : 'opacity-0 invisible'}
						${scrolling ? 'bg-autumn_white-50' : 'bg-firmament_blue-950'}`}
						style={{
							width: `${hoverValues.width}px`,
							height: `${hoverValues.height}px`,
							left: `${hoverValues.left}px`,
							top: `${hoverValues.top}px`,
						}}
					/>
					<CgMenu
						className='sm:hidden cursor-pointer text-2xl'
						onClick={handleMenu}
					/>
				</nav>
			)}
		</>
	);
}

export default Nav;
