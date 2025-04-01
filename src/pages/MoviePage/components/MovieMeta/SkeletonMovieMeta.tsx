import { Skeleton } from '@mui/material';

const SkeletonMovieMeta = () => {
	return (
		<div className="flex-1 ">
			<div className="mb-8">
				<div>
					<Skeleton
						variant="text"
						animation="wave"
						style={{ background: '#242424', width: '40%', height: '10%' }}
					/>
				</div>
				<div>
					<Skeleton
						variant="text"
						animation="wave"
						style={{ background: '#242424', width: '70%', height: '10%' }}
					/>
				</div>
			</div>
			<div className="mb-8">
				<div>
					<Skeleton
						variant="text"
						animation="wave"
						style={{ background: '#242424', width: '30%', height: '10%' }}
					/>
				</div>
				<div>
					<Skeleton
						variant="text"
						animation="wave"
						style={{ background: '#242424', width: '90%', height: '10%' }}
					/>
				</div>
			</div>

			<div className="mb-8">
				<div className="text-[#9b9da3]">
					<Skeleton
						variant="text"
						animation="wave"
						style={{ background: '#242424', width: '15%', height: '10%' }}
					/>
				</div>
				<div className="text-[#9b9da3]">
					<Skeleton
						variant="text"
						animation="wave"
						style={{ background: '#242424', width: '54%', height: '10%' }}
					/>
				</div>
			</div>

			<div className="mb-8">
				<div className="text-[#9b9da3]">
					<Skeleton
						variant="text"
						animation="wave"
						style={{ background: '#242424', width: '35%', height: '10%' }}
					/>
				</div>
				<div className="text-[#9b9da3]">
					<Skeleton
						variant="text"
						animation="wave"
						style={{ background: '#242424', width: '44%', height: '10%' }}
					/>
				</div>
			</div>

			<div className="mb-8">
				<div className="text-[#9b9da3]">
					<Skeleton
						variant="text"
						animation="wave"
						style={{ background: '#242424', width: '12%', height: '10%' }}
					/>
				</div>
				<div className="text-[#9b9da3]">
					<Skeleton
						variant="text"
						animation="wave"
						style={{ background: '#242424', width: '74%', height: '10%' }}
					/>
				</div>
			</div>

			<div className="mb-8">
				<div className="text-[#9b9da3]">
					<Skeleton
						variant="text"
						animation="wave"
						style={{ background: '#242424', width: '37%', height: '10%' }}
					/>
				</div>
				<div className="text-[#9b9da3]">
					<Skeleton
						variant="text"
						animation="wave"
						style={{ background: '#242424', width: '84%', height: '10%' }}
					/>
				</div>
			</div>
		</div>
	);
};

export default SkeletonMovieMeta;
