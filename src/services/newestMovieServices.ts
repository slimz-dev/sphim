import { baseApi } from './apiConfig';

type newestMovieProps = {
	page: number;
	limit: number;
};

const newestMovie = async ({ page, limit }: newestMovieProps) => {
	const request = await baseApi.get(`/phim-moi-cap-nhat?page=${page}&limit=${limit}`);
};

export default newestMovie;
