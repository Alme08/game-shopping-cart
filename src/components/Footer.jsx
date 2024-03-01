import {
	FaGooglePlay,
	FaApple,
	FaSteam,
	FaWindows,
	FaYoutube,
	FaFacebookF,
	FaInstagram,
	FaWhatsapp,
	FaGithub,
} from 'react-icons/fa';

function Footer() {
	return (
		<footer>
			<section
				className='p-20 bg-firmament_blue-800 text-autumn_white-50 flex justify-between gap-10
                            [&>div]:w-1/3
                            [&_h2]:uppercase [&_h2]:text-4xl [&_h2]:font-bold
                            [&_span]:text-atomic_orange-950'
			>
				<div className='text-center'>
					<h2 className='pb-5'>
						about <span>bithub</span>
					</h2>
					<p className='text-autumn_white-50/75'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
						praesentium sed qui fugit amet fuga iste pariatur sit et, dolore
						corrupti maiores rerum, deleniti consequatur unde optio harum vero
						porro.
					</p>
					<div className='[&_a]:text-autumn_white-50 [&_a]:text-2xl [&_a]:p-2 [&_a]:rounded-lg [&_a]:cursor-pointer [&_a]:transition-colors flex justify-center gap-5 pt-5'>
						<a className='bg-[rgb(255,0,0)] hover:bg-[rgb(255,0,0,0.8)]'>
							<FaYoutube />
						</a>
						<a className='bg-[rgb(66,103,178)] hover:bg-[rgb(66,103,178,0.8)]'>
							<FaFacebookF />
						</a>
						<a className='bg-[rgb(131,58,180)] hover:bg-[rgb(131,58,180,0.8)]'>
							<FaInstagram />
						</a>
						<a className='bg-[rgb(37,211,102)] hover:bg-[rgb(37,211,102,0.8)]'>
							<FaWhatsapp />
						</a>
					</div>
				</div>
				<div
					className='flex flex-col gap-5 items-center
                            [&>div]:flex [&>div]:items-center [&>div]:gap-4 [&>div]:text-autumn_white-50/70
							[&>div]:p-3 [&>div]:rounded-xl [&>div]:transition-colors [&>div]:cursor-pointer
                            [&>div>img]:h-12
                            [&_a]:text-autumn_white-50 [&_a]:cursor-pointer'
				>
					<h2>
						trending <span>news</span>
					</h2>
					<div className='hover:bg-firmament_blue-900'>
						<img src='src\assets\news.jpg' alt='news' />
						<div>
							<a>Lorem ipsum dolor sit amet.</a>
							<p>Action, Adventure.</p>
						</div>
					</div>
					<div className='hover:bg-firmament_blue-900'>
						<img src='src\assets\news.jpg' alt='news' />
						<div>
							<a>Lorem ipsum dolor sit amet.</a>
							<p>Action, Adventure.</p>
						</div>
					</div>
					<div className='hover:bg-firmament_blue-900'>
						<img src='src\assets\news.jpg' alt='news' />
						<div>
							<a>Lorem ipsum dolor sit amet.</a>
							<p>Action, Adventure.</p>
						</div>
					</div>
				</div>
				<div>
					<h2 className='pb-5'>
						apps & <span>platform</span>
					</h2>
					<div
						className='grid grid-cols-2 gap-x-4 gap-y-2

                                [&>div]:bg-firmament_blue-900 [&>div]:p-3 [&>div]:rounded-xl [&>div]:flex [&>div]:gap-3 [&>div]:justify-between [&>div]:items-center [&>div]:transition-colors
								 
								[&>div>p]:text-lg [&>div>p]:flex [&>div>p]:flex-col [&>div>p]:items-center [&>div>p]:text-autumn_white-50/70 [&>div>p]:m-auto 
								[&_span]:text-autumn_white-50'
					>
						<div className='hover:bg-firmament_blue-950'>
							<FaGooglePlay className='text-4xl m-auto' />
							<p>
								Buy now via <span>Google Play</span>
							</p>
						</div>
						<div className='hover:bg-firmament_blue-950'>
							<FaApple className='text-4xl m-auto' />
							<p>
								Buy now via <span>Apple Store</span>
							</p>
						</div>
						<div className='hover:bg-firmament_blue-950'>
							<FaSteam className='text-4xl m-auto' />
							<p>
								Buy now via <span>Steam</span>
							</p>
						</div>
						<div className='hover:bg-firmament_blue-950'>
							<FaWindows className='text-4xl m-auto' />
							<p>
								Download via <span>WinStore</span>
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className='px-20 py-5 bg-[#000000] text-autumn_white-50 text-center uppercase flex flex-col gap-5 items-center'>
				<a
					href='https://github.com/Alme08/game-shopping-cart'
					className='flex items-center gap-3 w-max'
				>
					<FaGithub className='text-xl' /> Alme08
				</a>
				<a className='flex gap-3 w-max' href='https://rawg.io/apidocs'>
					<img className='h-5' src='src\assets\rawgfavicon.ico' /> rawg api
				</a>
				<p>
					Design inspired by:{' '}
					<a href='https://rayhanulislam.com' className='underline'>
						rayhanulislam.com
					</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
