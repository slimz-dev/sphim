const routeName = {
	MoviePage: (movieSlug = ':movieSlug') => `/movie/${movieSlug}`,
	HomePage: () => '/',
	ListPage: () => '/list',
	SupportPage: () => '/support',
	SupscriptionPage: () => '/plans',
	WatchPage: (movieSlug = ':movieSlug', episodeSlug = ':episodeSlug') =>
		`/watch/${movieSlug}/${episodeSlug}`,
	CategoryPage: (categorySlug = ':categorySlug', type = `:type`, pageNum = ':page') =>
		`/category/${type}/${categorySlug}/page/${pageNum}`,
	UnknowPage: () => '*',
};

export default routeName;
