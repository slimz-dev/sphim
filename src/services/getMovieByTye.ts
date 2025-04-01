import { baseApi, queryString, v1Api } from './apiConfig';

type apiOutput = {
	data: object[];
	status: number;
};

const getMovieByType = async (type, parameter?) => {
	let query = '';
	if (parameter) {
		query = queryString(parameter);
	}
	const request = await v1Api.get(`/danh-sach/${type}?${query}`);
	return {
		data: request.data.data.items,
		status: request.status,
	};
};

export default getMovieByType;
