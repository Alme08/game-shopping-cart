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
		<>
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
					<div className='[&_span]:text-autumn_white-50 [&_span]:text-2xl [&_span]:p-2 [&_span]:rounded-lg flex justify-center gap-5 pt-5'>
						<span className='bg-[#FF0000]'>
							<FaYoutube />
						</span>
						<span className='bg-[#4267B2]'>
							<FaFacebookF />
						</span>
						<span className='bg-[#833AB4]'>
							<FaInstagram />
						</span>
						<span className='bg-[#25D366]'>
							<FaWhatsapp />
						</span>
					</div>
				</div>
				<div
					className='flex flex-col gap-5 items-center
                            [&>div]:flex [&>div]:items-center [&>div]:gap-4 [&>div]:text-autumn_white-50/70
                            [&>div>img]:h-12
                            [&_a]:text-autumn_white-50 [&_a]:cursor-pointer'
				>
					<h2>
						trending <span>news</span>
					</h2>
					<div>
						<img src='src\assets\news.jpg' alt='news' />
						<div>
							<a>Lorem ipsum dolor sit amet.</a>
							<p>Action, Adventure.</p>
						</div>
					</div>
					<div>
						<img src='src\assets\news.jpg' alt='news' />
						<div>
							<a>Lorem ipsum dolor sit amet.</a>
							<p>Action, Adventure.</p>
						</div>
					</div>
					<div>
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
                                [&>div]:bg-firmament_blue-900 [&>div]:p-3 [&>div]:rounded-xl [&>div]:flex [&>div]:gap-3 [&>div]:justify-center [&>div]:items-center [&>div>p]:text-lg [&>div>p]:flex [&>div>p]:flex-col [&>div>p]:items-center [&>div>p]:text-autumn_white-50/70 [&_span]:text-autumn_white-50'
					>
						<div>
							<FaGooglePlay className='text-4xl' />
							<p>
								Buy now via <span>Google Play</span>
							</p>
						</div>
						<div>
							<FaApple className='text-4xl' />
							<p>
								Buy now via <span>Apple Store</span>
							</p>
						</div>
						<div>
							<FaSteam className='text-4xl' />
							<p>
								Buy now via <span>Steam</span>
							</p>
						</div>
						<div>
							<FaWindows className='text-4xl' />
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
				<a className='flex gap-5 w-max' href='https://rawg.io/apidocs'>
					<img className='h-5' src='src\assets\rawgfavicon.ico' /> rawg api
				</a>
				<p>Design inspired by: rayhanulislam.com</p>
			</div>
		</>
	);
}

export default Footer;
