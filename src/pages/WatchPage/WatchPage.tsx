import getMovie from '@com/services/getMovie';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hls from 'hls.js';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

const WatchPage = () => {
	const { movieSlug, episodeSlug } = useParams();
	const [link, setLink] = useState('');
	const navigate = useNavigate();
	const videoRef = useRef<null | HTMLVideoElement>(null);
	const hls = new Hls({
		debug: true,
	});
	useEffect(() => {
		const getEpisode = async () => {
			const result = await getMovie(movieSlug);
			if (result) {
				setLink(() => {
					const movieLink = result.data.episodes[0].server_data.find(
						(episode) => episode.slug === episodeSlug
					);
					return movieLink.link_m3u8;
				});
			}
		};
		if (!link) {
			getEpisode();
		} else {
			console.log(link);
			if (Hls.isSupported() && videoRef.current) {
				hls.loadSource(link);
				hls.attachMedia(videoRef.current);
			} else {
				console.log('load');
			}
		}
		return () => {
			// cleanup (when component destroyed or when useEffect runs twice on StrictMode)
			hls.destroy();
		};
	}, [link]);
	return (
		<div className="relative group">
			<video
				className="w-screen h-screen bg-black"
				ref={videoRef}
				controls
				// src={data.src}
			/>
			<div className="hidden cursor-pointer group-hover:block absolute top-10 left-10 ">
				<Link
					to={'..'}
					onClick={(e) => {
						e.preventDefault();
						navigate(-1);
					}}
				>
					<FontAwesomeIcon icon={faArrowLeft} size={'3x'} color="#d1d1d1" />
				</Link>
			</div>
		</div>
	);
};

export default WatchPage;
