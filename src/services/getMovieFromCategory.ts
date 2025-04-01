import { baseApi, queryString, v1Api } from './apiConfig';

const getMovieFromCategory = async (type, Parameter) => {
	const query = queryString(Parameter);
	const request = await v1Api.get(`/danh-sach/${type}?${query}`);
	return {
		data: request.data.data,
		status: request.status,
	};
};

export default getMovieFromCategory;
