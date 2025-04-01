import MovieContainerSlide from '@com/components/MovieContainerSlide/MovieContainerSlide';
import SlideArrow from '@com/components/SlideArrow/SlideArrow';
import { TYPE_MOVIE_ENG } from '@com/constants';
import { useAppDispatch, useAppSelector } from '@com/hooks/redux';
import { fetchCategory, fetchedMovies, fetchMovieFromCategory } from '@com/redux/movieSlice';
import { useEffect, useRef, useState } from 'react';

const Categories = () => {
	const sliderRef = useRef(null);
	const [slideActive, setSlideActive] = useState<number>(0);
	const listMovie = useAppSelector((state) => state.movies.listMoviesFromCategory);
	const category = useAppSelector((state) => state.movies.category);
	const isFetchMovies = useAppSelector((state) => state.movies.isFetchedMovies);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchCategory())
			.unwrap()
			.then((action) => {
				action.forEach((cate) => {
					dispatch(fetchMovieFromCategory(cate.slug));
				});
				dispatch(fetchedMovies({ payload: true }));
			})
			.catch((err) => {
				if (!isFetchMovies) {
					category.forEach((cate) => {
						dispatch(fetchMovieFromCategory(cate.slug));
					});
					dispatch(fetchedMovies({ payload: true }));
				}
			});
	}, []);
	return (
		<>
			<div className="flex text-white py-8 justify-between ">
				<div>
					<div className="text-3xl font-semibold  mb-2">
						Explore our wide variety of categories
					</div>
					<div className="text-[#626366] ">
						Whether you're looking for a comedy to make you laugh, a drama to make you
						think, or a documentary to learn something new
					</div>
				</div>
				<SlideArrow
					slideActive={slideActive}
					ref={sliderRef}
					slide={Math.ceil(category.length / 5)}
				/>
			</div>
			<MovieContainerSlide
				type={TYPE_MOVIE_ENG}
				setSlideActive={setSlideActive}
				ref={sliderRef}
				categories={listMovie}
			/>
		</>
	);
};

export default Categories;
