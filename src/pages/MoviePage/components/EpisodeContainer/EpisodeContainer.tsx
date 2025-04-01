import routeName from '@com/config';
import { getLink } from '@com/utils';
import { faClock, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hls from 'hls.js';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import EpisodeSkeleton from './SkeletonRender';

const EpisodeContainer = ({ data }) => {
	const videoRef = useRef<null | HTMLVideoElement>(null);
	const navigate = useNavigate();

	useEffect(() => {
		const hls = new Hls({
			debug: true,
		});

		if (Hls.isSupported() && videoRef.current) {
			hls.loadSource('Your Source 👾');
			hls.attachMedia(videoRef.current);
			hls.on(Hls.Events.ERROR, (err) => {
				console.log(err);
			});
		} else {
			console.log('load');
		}
		return () => {
			// cleanup (when component destroyed or when useEffect runs twice on StrictMode)
			hls.destroy();
		};
	}, []);

	const handleChooseEpisode = (episode) => {
		const { movieFolder, movieID, fileName } = getLink(episode.link_m3u8);
		navigate(routeName.WatchPage(movieFolder, movieID, fileName));
	};

	return (
		<div className="bg-black px-4 py-8 rounded-xl">
			{data.movie.length !== 0 ? (
				<>
					<div className="flex max-xs:items-start justify-between items-center">
						<div className="flex max-xs:block items-center mb-8">
							<div className="mr-2 bg-[red] capitalize  text-black font-semibold py-1 px-2 rounded-lg">
								{data.movie[0].status}
							</div>
							<div className="text-[#9b9da3] max-xs:mt-2">{`${data.movie[0].episode_total} Episodes`}</div>
						</div>
						<div className="bg-[#1c1c1c] w-6 h-6 p-5 flex justify-center items-center rounded-full">
							<FontAwesomeIcon color="gray" size="1x" icon={faArrowUp} />
						</div>
					</div>
					<div className="max-h-96 overflow-y-scroll">
						{data.episodes[0].server_data.map((episode, index) => {
							return (
								<div
									onClick={() => handleChooseEpisode(episode)}
									className="cursor-pointer hover:bg-[#181818] flex items-center sm:border-t max-sm:rounded-lg py-8 max-sm:bg-[rgb(20,20,20)] max-sm:py-4 max-sm:px-8 border-[#393939]"
								>
									<div className="text-[#626367] text-3xl font-semibold mr-10 max-sm:hidden">
										{index + 1 <= 9 ? `0${index + 1}` : index + 1}
									</div>
									<div className="flex max-sm:block flex-1">
										<div className="flex items-center justify-center">
											<div className="relative w-fit h-fit border border-[#2c2c2c] rounded-md">
												<img
													className="w-40  h-32 rounded-md opacity-50"
													src={data.movie[0].thumb_url}
													alt="movie thumb"
												/>
												<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[black] opacity-50 p-2 rounded-full">
													<FontAwesomeIcon
														size="2x"
														icon={faPlayCircle}
														color="white"
													/>
												</div>
											</div>
											<div className="text-[#626367] ml-3 text-3xl font-semibold sm:hidden flex justify-center items-center flex-1">
												{index + 1 <= 9 ? `0${index + 1}` : index + 1}
											</div>
										</div>
										<div className="flex flex-1 flex-col justify-center ml-4 max-sm:ml-0">
											<div className="lg:max-xl:block flex max-sm:flex-col-reverse justify-between sm:mb-3 max-sm:mt-3">
												<div className="text-2xl max-sm:mt-3">
													{episode.name}
												</div>
												<div className="bg-[#181818] border border-[#222222] w-fit text-[#9b9da3] py-1 px-2 rounded-md">
													<FontAwesomeIcon icon={faClock} />
													<span className="ml-2 ">{`${
														Math.floor(Math.random() * (56 - 25 + 1)) +
														25
													} min`}</span>
												</div>
											</div>
											<div className="text-[#9b9da3] max-sm:hidden">
												Tình cảm nảy nở và ranh giới bị xóa nhòa khi chàng
												trai nọ ghi lại buổi biểu diễn cuối của một nhóm
												nhạc nam đình đám rồi phát triển mối quan hệ gắn bó
												với giọng ca chính cô đơn.
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</>
			) : (
				<EpisodeSkeleton />
			)}
		</div>
	);
};

export default EpisodeContainer;
