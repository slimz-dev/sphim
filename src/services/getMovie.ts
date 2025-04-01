import { baseApi } from './apiConfig';

type apiOutput = {
	data: object[];
	status: number;
};

const getMovie = async (slug) => {
	const request = await baseApi.get(`/phim/${slug}`);
	return {
		data: request.data,
		status: request.status,
	};
};

export default getMovie;
