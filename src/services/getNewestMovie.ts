import { baseApi, queryString } from './apiConfig';

type apiOutput = {
	data: object[];
	status: number;
};

const getHotMovies = async (parameter?) => {
	let query = '';
	if (parameter) {
		query = queryString(parameter);
	}
	const request = await baseApi.get(`/danh-sach/phim-moi-cap-nhat?${query}`);
	return {
		data: request.data.items,
		status: request.status,
	};
};

export default getHotMovies;
