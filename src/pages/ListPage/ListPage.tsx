import MovieBackground from '@com/components/MovieBackground/MovieBackground';
import PricingBanner from '@com/components/PricingBanner/PricingBanner';
import { TYPE_MOVIE, TYPE_MOVIE_ENG, TYPE_SERIES, TYPE_SERIES_ENG } from '@com/constants';
import { useAppDispatch, useAppSelector } from '@com/hooks/redux';
import {
	fetchCategory,
	fetchedMovies,
	fetchedSeries,
	fetchMovieFromCategory,
	fetchSeriesFromCategory,
} from '@com/redux/movieSlice';
import getHotMovies from '@com/services/getNewestMovie';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Genre from './Components/Genre/Genre';
import NewRelease from './Components/NewRelease/NewRelease';
import Wrapper from './Components/Wrapper';

const ListPage = () => {
	const [listMovies, setListMovies] = useState<any[]>([]);
	const dispatch = useAppDispatch();
	const isFetchMovies = useAppSelector((state) => state.movies.isFetchedMovies);
	const isFetchSeries = useAppSelector((state) => state.movies.isFetchedSeries);
	const category = useAppSelector((state) => state.movies.category);
	useEffect(() => {
		dispatch(fetchCategory())
			.unwrap()
			.then((action) => {
				action.forEach((cate) => {
					dispatch(fetchMovieFromCategory(cate.slug));
				});
				action.forEach((cate) => {
					dispatch(fetchSeriesFromCategory(cate.slug));
				});
				dispatch(fetchedMovies({ payload: true }));
				dispatch(fetchedSeries({ payload: true }));
			})
			.catch((err) => {
				if (!isFetchMovies) {
					category.forEach((cate) => {
						dispatch(fetchMovieFromCategory(cate.slug));
					});
					dispatch(fetchedMovies({ payload: true }));
				}
				if (!isFetchSeries) {
					category.forEach((cate) => {
						dispatch(fetchSeriesFromCategory(cate.slug));
					});
					dispatch(fetchedSeries({ payload: true }));
				}
			});
		const fetchMovie = async () => {
			const response = await getHotMovies();
			setListMovies(response.data);
		};
		fetchMovie();
	}, []);
	return (
		<div className="bg-[#141414] px-[10%] text-white">
			<MovieBackground data={{ movie: listMovies }} isOnly={false} />
			<Wrapper label="Movies">
				<>
					<Genre type={TYPE_MOVIE_ENG} header="Our Genres" />
					<Genre type={TYPE_MOVIE_ENG} header="Popular Top 10 in Genres" top={true} />
					<NewRelease type={TYPE_MOVIE_ENG} header="New Release" />
				</>
			</Wrapper>
			<Wrapper label="Shows">
				<>
					<Genre type={TYPE_SERIES_ENG} header="Our Genres" />
					<Genre type={TYPE_SERIES_ENG} header="Popular Top 10 in Genres" top={true} />
					<NewRelease type={TYPE_SERIES_ENG} header="New Release Shows" />
				</>
			</Wrapper>
			<div className="py-20">
				<PricingBanner />
			</div>
		</div>
	);
};

export default ListPage;
