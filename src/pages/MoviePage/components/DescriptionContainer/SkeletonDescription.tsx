import { Skeleton } from '@mui/material';

const SkeletonDescription = () => {
	return (
		<>
			<span className="text-[#9b9da3]">
				<Skeleton
					animation="wave"
					variant="text"
					height={30}
					style={{ background: '#242424', width: '10%' }}
				/>
			</span>
			<div className="my-4">
				<Skeleton
					animation="wave"
					variant="text"
					// width={900}
					height={30}
					style={{ background: '#242424', width: '100%' }}
				/>
				<Skeleton
					animation="wave"
					variant="text"
					height={30}
					style={{ background: '#242424', width: '85%' }}
				/>
				<Skeleton
					animation="wave"
					variant="text"
					height={30}
					style={{ background: '#242424', width: '50%' }}
				/>
			</div>
		</>
	);
};

export default SkeletonDescription;
