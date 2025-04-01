import routeName from '@com/config';
import { APP_DOMAIN_CDN_IMAGE } from '@com/constants';
import useDebounce from '@com/hooks/useDebounce';
import searchMovie from '@com/services/searchMovie';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import {
	faBarsStaggered,
	faCaretUp,
	faFilm,
	faHeadset,
	faHouse,
	faMagnifyingGlass,
	faTags,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cardClasses } from '@mui/material';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import styles from './Header.module.scss';
import HeaderDropdown from './HeaderDropdown';
const cx = classNames.bind(styles);
const Header = ({ overflow }) => {
	const navigate = useNavigate();
	const [popupSearch, setPopupSearch] = useState<boolean>(false);
	const [isAtive, setIsActive] = useState<string>(window.location.pathname);
	const [isSearching, setIsSearching] = useState<boolean>(false);
	const [searchValue, setSearchValue] = useState<string>('');
	const [searchedData, setSearchedData] = useState([]);
	const debouncedValue = useDebounce(searchValue, 500);
	useEffect(() => {
		const fetchSearch = async () => {
			const result = await searchMovie(debouncedValue, 5);
			setSearchedData(() => {
				setIsSearching(false);

				return result.data.items;
			});
		};
		if (debouncedValue) {
			fetchSearch();
		}
	}, [debouncedValue]);
	const handleQuery = (value) => {
		setSearchValue(() => {
			if (value) {
				setIsSearching(true);
			} else {
				setIsSearching(() => {
					setSearchedData([]);
					return false;
				});
			}
			return value;
		});
	};

	const handleNavigate = (movie) => {
		setSearchValue(() => {
			setPopupSearch(false);
			navigate(routeName.MoviePage(movie.slug));
			return '';
		});
	};
	return (
		<div
			className={cx(
				'h-[120px] relative  max-xl:justify-between flex flex-1   justify-around max-lg:px-10 py-8 px-40 z-10  w-full bg-[#141414]',
				{
					'!absolute bg-transparent': overflow,
				}
			)}
		>
			<div
				onClick={() => setPopupSearch((prev) => !prev)}
				className="xl:hidden flex  items-center"
			>
				<FontAwesomeIcon size="2xl" icon={faMagnifyingGlass} color="white" />
			</div>
			<div className="flex justify-center items-center cursor-pointer">
				<img src={require('@com/static/img/logo.png')} className="h-full" />
			</div>
			<div className="max-xl:hidden bg-black text-gray-600 flex p-1  border-4 border-[#1a1a1a] rounded-lg ">
				<div
					className={cx(
						'cursor-pointer max-2xl:px-4 px-6 py-1 flex justify-center items-center hover:bg-[#1a1a1a] hover:text-white rounded-md',
						{
							'bg-[#171f2d]': isAtive === routeName.HomePage(),
						}
					)}
					onClick={() => setIsActive(routeName.HomePage)}
				>
					<NavLink to={routeName.HomePage()}>Home</NavLink>
				</div>
				<div
					className={cx(
						'cursor-pointer max-2xl:px-4 px-6 py-1 flex justify-center items-center hover:bg-[#1a1a1a] hover:text-white rounded-md',
						{
							'bg-[#171f2d]': isAtive === routeName.ListPage(),
						}
					)}
					onClick={() => setIsActive(routeName.ListPage())}
				>
					<NavLink to={routeName.ListPage()}>Movies & Shows</NavLink>
				</div>
				<div
					className={cx(
						'cursor-pointer max-2xl:px-4 px-6 py-1 flex justify-center items-center hover:bg-[#1a1a1a] hover:text-white rounded-md',
						{
							'bg-[#171f2d]': isAtive === routeName.SupportPage(),
						}
					)}
					onClick={() => setIsActive(routeName.SupportPage())}
				>
					<NavLink to={routeName.SupportPage()}>Support</NavLink>
				</div>
				<div
					className={cx(
						'cursor-pointer max-2xl:px-4 px-6 py-1 flex justify-center items-center hover:bg-[#1a1a1a] hover:text-white rounded-md',
						{
							'bg-[#171f2d]': isAtive === routeName.SupscriptionPage(),
						}
					)}
					onClick={() => setIsActive(routeName.SupscriptionPage())}
				>
					<NavLink to={routeName.SupscriptionPage()}>Subscription</NavLink>
				</div>
			</div>
			<div className="max-xl:hidden flex  items-center">
				<div className=" bg-black relative group focus-within:border border-[#404040]  flex items-center rounded-full  cursor-pointer text-white ">
					<input
						value={searchValue}
						onChange={(e) => handleQuery(e.target.value)}
						placeholder="Search..."
						className="pl-3 group-focus-visible:outline-dotted pr-2 focus-visible:outline-none bg-black flex-1 rounded-l-full "
					/>
					<div className="bg-[#ffffff14] py-3 h-full flex justify-center items-center  rounded-r-full pl-3 pr-2">
						{isSearching ? (
							<ClipLoader
								color={'white'}
								loading={true}
								size={20}
								aria-label="Loading Spinner"
								data-testid="loader"
							/>
						) : (
							<FontAwesomeIcon size="lg" icon={faMagnifyingGlass} />
						)}
					</div>
					<div
						className={cx('absolute bg-[#282320] top-full w-full rounded-md', {
							hidden: !searchValue,
						})}
					>
						{searchedData.length !== 0 &&
							searchedData.map((movie, index) => {
								return (
									<div
										onClick={() => handleNavigate(movie)}
										key={index}
										className="hover:bg-[#2a2a2a] hover:text-red-400 flex items-center px-3 py-2 "
									>
										<img
											src={`${APP_DOMAIN_CDN_IMAGE}/${movie.poster_url}`}
											className="w-10 h-14"
										/>
										<div className="ml-3 grid ">
											<div className=" overflow-hidden whitespace-nowrap  !text-ellipsis ">
												{movie.name}
											</div>
											<div className="w-20 overflow-hidden whitespace-nowrap  !text-ellipsis ">
												{movie.origin_name}
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
			{popupSearch && (
				<div className={cx('xl:hidden absolute top-full left-0 right-0')}>
					<input
						className="bg-[#242424] p-3 focus-visible:outline-none focus-visible:border border-[#4e4141] text-white w-full "
						placeholder="Search..."
						value={searchValue}
						onChange={(e) => handleQuery(e.target.value)}
					/>
					<div
						className={cx(
							'absolute bg-[#2a2828] text-white top-full w-full rounded-md',
							{
								hidden: !searchValue,
							}
						)}
					>
						{searchedData.length !== 0 &&
							searchedData.map((movie, index) => {
								return (
									<div
										onClick={() => handleNavigate(movie)}
										key={index}
										className="hover:bg-[#2a2a2a] hover:text-red-400 flex items-center px-3 py-2 "
									>
										<img
											src={`${APP_DOMAIN_CDN_IMAGE}/${movie.poster_url}`}
											className="w-10 h-14"
										/>
										<div className="ml-3 grid ">
											<div className=" overflow-hidden w-full whitespace-nowrap  !text-ellipsis ">
												{movie.name}
											</div>
											<div className="overflow-hidden w-full whitespace-nowrap  !text-ellipsis ">
												{movie.origin_name}
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			)}

			<HeaderDropdown />
		</div>
	);
};

export default Header;
