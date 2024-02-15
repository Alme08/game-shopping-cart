import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div className='h-screen bg-firmament_blue-950 text-autumn_white-50 flex flex-col items-center justify-center text-2xl gap-20'>
			<div className='flex items-center justify-center'>
				<h1 className='text-[10rem] font-extrabold text-firmament_blue-900'>
					404
				</h1>
				<h2 className='text-6xl font-extrabold absolute'>Oops!</h2>
			</div>
			<div className='flex flex-col items-center'>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i className='text-autumn_white-50/40'>
						{error.statusText || error.message}
					</i>
				</p>
			</div>
			<Link
				to='/'
				className='border-atomic_orange-950 border-4 text-atomic_orange-950 px-6 py-2 rounded-lg shadow-lg hover:bg-atomic_orange-950 hover:text-firmament_blue-950 transition-colors duration-300'
			>
				Back to home
			</Link>
		</div>
	);
}
