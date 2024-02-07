import { CgMenu, CgClose, CgShoppingCart } from 'react-icons/cg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	const [isActive, setIsActive] = useState(false);
	const [hoverValues, setHoverValues] = useState({
		left: null,
		top: null,
		width: null,
		height: null,
		active: false,
	});

	const handleMenu = () => {
		setIsActive(!isActive);
	};

	const mouseEnter = ({ target }) => {
		const { left, top, width, height } = target.getBoundingClientRect();
		console.log(left, top, width, height);
		setHoverValues({
			left: left,
			top: top,
			width: width,
			height: height,
			active: true,
		});
	};
	const mouseLeave = () => {
		setHoverValues({
			active: false,
			...setHoverValues,
		});
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
				<li className='bg-firmament_blue-900 py-3 px-5 rounded-xl cursor-pointer hover:bg-firmament_blue-800'>
					Home
				</li>
				<li className='bg-firmament_blue-900 py-3 px-5 rounded-xl cursor-pointer hover:bg-firmament_blue-800'>
					Browse
				</li>
			</ul>
		</nav>
	);
	return (
		<>
			{isActive ? (
				menuModal
			) : (
				<nav className='fixed top-0 text-firmament_blue-950  flex w-full justify-between items-center py-3 px-9 h-fit text-lg'>
					<div className='sm:flex sm:flex-grow sm:basis-0'>
						<Link
							to='/'
							className='text-2xl font-bold tracking-wide cursor-pointer font-modern	'
						>
							Bit<span className='text-atomic_orange-950'>Hub</span>
						</Link>
					</div>

					<ul
						className='hidden sm:flex [&>li]:cursor-pointer [&>li]:px-6 [&>li]:py-2 
					[&>li]:transition-colors [&>li]:tracking-wider'
					>
						<li
							className=''
							onMouseEnter={mouseEnter}
							onMouseLeave={mouseLeave}
						>
							Home
						</li>
						<li
							className=''
							onMouseEnter={mouseEnter}
							onMouseLeave={mouseLeave}
						>
							Browse
						</li>
						<li onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
							blablablablablablabla
						</li>
					</ul>

					<div className='sm:flex sm:flex-grow sm:basis-0 sm:justify-end'>
						<span className='hidden sm:block p-3 rounded-full backdrop-blur-lg hover:bg-firmament_blue-950/10 transition-colors duration-300 delay-75 ease-in-out cursor-pointer'>
							<CgShoppingCart className='text-2xl' />
						</span>
					</div>

					<div
						id='menu-backdrop'
						className={`-z-10 absolute bg-firmament_blue-950 backdrop-blur-lg rounded transition-all duration-300 delay-75 ease-in-out 
						${hoverValues.active === true ? 'opacity-10 visible' : 'opacity-0 invisible'}`}
						style={{
							width: `${hoverValues.width}px`,
							height: `${hoverValues.height}px`,
							top: `${hoverValues.top}px`,
							left: `${hoverValues.left}px`,
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
