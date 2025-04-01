import getHotMovies from '@com/services/getNewestMovie';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faPlay, faPlus, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import ChangeSlide from './components/ChangeSlide/ChangeSlide';
import Slider from 'react-slick';
import { APP_DOMAIN_CDN_IMAGE } from '@com/constants';
import { movieSlice } from '@com/redux/movieSlice';
import SlideArrow from '../SlideArrow/SlideArrow';
import styles from './MovieBackground.module.scss';
import { NavLink } from 'react-router-dom';
import routeName from '@com/config';
import { Skeleton } from '@mui/material';
import { bindClassname, getLink } from '@com/utils';
type MovieBackgroundProps = {
	isOnly: boolean;
	data?: any;
};

const MovieBackground = ({ data, isOnly }: MovieBackgroundProps) => {
	const cx = bindClassname(styles);
	const slideRef = useRef(null);
	let watchParams = {
		movieFolder: null,
		movieID: null,
		fileName: null,
	};

	const [activeSlide, setActiveSlide] = useState<number>(0);

	const settings = {
		speed: 800,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1500,

		afterChange: (index) => {
			setActiveSlide(index);
		},
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true,
	};
	return (
		<div className="relative">
			{data.movie.length !== 0 ? (
				<Slider
					className="relative"
					infinite={data.movie.length >= 3}
					ref={slideRef}
					{...settings}
				>
					{data.movie.map((movie, index) => {
						if (isOnly) {
							const { movieFolder, movieID, fileName } = getLink(
								data.episodes[0].server_data[0].link_m3u8
							);
							watchParams = {
								movieFolder,
								movieID,
								fileName,
							};
						}
						return (
							<div key={index}>
								<div
									style={{
										backgroundImage: `url('${movie.thumb_url}')`,
									}}
									className={`relative w-full  h-[85vh] bg-center bg-cover rounded-lg`}
								>
									<div className=" absolute top-[55%] bottom-0  left-0 right-0 bg-[linear-gradient(_to_bottom,_rgba(0,_0,_0,_0)_0%,_rgba(6,_6,_6,_0.55)_15%,_rgba(20,_20,_20,_1)_100%_)]">
										<div
											className={cx('absolute bottom-0 left-0 right-0', {
												'mb-20': isOnly,
											})}
										>
											<div className="flex justify-center items-center flex-col mx-[1%] max-lg:mx-[20%]">
												<h2 className="text-2xl max-lg:text-xl font-semibold text-center">
													{movie.name}
												</h2>
												{movie.description && (
													<p className="my-4 text-[#8b8b8b] text-center max-lg:hidden">
														{movie.description}
													</p>
												)}
												<div className="flex max-lg:block max-lg:w-full mt-8">
													<NavLink
														to={`${
															!isOnly
																? routeName.MoviePage(movie.slug)
																: routeName.WatchPage(
																		watchParams.movieFolder,
																		watchParams.movieID,
																		watchParams.fileName
																  )
														}`}
													>
														<button className="bg-[red]  max-lg:w-full   px-6 py-3 rounded-lg mr-4">
															<FontAwesomeIcon
																size="lg"
																icon={faPlay}
															/>
															<span className="ml-2">Play Now</span>
														</button>
													</NavLink>
													<div className="max-lg:flex max-lg:justify-center max-lg:mt-4 max-lg:w-full">
														<button className=" p-3 rounded-md bg-black">
															<FontAwesomeIcon
																size="lg"
																icon={faPlus}
															/>
														</button>
														<button className=" p-3 mx-4 rounded-md bg-black">
															<FontAwesomeIcon
																size="lg"
																icon={faThumbsUp}
															/>
														</button>
														<button className=" p-3 rounded-md bg-black">
															<FontAwesomeIcon
																size="lg"
																icon={faVolumeHigh}
															/>
														</button>
													</div>
												</div>
											</div>

											{!isOnly && (
												<ChangeSlide
													ref={slideRef}
													activeSlide={activeSlide}
													slides={10}
												/>
											)}
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</Slider>
			) : (
				<div>
					<Skeleton
						animation="wave"
						variant="rounded"
						style={{ height: '85vh', backgroundColor: '#1a1a1a', width: '100%' }}
					/>
					<div className=" absolute top-[55%] bottom-0  left-0 right-0">
						<div
							className={cx('absolute bottom-0 left-0 right-0', {
								'mb-20': isOnly,
							})}
						>
							<div className="flex justify-center items-center flex-col mx-[1%] max-lg:mx-[20%]">
								<Skeleton
									animation="wave"
									variant="text"
									style={{
										height: '3vh',
										backgroundColor: '#242424',
										width: '15%',
									}}
								/>
								<div className="flex max-lg:block  max-lg:w-full mt-8">
									<div className="w-fit mx-auto">
										<Skeleton
											animation="wave"
											variant="text"
											style={{
												height: '4vh',
												backgroundColor: '#242424',
												width: '120px',
												marginRight: '8px',
											}}
										/>
									</div>

									<div className="flex max-lg:justify-center max-lg:mt-4 max-lg:w-full">
										<Skeleton
											animation="wave"
											variant="text"
											style={{
												height: '4vh',
												backgroundColor: '#242424',
												width: '40px',
												marginRight: '8px',
											}}
										/>
										<Skeleton
											animation="wave"
											variant="text"
											style={{
												height: '4vh',
												backgroundColor: '#242424',
												width: '40px',
												marginRight: '8px',
											}}
										/>
										<Skeleton
											animation="wave"
											variant="text"
											style={{
												height: '4vh',
												backgroundColor: '#242424',
												width: '40px',
											}}
										/>
									</div>
								</div>
							</div>

							{!isOnly && (
								<ChangeSlide
									ref={slideRef}
									activeSlide={activeSlide}
									slides={data.movie.length}
								/>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default MovieBackground;
