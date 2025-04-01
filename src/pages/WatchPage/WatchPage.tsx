import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hls from 'hls.js';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

const WatchPage = () => {
	const { movieFolder, movieID, fileName } = useParams();
	const navigate = useNavigate();
	const videoRef = useRef<null | HTMLVideoElement>(null);
	useEffect(() => {
		const hls = new Hls({
			debug: true,
		});
		if (Hls.isSupported() && videoRef.current) {
			hls.loadSource(
				`${process.env.REACT_APP_MOVIE_DOMAIN}/${movieFolder}/${movieID}/${fileName}`
			);
			hls.attachMedia(videoRef.current);

			hls.on(Hls.Events.ERROR, (err) => {
				hls.loadSource(
					`${process.env.REACT_APP_MOVIE_SECOND_DOMAIN}/${movieFolder}/${movieID}/${fileName}`
				);
			});
		} else {
			console.log('load');
		}
		return () => {
			// cleanup (when component destroyed or when useEffect runs twice on StrictMode)
			hls.destroy();
		};
	}, []);
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
