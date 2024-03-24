import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Nav from '../../Nav';
import { links } from './links';

function Browse() {
	const [hideTop, setHideTop] = useState(false);

	let currentScrollTop = window.scrollY;
	useEffect(() => {
		const handleScroll = () => {
			let lastScrollTop = window.scrollY;
			setHideTop(currentScrollTop >= lastScrollTop ? true : false);
			currentScrollTop = lastScrollTop;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`relative bg-firmament_blue-950 text-autumn_white-50 pt-20 transition-all duration-300 delay-75 ease-in-out h-full
			${hideTop ? 'pt-20' : ''}`}
		>
			<Nav bgActive={true} />
			<aside
				style={{ scrollbarWidth: 'none' }}
				className={`fixed top-0 bottom-0 overflow-y-scroll flex flex-col gap-10 bg-firmament_blue-950 text-autumn_white-50 w-2/12 px-7 transition-all duration-300 delay-75 ease-in-out
				${hideTop ? 'pt-20' : ''}`}
			>
				<section
					className=' flex flex-col gap-8 
								[&_div]:flex [&_div]:flex-col 
								[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:py-2
								[&_a]:flex [&_a]:p-4 [&_a]:gap-3 [&_a]:items-center [&_a]:text-xl [&_a]:rounded-xl
								[&_a>p]:text-lg'
				>
					<div>
						{links.map((link, index) => (
							<div key={index}>
								{Array.isArray(link) ? (
									<>
										{link.map((subLink, index) => (
											<NavLink
												to={`${subLink.slug}`}
												className={({ isActive }) =>
													isActive
														? 'bg-atomic_orange-950 text-firmament_blue-950 hover:bg-atomic_orange-950/90'
														: 'hover:bg-autumn_white-50/10'
												}
												key={index}
											>
												<subLink.svg />
												<p>{subLink.text}</p>
											</NavLink>
										))}
									</>
								) : (
									<h2>{link}</h2>
								)}
							</div>
						))}
					</div>
				</section>
			</aside>
			<div className='w-10/12 ml-[16.666667%] pr-7 bg-firmament_blue-950 min-h-screen h-full'>
				<Outlet />
			</div>
		</div>
	);
}

export default Browse;
