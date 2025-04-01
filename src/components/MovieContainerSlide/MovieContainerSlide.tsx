import { APP_DOMAIN_CDN_IMAGE } from '@com/constants';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MovieContainerSlide.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import routeName from '@com/config';
import { Skeleton } from '@mui/material';
import ScrollableCategory from './components/ScrollableCategory/ScrollableCategory';
import SkeletonMovieContainer from './components/SkeletonMovieContainer/SkeletonMovieContainer';
import { bindClassname } from '@com/utils';
type MovieContainerSlideProps = {
	categories: { category: string; items: any[] }[];
	top?: boolean;
	ref: any;
	setSlideActive?: any;
	type: string;
};
const MovieContainerSlide = ({
	setSlideActive,
	ref,
	categories,
	top,
	type,
}: MovieContainerSlideProps) => {
	const navigate = useNavigate();
	const cx = bindClassname(styles);
	const settings = {
		dots: true,
		infinite: true,
		speed: 700,
		autoplaySpeed: 0,
		afterChange: (index) => {
			setSlideActive(index);
		},
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: false,
	};

	const handleCategory = (category) => {
		navigate(routeName.CategoryPage(category.slug, type, '1'));
	};

	return (
		<div className={cx('text-white my-20 ')}>
			{categories.length !== 0 ? (
				<>
					<Slider className="max-xl:!hidden " ref={ref} {...settings}>
						{categories.map((cate, index) => {
							return (
								<div
									onClick={() => handleCategory(cate)}
									key={index}
									className="flex group cursor-pointer bg-[#1a1a1a] p-6 rounded-lg  flex-col"
								>
									<div className="relative   grid grid-cols-2 grid-rows-2 gap-2 ">
										{cate.items.map((movie, id) => {
											return (
												<img
													key={id}
													className="w-full aspect-[116/124] object-cover  rounded-md"
													alt="pic"
													src={`${APP_DOMAIN_CDN_IMAGE}/${movie.poster_url}`}
												/>
											);
										})}
										<div className=" absolute bottom-0 top-[12.5%] left-0 right-0 bg-[linear-gradient(_to_bottom,_rgba(0,_0,_0,_0)_0%,_rgba(6,_6,_6,_0.55)_30%,_rgba(26,_26,_26,_1)_100%_)]"></div>
									</div>
									<div className="relative flex justify-between items-center ">
										<div>
											{top && (
												<div className="text-xs w-fit bg-[red] px-2 py-1 rounded-lg">
													Top 10 In
												</div>
											)}
											<span className="group-hover:text-red-500 max-xl:text-xs">
												{cate.category}
											</span>
										</div>
										<FontAwesomeIcon
											className="cursor-pointer group-hover:text-red-500 "
											icon={faArrowRight}
										/>
									</div>
								</div>
							);
						})}
					</Slider>
					<ScrollableCategory categories={categories} type={type} top={top} />
				</>
			) : (
				<SkeletonMovieContainer />
			)}
		</div>
	);
};

// {categories.map((item, index) => {
// 	if (index % 5 === 0) {
// 		return (
// 			<>
// 				{categories.slice(index, index + 5).map((cate, index) => {
// 					return (
// 						<div className="flex   bg-[#1a1a1a] p-6 rounded-lg  flex-col">
// 							<div className="relative max-lg:min-w-36 lg:w-60      grid grid-cols-2 grid-rows-2 gap-2 ">
// 								{cate.items.map((movie) => {
// 									return (
// 										<img
// 											className="w-full aspect-[116/124] object-cover  rounded-md"
// 											alt="pic"
// 											src={`${APP_DOMAIN_CDN_IMAGE}/${movie.poster_url}`}
// 										/>
// 									);
// 								})}
// 								<div className=" absolute bottom-0 top-[12.5%] left-0 right-0 bg-[linear-gradient(_to_bottom,_rgba(0,_0,_0,_0)_0%,_rgba(6,_6,_6,_0.55)_30%,_rgba(26,_26,_26,_1)_100%_)]"></div>
// 							</div>
// 							<div className="relative flex justify-between items-center ">
// 								<div>
// 									{top && (
// 										<div className="bg-[red] px-2 py-1 rounded-lg">
// 											Top 10 In
// 										</div>
// 									)}
// 									<span className="max-xl:text-xs">
// 										{cate.category}
// 									</span>
// 								</div>
// 								<FontAwesomeIcon
// 									className="cursor-pointer hover:text-blue-400"
// 									icon={faArrowRight}
// 								/>
// 							</div>
// 						</div>
// 					);
// 				})}
// 			</>
// 		);
// 	}
// })}

export default MovieContainerSlide;
