import Button from '../Button';
function TrendingPlaceholder() {
	return (
		<section className='px-20'>
			<div className='flex items-center justify-between pb-8'>
				<h2 className='font-modern text-4xl'>
					Trending <span className='text-atomic_orange-950'>Now!</span>
				</h2>
				<Button text={'View all'} primary={true} />
			</div>
			<div className='flex gap-5'>
				<div className='aspect-video w-full rounded-lg bg-autumn_white-50/30' />
				<div className='w-full flex flex-col justify-between py-3'>
					<div className='flex flex-col gap-5'>
						<span className='h-7 w-40 bg-autumn_white-50/30 rounded-lg' />
						<span className='h-14 w-60 bg-autumn_white-50/30 rounded-lg' />
						<span className='h-7 w-36 bg-autumn_white-50/30 rounded-lg' />
						<span className='h-10 w-24 bg-autumn_white-50/30 rounded-lg' />
					</div>
					<div className='flex justify-center gap-10'>
						<Button text={'Details'} />
						<Button text={'Buy now'} primary={true} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default TrendingPlaceholder;
