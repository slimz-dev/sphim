import MovieSlide from '@com/components/MovieSlide/MovieSlide';
import SlideArrow from '@com/components/SlideArrow/SlideArrow';
import { useEffect, useRef, useState } from 'react';
import getMovieByType from '@com/services/getMovieByTye';
import { getTypeOfMovie } from '@com/utils';

type NewReleaseProps = {
	type: string;
	header: string;
};

const NewRelease = ({ type, header }: NewReleaseProps) => {
	const movieType = getTypeOfMovie(type);
	const slideRef = useRef(null);
	const [movieList, setMovieList] = useState<any[]>([]);
	const [slideActive, setActiveSlide] = useState<number>(0);
	useEffect(() => {
		const fetchList = async () => {
			const result = await getMovieByType(movieType, { limit: 20 });
			setMovieList(result.data);
		};
		fetchList();
	}, []);
	return (
		<>
			<div className="flex text-white py-8 justify-between items-center">
				<div>
					<div className="text-4xl font-semibold mb-2">{header}</div>
				</div>
				<SlideArrow
					slideActive={slideActive}
					ref={slideRef}
					slide={Math.ceil(movieList.length / 5)}
				/>
			</div>
			<MovieSlide
				setActiveSlide={setActiveSlide}
				ref={slideRef}
				slides={movieList}
				type={movieType}
			/>
		</>
	);
};

export default NewRelease;
