import routeName from '@com/config';
import { APP_DOMAIN_CDN_IMAGE, TYPE_MOVIE, TYPE_SERIES } from '@com/constants';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type MovieSlideProps = {
	slides: any[];
	type: string;
	ref: any;
	setActiveSlide: any;
};

const MovieSlide = ({ setActiveSlide, ref, slides, type }: MovieSlideProps) => {
	const navigate = useNavigate();
	const settings = {
		infinite: true,
		speed: 300,
		cssEase: 'linear',
		afterChange: (index) => {
			setActiveSlide(index);
		},
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: false,
	};

	const handleTransferPage = (movie) => {
		navigate(routeName.MoviePage(movie));
	};
	return (
		<div className="text-white  justify-between  my-20">
			{slides.length !== 0 ? (
				<>
					<Slider className="max-xl:!hidden" ref={ref} {...settings}>
						{slides.map((movie, index) => {
							const day = new Date(movie.modified.time).getDate();
							const month = new Date(movie.modified.time).toString().split(' ')[1];
							const year = new Date(movie.modified.time).getFullYear();
							return (
								<div
									key={index}
									onClick={() => handleTransferPage(movie.slug)}
									className="cursor-pointer group flex justify-center items-center bg-[#1a1a1a] p-6 rounded-lg flex-col mr-4"
								>
									<div className="relative   ">
										<LazyLoadImage
											className="w-full aspect-[240/256] object-cover  rounded-md"
											alt="pic"
											src={`${APP_DOMAIN_CDN_IMAGE}/${movie.poster_url}`}
										/>
										<div className=" absolute bottom-0 top-[60%] left-0 right-0 bg-[linear-gradient(_to_bottom,_rgba(0,_0,_0,_0)_0%,_rgba(6,_6,_6,_0.55)_30%,_rgba(26,_26,_26,_1)_100%_)]"></div>
									</div>
									{type === TYPE_MOVIE && (
										<div className="group-hover:text-red-600 flex flex-wrap max-xl:text-xs  justify-center items-center  bg-black text-[#868991] rounded-full p-1 mt-2">
											<span className="max-xl:hidden">Released at&nbsp;</span>
											<span className="font-semibold">{`${day} ${month}`}</span>
											&nbsp;
											<span className="font-semibold">{`${year}`}</span>
										</div>
									)}
									{type === TYPE_SERIES && (
										<div className="flex justify-between flex-wrap items-center   text-[#868991] p-1 mt-2">
											<div className="bg-black group-hover:text-red-600 rounded-full w-fit py-1 px-2">
												<FontAwesomeIcon icon={faClock} />
												<span className=" ml-2 text-xs">
													{movie.time.split('/')[0]}
												</span>
											</div>
											<div className="bg-black rounded-full py-1 px-3">
												<FontAwesomeIcon
													icon={faImdb}
													size="xl"
													color="red"
												/>
												<span className="group-hover:text-red-600 ml-2 text-xs">
													{(Math.random() * (9 - 7 + 1) + 7).toFixed(1)}
												</span>
											</div>
										</div>
									)}
								</div>
							);
						})}
					</Slider>
					<div className="hidden max-xl:flex  overflow-auto ">
						{slides.map((movie, index) => {
							const day = new Date(movie.modified.time).getDate();
							const month = new Date(movie.modified.time).toString().split(' ')[1];
							const year = new Date(movie.modified.time).getFullYear();
							return (
								<div
									key={index}
									className="flex justify-center items-center bg-[#1a1a1a] p-6 rounded-lg flex-col mr-4"
								>
									<div className="relative min-w-36  ">
										<LazyLoadImage
											className="w-full aspect-[240/256] object-cover  rounded-md"
											alt="pic"
											src={`${APP_DOMAIN_CDN_IMAGE}/${movie.poster_url}`}
										/>
										<div className=" absolute bottom-0 top-[60%] left-0 right-0 bg-[linear-gradient(_to_bottom,_rgba(0,_0,_0,_0)_0%,_rgba(6,_6,_6,_0.55)_30%,_rgba(26,_26,_26,_1)_100%_)]"></div>
									</div>
									{type === TYPE_MOVIE && (
										<div className="flex flex-wrap max-xl:text-xs  justify-center items-center  bg-black text-[#868991] rounded-full p-1 mt-2">
											<span className="">Released at&nbsp;</span>
											<span className="font-semibold">{`${day} ${month}`}</span>
											&nbsp;
											<span className="font-semibold">{`${year}`}</span>
										</div>
									)}
									{type === TYPE_SERIES && (
										<div className="flex flex-wrap justify-between items-center   text-[#868991] p-1 mt-2">
											<div className="bg-black rounded-full py-1 px-2">
												<FontAwesomeIcon icon={faClock} />
												<span className="ml-2 text-xs">
													{movie.time.split('/')[0]}
												</span>
											</div>
											<div className="bg-black mt-2 rounded-full py-1 px-3">
												<FontAwesomeIcon
													icon={faImdb}
													size="xl"
													color="red"
												/>
												<span className="ml-2 text-xs">
													{(Math.random() * (9 - 7 + 1) + 7).toFixed(1)}
												</span>
											</div>
										</div>
									)}
								</div>
							);
						})}
					</div>
				</>
			) : (
				<div className="flex justify-between overflow-auto ">
					{Array(5)
						.fill(1)
						.map((movie, index) => {
							return (
								<div
									key={index}
									className="flex min-w-36 max-w-60 justify-center items-center bg-[#1a1a1a] p-6 rounded-lg flex-col mr-4"
								>
									<div className=" ">
										<Skeleton
											animation="wave"
											variant="rounded"
											height={190}
											style={{ width: '192px', background: '#242424' }}
										/>
									</div>
									{type === TYPE_MOVIE && (
										<div className="flex flex-wrap max-xl:text-xs  justify-center items-center   text-[#868991] rounded-full p-1 mt-2">
											<Skeleton
												animation="wave"
												width={180}
												height={20}
												style={{ background: '#242424' }}
											/>
										</div>
									)}
									{type === TYPE_SERIES && (
										<div className="flex flex-wrap justify-between w-full items-center   text-[#868991] p-1 mt-2">
											<Skeleton
												animation="wave"
												width={60}
												height={20}
												style={{ background: '#242424' }}
											/>

											<Skeleton
												animation="wave"
												width={60}
												height={20}
												style={{ background: '#242424' }}
											/>
										</div>
									)}
								</div>
							);
						})}
				</div>
			)}
		</div>
	);
};

export default MovieSlide;
