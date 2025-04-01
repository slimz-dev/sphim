import { baseApi } from './apiConfig';

type apiOutput = {
	data: object[];
	status: number;
};

const getCategories = async () => {
	const request = await baseApi.get(`/the-loai`);
	return {
		data: request.data,
		status: request.status,
	};
};

export default getCategories;
