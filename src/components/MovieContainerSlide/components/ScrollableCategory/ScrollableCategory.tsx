import routeName from '@com/config';
import { APP_DOMAIN_CDN_IMAGE } from '@com/constants';
import { bindClassname } from '@com/utils';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import styles from '../../MovieContainerSlide.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ScrollableCategory = ({ categories, type, top }) => {
	const navigate = useNavigate();
	const cx = bindClassname(styles);
	const handleCategory = (category) => {
		navigate(routeName.CategoryPage(category.slug, type, '1'));
	};
	return (
		<div
			className={cx(
				'hidden max-xl:flex  justify-between gap-4 overflow-x-auto',
				'custom-scroll'
			)}
		>
			{categories.map((cate, index) => {
				return (
					<div key={index}>
						{cate.items && (
							<div
								onClick={() => handleCategory(cate)}
								key={index}
								className="flex  bg-[#1a1a1a] p-6 rounded-lg  flex-col"
							>
								<div className="relative min-w-36 max-w-60     grid grid-cols-2 grid-rows-2 gap-2 ">
									{cate.items.map((movie, id) => {
										return (
											<LazyLoadImage
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
											<div className="bg-[red] px-2 py-1 rounded-lg">
												Top 10 In
											</div>
										)}
										<span className="max-xl:text-xs">{cate.category}</span>
									</div>
									<FontAwesomeIcon
										className="cursor-pointer hover:text-blue-400"
										icon={faArrowRight}
									/>
								</div>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default ScrollableCategory;
