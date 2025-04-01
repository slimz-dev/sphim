import { Skeleton } from '@mui/material';

const EpisodeSkeleton = () => {
	return (
		<>
			<div className="flex max-xs:items-start justify-between items-center">
				<div className="flex max-xs:block w-full items-center mb-8">
					<Skeleton
						variant="text"
						animation="wave"
						style={{ background: '#242424', width: '20%', height: '10%' }}
					/>
				</div>
			</div>
			<div className="max-h-96 overflow-y-scroll">
				{Array(4)
					.fill(1)
					.map((episode, index) => {
						return (
							<div className="cursor-pointer hover:bg-[#181818] flex items-center sm:border-t max-sm:rounded-lg py-8 max-sm:bg-[rgb(20,20,20)] max-sm:py-4 max-sm:px-8 border-[#393939]">
								<div className="flex ml-12  max-sm:block flex-1">
									<div className="flex flex-1 items-center justify-center">
										<Skeleton
											variant="rounded"
											animation="wave"
											style={{
												background: '#242424',
												height: '100%',
												width: '100%',
											}}
										/>

										<div className="text-[#626367] ml-3 text-3xl font-semibold sm:hidden flex justify-center items-center flex-1">
											<Skeleton
												variant="rounded"
												animation="wave"
												style={{
													background: '#242424',
													width: '10%',
													height: '5%',
												}}
											/>
										</div>
									</div>
									<div className="flex flex-[3] flex-col justify-center ml-4 max-sm:ml-0">
										<div className="lg:max-xl:block flex max-sm:flex-col-reverse justify-between sm:mb-3 max-sm:mt-3">
											<div className="text-2xl flex-1   max-sm:mt-3">
												<Skeleton
													variant="text"
													animation="wave"
													style={{
														background: '#242424',
														width: '30%',
														height: '100%',
													}}
												/>
											</div>
											<div className="flex-1 flex justify-end">
												<Skeleton
													variant="text"
													animation="wave"
													style={{
														background: '#242424',
														width: '30%',
														height: '100%',
													}}
												/>
											</div>
										</div>
										<div className="text-[#9b9da3] w-full max-sm:hidden">
											<Skeleton
												variant="text"
												animation="wave"
												style={{
													height: '35%',
													background: '#242424',
													width: '95%',
												}}
											/>
											<Skeleton
												variant="text"
												animation="wave"
												style={{
													height: '35%',
													background: '#242424',
													width: '66%',
												}}
											/>
											<Skeleton
												variant="text"
												animation="wave"
												style={{
													height: '35%',
													background: '#242424',
													width: '42%',
												}}
											/>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default EpisodeSkeleton;
