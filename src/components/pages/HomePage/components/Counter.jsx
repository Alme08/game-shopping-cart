import { useEffect, useState } from 'react';
import Button from './Button';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

function Counter({ game }) {
	const { background_image, slug, name, released, id } = game[0];

	const [remainingTime, setRemainingTime] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const timer = setInterval(() => {
			const currentDate = new Date();
			const releaseDate = new Date(released);
			const newRemainingTime = releaseDate.getTime() - currentDate.getTime();

			const newDays = Math.floor(newRemainingTime / (1000 * 60 * 60 * 24));
			const newHours = Math.floor(
				(newRemainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const newMinutes = Math.floor(
				(newRemainingTime % (1000 * 60 * 60)) / (1000 * 60)
			);
			const newSeconds = Math.floor((newRemainingTime % (1000 * 60)) / 1000);

			setRemainingTime({
				days: newDays,
				hours: newHours,
				minutes: newMinutes,
				seconds: newSeconds,
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [released]);

	return (
		<section className={`h-[40rem] overflow-hidden relative`}>
			<img src={background_image} alt={slug} className='w-full' />
			<div className='absolute px-20 py-10 z-10 top-0 w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.15)] flex flex-col gap-10'>
				<h3 className='uppercase text-atomic_orange-950 font-bold text-2xl font-modern'>
					up-coming!
				</h3>
				<p className='text-5xl font-bold'>{name}</p>
				<p className='w-2/5 text-lg'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
					deserunt beatae commodi ipsam, deleniti sapiente quaerat possimus
					voluptates sed ipsa labore ex quo repudiandae voluptatem aliquam id
					nesciunt laudantium unde.
				</p>
				<div className='flex gap-5'>
					<Button text={'details'} to={`/browse/game/${id}`} />
					<Button text={'pre-order'} primary={true} />
				</div>
				<div className='flex gap-10 [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div>span]:bg-atomic_orange-950 [&>div>span]:w-16 [&>div>span]:h-16 [&>div>span]:flex [&>div>span]:justify-center [&>div>span]:items-center [&>div>span]:text-5xl [&>div>span]:font-bold [&>div>span]:rounded-md [&>div>p]:font-3xl'>
					<div>
						<span>{remainingTime.days}</span>
						<p>Days</p>
					</div>
					<div>
						<span>{remainingTime.hours}</span>
						<p>Hours</p>
					</div>
					<div>
						<span>{remainingTime.minutes}</span>
						<p>Minutes</p>
					</div>
					<div>
						<span>{remainingTime.seconds}</span>
						<p>Seconds</p>
					</div>
				</div>
				<p className='font-bold text-2xl pl-10'>
					Release on{' '}
					<span className='text-atomic_orange-950'>
						{format(released, 'dd MMM yyyy')}
					</span>
				</p>
			</div>
		</section>
	);
}

Counter.propTypes = {
	game: PropTypes.array,
};

export default Counter;
