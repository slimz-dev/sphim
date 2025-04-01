import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getMovieFromCategory from '@com/services/getMovieFromCategory';
import routeName from '@com/config';
import { bindClassname, getTypeOfMovie } from '@com/utils';
import PricingBanner from '@com/components/PricingBanner/PricingBanner';
import { useAppDispatch, useAppSelector } from '@com/hooks/redux';
import { fetchCategory } from '@com/redux/movieSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './CategoryPage.module.scss';
import { Skeleton } from '@mui/material';
const CategoryPage = () => {
	const [movies, setMovies] = useState<any>({});
	const { type, categorySlug, page } = useParams();
	const cx = bindClassname(styles);
	const navigate = useNavigate();
	const categoryList = useAppSelector((state) => state.movies.category);
	const dispatch = useAppDispatch();
	useEffect(() => {
		window.scrollTo(0, 0);
		const fetchMovie = async () => {
			const movieType = getTypeOfMovie(type);
			try {
				const result = await getMovieFromCategory(movieType, {
					limit: 20,
					page,
					category: categorySlug,
				});
				dispatch(fetchCategory());
				setMovies(result.data);
			} catch (e) {
				navigate(routeName.UnknowPage());
			}
		};

		fetchMovie();
	}, [page]);
	const getDisplayPage = (thisPage: number) => {
		return parseInt(page) - 2 <= thisPage && thisPage <= parseInt(page) + 2;
	};
	const handleChangePage = (selectedPage: number) => {
		if (selectedPage.toString() !== page) {
			navigate(routeName.CategoryPage(categorySlug, type, selectedPage.toString()));
		}
	};

	const handleWatch = (movie) => {
		navigate(routeName.MoviePage(movie.slug));
	};
	return (
		<>
			{Object.keys(movies).length !== 0 ? (
				<div className="bg-[#141414] pt-10 px-[10%] text-white">
					<div className="relative -z-10 pt-36 border border-[#272525] rounded-lg p-12">
						<span className="absolute bg-[red] px-5 py-2 -top-5 left-12 rounded-lg">
							{categoryList.find((cate) => cate.slug === categorySlug)?.name
								? categoryList.find((cate) => cate.slug === categorySlug)?.name
								: 'Movies'}
						</span>
						<div className="grid grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 ">
							{movies.items.map((movie, index) => {
								return (
									<div
										onClick={() => handleWatch(movie)}
										className="relative overflow-hidden"
									>
										<div
											className="w-fit absolute top-0 left-0 z-10 px-4 text-xs rounded-sm py-2"
											style={{
												background:
													'linear-gradient(to right, rgb(68 34 34) 0%, rgb(16 15 9) 51%, rgb(255 21 22) 100%)',
											}}
										>
											{movie.episode_current}
										</div>
										<div
											key={index}
											className={cx(
												'w-full h-80 !bg-cover rounded-md hover:scale-150 ',
												'scale-animation'
											)}
											style={{
												background: `url(${process.env.REACT_APP_IMAGE_URL}/${movie.poster_url})`,
											}}
										></div>
										<div
											className="absolute p-2 pt-8 bottom-0 w-full"
											style={{
												background:
													'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(6, 6, 6, 0.55) 30%, rgba(0, 0, 0, 0.92) 100%)',
											}}
										>
											<div className="text-ellipsis text-sm text-[#e38b41] font-semibold overflow-hidden whitespace-nowrap">
												{movie.name}
											</div>
											<div className="text-ellipsis text-sm text-red-500 font-semibold overflow-hidden whitespace-nowrap">
												{movie.origin_name}
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className="flex justify-center items-center my-10">
						{parseInt(page) !== 1 && (
							<div className="bg-[#2a2a2a] cursor-pointer hover:bg-[#cf4f5c] py-2 px-6 rounded-md mx-1">
								<FontAwesomeIcon icon={faChevronLeft} />
							</div>
						)}
						<div
							onClick={() => handleChangePage(1)}
							className={cx(
								'bg-[#2a2a2a] cursor-pointer hover:bg-[#cf4f5c] py-2 px-5 rounded-md mx-1',
								{
									'bg-[#cf4f5c]': parseInt(page) === 1,
								}
							)}
						>
							1
						</div>
						{Array(movies.params.pagination.totalPages - 2)
							.fill('')
							.map((item, index) => {
								if (getDisplayPage(index + 2)) {
									return (
										<div
											onClick={() => handleChangePage(index + 2)}
											className={cx(
												'bg-[#2a2a2a] cursor-pointer hover:bg-[#cf4f5c] py-2 px-5 rounded-md mx-1',
												{
													'bg-[#cf4f5c]': parseInt(page) === index + 2,
												}
											)}
										>
											{index + 2}
										</div>
									);
								} else {
									if (
										index + 2 === 2 ||
										index + 2 === movies.params.pagination.totalPages - 1
									) {
										return (
											<div className="bg-[#1a1a1a] select-none cursor-not-allowed py-2 px-2 rounded-md mx-1">
												...
											</div>
										);
									}
								}
							})}
						<div
							onClick={() => handleChangePage(movies.params.pagination.totalPages)}
							className={cx(
								'bg-[#2a2a2a] cursor-pointer hover:bg-[#cf4f5c] py-2 px-5 rounded-md mx-1',
								{
									'bg-[#cf4f5c]':
										parseInt(page) === movies.params.pagination.totalPages,
								}
							)}
						>
							{movies.params.pagination.totalPages}
						</div>
						{parseInt(page) !== movies.params.pagination.totalPages && (
							<div className="bg-[#2a2a2a] cursor-pointer hover:bg-[#cf4f5c] py-2 px-6 rounded-md mx-1">
								<FontAwesomeIcon icon={faChevronRight} />
							</div>
						)}
					</div>
					<div className="py-20">
						<PricingBanner />
					</div>
				</div>
			) : (
				<div className="bg-[#141414] pt-10 px-[10%] text-white">
					<div className="relative -z-10 pt-36 border border-[#272525] rounded-lg p-12">
						<span className="absolute   -top-5 left-12 rounded-lg">
							<Skeleton
								animation="wave"
								width={120}
								height={40}
								style={{ background: '#242424' }}
							/>
						</span>
						<div className="grid grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 ">
							{Array(20)
								.fill(1)
								.map((movie, index) => {
									return (
										<div className="relative  overflow-hidden">
											<div className="w-fit absolute top-0 left-0 z-10 px-4 text-xs rounded-sm py-2">
												<Skeleton
													animation="wave"
													variant="text"
													width={70}
													height={30}
													style={{ background: '#242424' }}
												/>
											</div>
											<Skeleton
												animation="wave"
												variant="rounded"
												width={280}
												height={320}
												style={{ background: '#1a1a1a' }}
											/>
											<div className="absolute p-2 pt-8 bottom-0 w-full">
												<Skeleton
													animation="wave"
													variant="text"
													width={230}
													height={30}
													style={{ background: '#242424' }}
												/>
												<Skeleton
													animation="wave"
													variant="text"
													width={180}
													height={30}
													style={{ background: '#242424' }}
												/>
											</div>
										</div>
									);
								})}
						</div>
					</div>
					<div className="flex justify-center items-center my-10">
						<Skeleton
							animation="wave"
							variant="text"
							width={290}
							height={30}
							style={{ background: '#242424' }}
						/>
					</div>
					<div className="py-20">
						<PricingBanner />
					</div>
				</div>
			)}
		</>
	);
};

export default CategoryPage;
