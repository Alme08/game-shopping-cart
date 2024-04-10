import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from '../../../Nav';
import { IoMdArrowRoundBack } from 'react-icons/io';

function GamePage() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	const [data, setData] = useState();
	let { id } = useParams();
	let navigate = useNavigate();

	useEffect(() => {
		const controller = new AbortController();
		const { signal } = controller;
		const getData = async () => {
			try {
				setLoading(true);
				const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

				const response = await fetch(
					`${VITE_API_URL}games/${id}?key=${VITE_API_KEY}`,
					{
						signal,
					}
				);

				if (!response.ok) {
					throw new Error(`HTTP error: The status is ${response.status}`);
				}

				let data = await response.json();
				setData(data);
				setError(null);
				setLoading(false);
			} catch (error) {
				if (error.name !== 'AbortError') {
					setError(error.message);
					setData(null);
				}
			}
			// finally throws an error if the fetch is aborted because set the loading at false before the fetch is done
		};

		getData();

		return () => {
			controller.abort();
		};
	}, []);

	return (
		<>
			<Nav bgActive={true} />
			<section className='h-screen pt-24 px-[4.5rem] bg-firmament_blue-950'>
				<div className=' flex justify-between items-center text-[#ffffff]'>
					<button
						className=' flex items-center text-2xl gap-2 font-semibold hover:text-atomic_orange-950 transition-all duration-300 ease-in-out'
						onClick={() => navigate(-1)}
					>
						<IoMdArrowRoundBack /> Hub
					</button>
					<h2 className='text-5xl font-bold'>{data.name}</h2>
				</div>
				<section className='py-5 h-min'>
					<img
						className=' object-cover w-[70%] rounded-3xl shadow-2xl'
						src={data.background_image}
						alt=''
					/>
					{/* <div className='w-full h-auto bg-firmament_blue-200'></div> */}
					<div></div>
				</section>
			</section>
		</>
	);
}

export default GamePage;
