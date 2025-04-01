import routeName from '@com/config';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './LandingHeader.module.scss';
const cx = classNames.bind(styles);

const LandingHeader = () => {
	return (
		<div className="relative bg-[url(https://wallpaperaccess.com/full/329583.jpg)] w-full h-screen  bg-auto">
			<div className=" flex flex-col bottom-0 min-h-60 items-stretch absolute bg-[linear-gradient(_to_bottom,_rgba(0,_0,_0,_0)_0%,_rgba(6,_6,_6,_0.55)_15%,_rgba(20,_20,_20,_1)_100%_)]">
				<div className="mx-[20%] flex flex-col  flex-1 h-full justify-between items-center ">
					<div
						className={cx(
							'capitalize text-white  text-[40px] max-2xl:text-2xl  text-center font-semibold',
							'bg-header'
						)}
					>
						The best streaming experience
					</div>
					<div
						className={cx(
							'text-[#626366] text-[16px] max-2xl:text-sm max-sm:hidden  text-center',
							'bg-content'
						)}
					>
						Sphim is the best streaming experience for watching your favorite movies and
						shows on demand, anytime, anywhere. With Sphim, you can enjoy a wide variety
						of content, including the latest blockbusters, classic movies, popular TV
						shows, and more. You can also create your own watchlists, so you can easily
						find the content you want to watch.
					</div>
					<div
						className={cx(
							'text-[#626366] text-[16px] max-2xl:text-sm max-sm:block hidden  text-center',
							'bg-content'
						)}
					>
						Sphim is the best streaming experience for watching your favorite movies and
						shows on demand, anytime, anywhere.
					</div>

					<div
						className={cx(
							'text-white bg-[red] text-center  px-4 py-2 rounded-md mb-2 cursor-pointer hover:bg-red-600',
							'bg-button-play'
						)}
					>
						<FontAwesomeIcon icon={faPlay} />
						<NavLink to={routeName.ListPage()}>
							<span className="ml-2 ">Start watching now</span>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingHeader;
