import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from '../../../Nav';
import {
	IoMdArrowRoundBack,
	IoIosArrowForward,
	IoIosArrowBack,
} from 'react-icons/io';
import { Oval } from 'react-loader-spinner';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

function GamePage() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	const [data, setData] = useState();
	let { id } = useParams();
	let navigate = useNavigate();
	const swiperConfig = {
		className: 'rounded-3xl shadow-2xl',
		slidesPerView: 1,
		loop: true,
		modules: [Autoplay, Navigation, Pagination],
		autoplay: { delay: 3000, disableOnInteraction: false },
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			horizontalClass: '.swiper-pagination',
			clickable: true,
		},
	};

	useEffect(() => {
		const controller = new AbortController();
		const { signal } = controller;
		const getData = async () => {
			try {
				setLoading(true);
				const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

				const responses = await Promise.all([
					fetch(`${VITE_API_URL}games/${id}?key=${VITE_API_KEY}`, {
						signal,
					}),
					fetch(`${VITE_API_URL}games/${id}/screenshots?key=${VITE_API_KEY}`, {
						signal,
					}),
				]);
				responses.forEach(response => {
					if (!response.ok) {
						throw new Error(`HTTP error: The status is ${response.status}`);
					}
				});
				let data = await Promise.all(
					responses.map(response => response.json())
				);
				setData([
					data[0],
					[
						{ id: data[0].id, image: data[0].background_image },
						...data[1].results,
					],
				]);
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

	if (error) {
		throw new Error(error);
	}

	if (loading) {
		return (
			<div className='flex justify-center items-center h-screen bg-firmament_blue-950'>
				<Oval height='80' width='80' color='#f9a826' secondaryColor='#f9a826' />
			</div>
		);
	}

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
					<h2 className='text-5xl font-bold'>{data[0].name}</h2>
				</div>
				<section className='flex'>
					<div className='py-5 h-min w-[70%] relative'>
						<Swiper {...swiperConfig}>
							{data[1].map((image, index) => {
								return (
									<SwiperSlide key={image.id} className=''>
										<img
											className='object-cover min-w-full min-h-full h-full opacity-60'
											src={image.image}
											alt={`slide-${index}`}
										/>
									</SwiperSlide>
								);
							})}
						</Swiper>
						<div className='absolute top-0 h-full w-full justify-between items-center flex text-autumn_white-50 px-5 text-3xl z-10 [&>button]:px-2 bg-none'>
							<button className='bg-gradient-to-r swiper-button-prev'>
								<IoIosArrowBack />
							</button>
							<button className='bg-gradient-to-l swiper-button-next'>
								<IoIosArrowForward />
							</button>
						</div>
						<div className='absolute bottom-0 z-10 flex justify-center w-full'>
							<div
								className='swiper-pagination bg-firmament_blue-950 mb-8 py-2 px-4 flex justify-center gap-3 rounded-xl
								[&>*]:bg-autumn_white-50
								[&>*]:h-3
								[&>*]:w-3
								[&>*]:rounded-full
								[&>*]:opacity-100
								[&>*]:bottom-0
								[&>*]:cursor-pointer
								[&>.swiper-pagination-bullet-active]:bg-atomic_orange-950
								[&>.swiper-pagination-bullet-active]:w-5'
							></div>
						</div>
					</div>
					<div className='w-[30%]'>afdadfasdf</div>
				</section>
			</section>
		</>
	);
}

export default GamePage;
