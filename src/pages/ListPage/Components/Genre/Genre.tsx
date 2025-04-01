import MovieContainerSlide from '@com/components/MovieContainerSlide/MovieContainerSlide';
import SlideArrow from '@com/components/SlideArrow/SlideArrow';
import { TYPE_MOVIE, TYPE_MOVIE_ENG, TYPE_SERIES_ENG } from '@com/constants';
import { useAppDispatch, useAppSelector } from '@com/hooks/redux';

import { useEffect, useRef, useState } from 'react';
type GenreProps = {
	header: string;
	type: string;
	top?: boolean;
};

const Genre = ({ header, top, type }: GenreProps) => {
	const slideRef = useRef(null);
	const [slideActive, setSlideActive] = useState<number>(0);
	const listMoviesFromCategory = useAppSelector(
		(state) =>
			state.movies[
				type === TYPE_MOVIE_ENG
					? 'listMoviesFromCategory'
					: type === TYPE_SERIES_ENG
					? 'listSeriesFromCategory'
					: ''
			]
	);

	return (
		<>
			<div className="flex text-white py-8 justify-between items-center">
				<div>
					<div className="text-4xl font-semibold mb-2">{header}</div>
				</div>
				<SlideArrow
					ref={slideRef}
					slide={Math.ceil(listMoviesFromCategory.length / 5)}
					slideActive={slideActive}
				/>
			</div>
			<MovieContainerSlide
				type={type}
				setSlideActive={setSlideActive}
				ref={slideRef}
				categories={listMoviesFromCategory}
				top={top}
			/>
		</>
	);
};

export default Genre;
