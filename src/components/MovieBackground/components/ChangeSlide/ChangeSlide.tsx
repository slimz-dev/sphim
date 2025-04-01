import { bindClassname } from '@com/utils';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Skeleton } from '@mui/material';
import styles from './ChangeSlide.module.scss';
type ChangeSlideProps = {
	slides: number;
	ref: any;
	activeSlide: number;
};

const ChangeSlide = ({ slides, activeSlide, ref }: ChangeSlideProps) => {
	const cx = bindClassname(styles);
	return (
		<>
			{slides ? (
				<div className="max-lg:my-10 flex justify-between items-center mx-[5%] my-16">
					<div
						onClick={() => ref.current.slickPrev()}
						className="p-3 cursor-pointer bg-black rounded-md"
					>
						<FontAwesomeIcon size="lg" icon={faArrowLeft} />
					</div>
					<div className="flex max-md:hidden">
						{Array(slides)
							.fill(null)
							.map((item, index) => {
								return (
									<span
										key={index}
										className={cx(
											'w-5 rounded-lg h-1 block mx-1 bg-[#2d2a2a]',
											{
												'bg-[red]': activeSlide === index,
											}
										)}
									></span>
								);
							})}
					</div>
					<div
						onClick={() => ref.current.slickNext()}
						className="p-3 cursor-pointer bg-black rounded-md"
					>
						<FontAwesomeIcon size="lg" icon={faArrowRight} />
					</div>
				</div>
			) : (
				<div className="max-lg:my-10 flex justify-between items-center mx-[5%] my-16">
					<Skeleton
						animation="wave"
						width={60}
						variant="text"
						height={30}
						style={{ background: '#242424' }}
					/>
					<div className="flex max-md:hidden">
						{slides ? (
							Array(slides)
								.fill(null)
								.map((item, index) => {
									return (
										<span
											key={index}
											className={cx(
												'w-5 rounded-lg h-1 block mx-1 bg-[#2d2a2a]',
												{
													'bg-[red]': activeSlide === index,
												}
											)}
										></span>
									);
								})
						) : (
							<Skeleton
								animation="wave"
								width={300}
								height={30}
								style={{ background: '#242424' }}
							/>
						)}
					</div>
					<Skeleton
						animation="wave"
						width={60}
						variant="text"
						height={30}
						style={{ background: '#242424' }}
					/>
				</div>
			)}
		</>
	);
};

export default ChangeSlide;
