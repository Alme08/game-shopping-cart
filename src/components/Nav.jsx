import { CgMenu, CgClose, CgShoppingCart } from 'react-icons/cg';
import { useState } from 'react';

function Nav() {
	const [isActive, setIsActive] = useState(false);

	const handleMenu = () => {
		setIsActive(!isActive);
	};

	const menuModal = (
		<nav className='bg-firmament_blue-950 h-fit w-full py-5 px-8 text-autumn_white-950 absolute'>
			<div className='flex items-center justify-between text-2xl'>
				<p className='text-2xl font-bold tracking-wide'>
					Bit<span className='text-atomic_orange-950'>Hub</span>
				</p>
				<CgClose className='cursor-pointer' onClick={handleMenu} />
			</div>
			<div className='text-2xl flex flex-row-reverse mt-5'>
				<span className='bg-firmament_blue-900 p-3 cursor-pointer rounded-full hover:bg-firmament_blue-800'>
					<CgShoppingCart />
				</span>
			</div>
			<ul className='flex flex-col mt-5 gap-4 text-lg'>
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
				<nav className=' bg-firmament_blue-950 text-autumn_white-950 flex w-full justify-between items-center py-5 px-8 h-fit text-lg'>
					<p className='text-2xl font-bold tracking-wide'>
						Bit<span className='text-atomic_orange-950'>Hub</span>
					</p>
					<ul className='hidden sm:flex gap-10'>
						<li className='hover:text-atomic_orange-950 transition-colors cursor-pointer'>
							Home
						</li>
						<li className='hover:text-atomic_orange-950 transition-colors cursor-pointer'>
							Browse
						</li>
					</ul>
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
