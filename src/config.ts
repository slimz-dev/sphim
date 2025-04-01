const routeName = {
	MoviePage: (movieSlug = ':movieSlug') => `/movie/${movieSlug}`,
	HomePage: () => '/',
	ListPage: () => '/list',
	SupportPage: () => '/support',
	SupscriptionPage: () => '/plans',
	WatchPage: (movieFolder = ':movieFolder', movieID = ':movieID', fileName = ':fileName') =>
		`/watch/${movieFolder}/${movieID}/${fileName}`,
	CategoryPage: (categorySlug = ':categorySlug', type = `:type`, pageNum = ':page') =>
		`/category/${type}/${categorySlug}/page/${pageNum}`,
	UnknowPage: () => '*',
};

export default routeName;
