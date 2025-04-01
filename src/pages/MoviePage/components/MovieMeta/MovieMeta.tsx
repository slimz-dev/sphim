import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import {
	faGlobe,
	faLanguage,
	faMeteor,
	faStar,
	faTableCellsLarge,
	faUpLong,
	faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from 'react-simple-star-rating';
import SkeletonMovieMeta from './SkeletonMovieMeta';

const MovieMeta = ({ meta }) => {
	return (
		<>
			{meta ? (
				<div className="flex-1 ">
					<div>
						<div className="text-[#9b9da3]">
							<FontAwesomeIcon icon={faCalendar} />
							<span className="ml-2">Released Year</span>
						</div>
						<div className="my-4">{meta.year}</div>
					</div>
					<div>
						<div className="text-[#9b9da3]">
							<FontAwesomeIcon icon={faLanguage} />
							<span className="ml-2">Available Languages</span>
						</div>
						<div className="flex flex-wrap gap-2 my-4">
							<div className="bg-black  py-1 px-2 rounded-lg">{meta.lang}</div>
						</div>
					</div>

					{meta.imdb.id ||
						(meta.tmdb.vote_count !== 0 && (
							<div>
								<div className="text-[#9b9da3]">
									<FontAwesomeIcon icon={faStar} />
									<span className="ml-2">Ratings</span>
								</div>
								<div className="my-4 max-sm:block flex justify-between">
									{meta.imdb.id && (
										<div className="flex-[0.47] max-sm:mb-4 max-sm:w-fit p-3 rounded-md bg-black">
											<span>IMDb</span>
											<div className="flex">
												<div className="mr-2 ">
													<Rating
														size={20}
														fillColor="red"
														initialValue={4.5}
														readonly
														allowFraction
														className="!flex items-center "
													/>
												</div>
												<div>4.5</div>
											</div>
										</div>
									)}
									{meta.tmdb && (
										<div className="flex-[0.47] p-3 max-sm:w-fit rounded-md bg-black">
											<span>TMDb</span>
											<div className="flex items-center">
												<FontAwesomeIcon color="red" icon={faMeteor} />
												<span className="ml-2">
													{meta.tmdb.vote_average}
												</span>

												<div className="text-xs ml-2  text-black border bg-[red] p-1 rounded-md">
													<span className="mr-1 ">
														{meta.tmdb.vote_count}
													</span>
													<FontAwesomeIcon icon={faUpLong} />
												</div>
											</div>
										</div>
									)}
								</div>
							</div>
						))}

					<div>
						<div className="text-[#9b9da3]">
							<FontAwesomeIcon icon={faTableCellsLarge} />
							<span className="ml-2">Genres</span>
						</div>
						<div className="my-4 flex flex-wrap gap-3">
							{meta.category.map((cate) => {
								return (
									<span className="bg-black py-1 px-2 rounded-md ">
										{cate.name}
									</span>
								);
							})}
						</div>
					</div>
					<div>
						<div className="text-[#9b9da3]">
							<FontAwesomeIcon icon={faVideo} />
							<span className="ml-2">Director</span>
						</div>
						<div className="my-4 bg-black w-fit px-2 py-1 rounded-md">
							{meta.director}
						</div>
					</div>
					<div>
						<div className="text-[#9b9da3]">
							<FontAwesomeIcon icon={faGlobe} />
							<span className="ml-2">Country</span>
						</div>
						{meta.country.map((item) => {
							return (
								<div className="my-4 bg-black w-fit px-2 py-1 rounded-md">
									{item.name}
								</div>
							);
						})}
					</div>
				</div>
			) : (
				<SkeletonMovieMeta />
			)}
		</>
	);
};

export default MovieMeta;
