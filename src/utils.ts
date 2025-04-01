import { TYPE_MOVIE, TYPE_MOVIE_ENG, TYPE_SERIES, TYPE_SERIES_ENG } from './constants';
import classNames from 'classnames/bind';

export const getTypeOfMovie = (engType: string): string | null => {
	return engType === TYPE_MOVIE_ENG
		? TYPE_MOVIE
		: engType === TYPE_SERIES_ENG
		? TYPE_SERIES
		: null;
};

export const getLink = (url: string) => {
	const movieFolder = url.split('/')[3];
	const movieID = url.split('/')[4];
	const fileName = url.split('/')[5];
	return {
		movieFolder,
		movieID,
		fileName,
	};
};

export const bindClassname = (style: any) => {
	return classNames.bind(style);
};
