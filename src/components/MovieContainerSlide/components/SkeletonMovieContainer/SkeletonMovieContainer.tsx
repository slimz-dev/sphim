import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Skeleton } from '@mui/material';

const SkeletonMovieContainer = () => {
	return (
		<div className={'flex  justify-between gap-4 overflow-x-auto'}>
			{Array(5)
				.fill([1, 1, 1, 1])
				.map((cate, index) => {
					return (
						<div key={index} className="flex  bg-[#1a1a1a] p-6 rounded-lg  flex-col ">
							<div className="relative min-w-36 max-w-60     grid grid-cols-2 grid-rows-2 gap-2 ">
								{cate.map((movie, id) => {
									return (
										<Skeleton
											key={id}
											animation="wave"
											style={{
												backgroundColor: '#242424',
											}}
											variant="rounded"
											width={100}
											height={90}
										/>
									);
								})}
							</div>
							<div className="relative pt-4 flex justify-between items-center ">
								<div>
									<span className="max-xl:text-xs">
										<Skeleton
											animation="wave"
											style={{ backgroundColor: '#242424' }}
											variant="text"
											width={180}
										/>
									</span>
								</div>
								<FontAwesomeIcon
									className="cursor-pointer hover:text-blue-400"
									icon={faArrowRight}
								/>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default SkeletonMovieContainer;
