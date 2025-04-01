import { bindClassname } from '@com/utils';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Skeleton } from '@mui/material';
import { useState } from 'react';
import style from './SlideArrow.module.scss';
type SlideArrowProps = {
	slide: number;
	ref?: any;
	slideActive?: any;
};

const SlideArrow = ({ slide, slideActive, ref }: SlideArrowProps) => {
	const cx = bindClassname(style);
	const handleFoward = () => {
		ref.current.slickNext();
	};
	const handleBackward = () => {
		ref.current.slickPrev();
	};

	return (
		<>
			{slide !== 0 ? (
				<div className="max-xl:hidden flex  border-[#1a1a1a] bg-black border h-fit p-2 rounded-lg">
					<div
						onClick={() => handleBackward()}
						className="cursor-pointer hover:text-blue-500 bg-[#1a1a1a] h-fit w-fit p-[10px] rounded-lg hover:bg-[#141414]"
					>
						<FontAwesomeIcon size="lg" icon={faArrowLeft} />
					</div>
					<div className="flex mx-2 justify-center items-center">
						{Array(slide)
							.fill(null)
							.map((page, index) => {
								return (
									<div
										key={index}
										className={cx('bg-[#2f2f2f] h-[2px] rounded-lg w-3 ml-1', {
											'bg-red-500': index === slideActive / 5,
										})}
									></div>
								);
							})}
					</div>
					<div
						onClick={() => handleFoward()}
						className="cursor-pointer hover:text-blue-500 bg-[#1a1a1a] h-fit w-fit p-[10px] rounded-lg hover:bg-[#141414]"
					>
						<FontAwesomeIcon size="lg" icon={faArrowRight} />
					</div>
				</div>
			) : (
				<div className="max-2xl:hidden">
					<Skeleton
						animation="wave"
						style={{
							backgroundColor: '#242424',
						}}
						variant="rounded"
						width={120}
						height={20}
					/>
				</div>
			)}
		</>
	);
};

export default SlideArrow;
