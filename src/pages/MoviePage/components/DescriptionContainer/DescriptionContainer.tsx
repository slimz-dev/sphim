import { Skeleton } from '@mui/material';
import SkeletonDescription from './SkeletonDescription';

const DescriptionContainer = ({ data }) => {
	return (
		<>
			{data.movie.length !== 0 ? (
				<>
					<span className="text-[#9b9da3]">Description</span>
					<p className="text-wrap my-4 text-justify">{data.movie[0].content}</p>
				</>
			) : (
				<SkeletonDescription />
			)}
		</>
	);
};

export default DescriptionContainer;
