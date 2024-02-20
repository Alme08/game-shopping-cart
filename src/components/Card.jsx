function Card({ game }) {
	const { background_image, slug, genres, name } = game;
	return (
		<div className='p-2 bg-firmament_blue-900'>
			<img src={background_image} alt={slug} className='aspect-video' />
			<p>Genre:</p>
			<h3>{name}</h3>
			<p>$60.00</p>
			<div>
				<p>button</p>
				<p>button</p>
			</div>
		</div>
	);
}

export default Card;
