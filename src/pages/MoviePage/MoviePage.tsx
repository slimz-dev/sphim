import MovieBackground from '@com/components/MovieBackground/MovieBackground';
import PricingBanner from '@com/components/PricingBanner/PricingBanner';
import routeName from '@com/config';
import getMovie from '@com/services/getMovie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CastContainer from './components/CastContainer/CastContainer';
import DescriptionContainer from './components/DescriptionContainer/DescriptionContainer';
import EpisodeContainer from './components/EpisodeContainer/EpisodeContainer';
import MovieMeta from './components/MovieMeta/MovieMeta';

const MoviePage = () => {
	const [data, setData] = useState<any>({
		movie: [],
	});
	const { movieSlug } = useParams();
	useEffect(() => {
		window.scrollTo(0, 0);
		const fetchMovie = async () => {
			const result = await getMovie(movieSlug);
			if (!result.data.status) {
				window.location.pathname = routeName.UnknowPage();
			} else {
				setData((prev) => ({
					...result.data,
					movie: [result.data.movie],
				}));
			}
		};
		fetchMovie();
	}, [movieSlug]);
	return (
		<>
			{
				<div className="bg-[#141414] px-[10%] text-white">
					<MovieBackground isOnly={true} data={{ ...data, movie: data.movie }} />
					<div className="flex max-lg:block ">
						<div className="mr-4 max-lg:mr-0 max-lg:mt-8 flex-[2]">
							<div className="bg-[#1c1c1c] p-8 rounded-xl mb-6">
								<EpisodeContainer data={data} />
							</div>
							<div className="bg-[#1c1c1c] p-8 rounded-xl mb-6">
								<DescriptionContainer data={data} />
							</div>
							<div className="bg-[#1c1c1c] p-8 rounded-xl mb-6">
								<CastContainer cast={data.movie[0]?.actor} />
							</div>
						</div>
						<div className="bg-[#1c1c1c] flex-1 p-8 rounded-xl h-fit">
							<MovieMeta meta={data.movie[0]} />
						</div>
					</div>
					<PricingBanner />
				</div>
			}
		</>
	);
};

export default MoviePage;
