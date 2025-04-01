import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getCategories from '@com/services/getCategoriesServices';
import getMovieFromCategory from '@com/services/getMovieFromCategory';
import { TYPE_MOVIE, TYPE_SERIES } from '@com/constants';

// Define a type for the slice state
interface MovieState {
	category: any[];
	isFetchedMovies: boolean;
	isFetchedSeries: boolean;
	listMoviesFromCategory: { category: string; slug: string; items: [] }[];
	listSeriesFromCategory: { category: string; slug: string; items: [] }[];
}

// Define the initial state using that type
const initialState: MovieState = {
	isFetchedMovies: false,
	isFetchedSeries: false,
	category: [],
	listMoviesFromCategory: [],
	listSeriesFromCategory: [],
};

export const fetchCategory = createAsyncThunk(
	'movies/fetchCategory',
	// if you type your function argument here
	async () => {
		const response = await getCategories();
		return response.data;
	},
	{
		condition: (_, { getState }: any) => {
			if (getState().movies.category.length !== 0) {
				return false;
			}
		},
	}
);

export const fetchMovieFromCategory = createAsyncThunk(
	'movies/fetchMovieFromCategory',
	// if you type your function argument here
	async (category: string, { getState }) => {
		const response = await getMovieFromCategory(TYPE_MOVIE, {
			category,
			limit: 4,
		});
		return {
			data: response.data.items,
			category: category,
		};
	},
	{
		condition: (category, { getState }: any) => {
			const { movies } = getState();
			const fetchStatus = movies.fetchingState;
			if (fetchStatus) {
				return false;
			}
		},
	}
);

export const fetchSeriesFromCategory = createAsyncThunk(
	'series/fetchMovieFromCategory',
	// if you type your function argument here
	async (category: string, { getState }) => {
		const response = await getMovieFromCategory(TYPE_SERIES, {
			category,
			limit: 4,
		});
		return {
			data: response.data.items,
			category: category,
		};
	},
	{
		condition: (category, { getState }: any) => {
			const { movies } = getState();
			const fetchStatus = movies.fetchingState;
			if (fetchStatus) {
				return false;
			}
		},
	}
);

export const movieSlice = createSlice({
	name: 'movie',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		fetchedMovies: (state, action) => {
			state.isFetchedMovies = true;
		},
		fetchedSeries: (state, action) => {
			state.isFetchedSeries = true;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCategory.fulfilled, (state, action) => {
			state.category = [...action.payload];
		});
		builder.addCase(fetchCategory.pending, (state, action) => {});
		builder.addCase(fetchCategory.rejected, (state, action) => {});
		builder.addCase(fetchMovieFromCategory.fulfilled, (state, action) => {
			const foundCategory = state.category.find((cate) => {
				return cate.slug === action.payload.category;
			});

			state.listMoviesFromCategory.push({
				category: foundCategory.name,
				slug: foundCategory.slug,
				items: action.payload.data,
			});
		});
		builder.addCase(fetchMovieFromCategory.pending, (state, action) => {});
		builder.addCase(fetchMovieFromCategory.rejected, (state, action) => {});
		builder.addCase(fetchSeriesFromCategory.fulfilled, (state, action) => {
			const foundCategory = state.category.find((cate) => {
				return cate.slug === action.payload.category;
			});

			state.listSeriesFromCategory.push({
				category: foundCategory.name,
				slug: foundCategory.slug,
				items: action.payload.data,
			});
		});
		builder.addCase(fetchSeriesFromCategory.pending, (state, action) => {});
		builder.addCase(fetchSeriesFromCategory.rejected, (state, action) => {});
	},
});

export const { fetchedMovies, fetchedSeries } = movieSlice.actions;

export default movieSlice.reducer;
