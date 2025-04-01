import { Skeleton } from '@mui/material';
const SkeletonCast = () => {
	return (
		<div className="flex justify-between items-center">
			<div>
				<Skeleton
					animation="wave"
					variant="text"
					style={{
						background: '#242424',
						width: '50px',
						height: '30px',
					}}
				/>
			</div>
			<div className="flex flex-wrap  gap-4 my-4">
				{Array(3)
					.fill(1)
					.map((act, index) => {
						return (
							<div className="flex min-w-40  justify-center items-center flex-col">
								<Skeleton
									animation="wave"
									variant="rounded"
									style={{
										background: '#242424',
										width: '112px',
										height: '112px',
										borderRadius: '100%',
									}}
								/>
								<Skeleton
									animation="wave"
									variant="text"
									style={{
										background: '#242424',
										width: '80px',
										height: '30px',
									}}
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default SkeletonCast;
