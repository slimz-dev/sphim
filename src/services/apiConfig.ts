import axios from 'axios';

const v1Api = axios.create({
	baseURL: 'https://phimapi.com/v1/api',
});

const baseApi = axios.create({
	baseURL: 'https://phimapi.com',
});

type ParameterTypes = {
	category: string;
	limit: number;
	country: string;
	page: string;
};
export const queryString = (Parameter: ParameterTypes) => {
	const category = Parameter.category ? `&category=${Parameter.category}` : '';
	const limit = Parameter.limit ? `&limit=${Parameter.limit}` : '';
	const country = Parameter.country ? `&country=${Parameter.country}` : '';
	const page = Parameter.page ? `&page=${Parameter.page}` : '';
	const query = category + limit + country + page;
	return query;
};

export { baseApi, v1Api };
