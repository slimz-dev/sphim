import { v1Api } from './apiConfig';

type apiOutput = {
	data: object[];
	status: number;
};

const searchMovie = async (query: string, limit: number) => {
	const request = await v1Api.get(`/tim-kiem?keyword=${query}&limit=${limit}`);
	return {
		data: request.data.data,
		status: request.status,
	};
};

export default searchMovie;
