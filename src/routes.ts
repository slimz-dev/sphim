import { ReactNode } from 'react';
import routeName from './config';
import DefaultLayout from './layout/DefaultLayout/DefaultLayout';
import FooterLayout from './layout/FooterLayout/FooterLayout';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import HomePage from './pages/HomePage/HomePage';
import ListPage from './pages/ListPage/ListPage';
import MoviePage from './pages/MoviePage/MoviePage';
import SubscriptionPage from './pages/SubscriptionPage/SubscriptionPage';
import SupportPage from './pages/SupportPage/SupportPage';
import UnknowPage from './pages/UnknowPage/UnknowPage';
import WatchPage from './pages/WatchPage/WatchPage';

type LayoutProps = {
	children: ReactNode;
	overflow: boolean;
};

interface routes {
	path: string;
	element: () => React.JSX.Element;
	layout?: ({ children, overflow }: LayoutProps) => React.JSX.Element;
	overflowHeader?: boolean;
}

const publicRoutes: routes[] = [
	{ path: routeName.HomePage(), element: HomePage, layout: DefaultLayout, overflowHeader: true },
	{ path: routeName.ListPage(), element: ListPage, layout: DefaultLayout, overflowHeader: false },
	{
		path: routeName.MoviePage(),
		element: MoviePage,
		layout: DefaultLayout,
		overflowHeader: false,
	},
	{
		path: routeName.SupportPage(),
		element: SupportPage,
		layout: DefaultLayout,
		overflowHeader: false,
	},
	{
		path: routeName.SupscriptionPage(),
		element: SubscriptionPage,
		layout: DefaultLayout,
		overflowHeader: false,
	},
	{
		path: routeName.UnknowPage(),
		element: UnknowPage,
	},
	{
		path: routeName.WatchPage(),
		element: WatchPage,
	},
	{
		path: routeName.CategoryPage(),
		element: CategoryPage,
		layout: DefaultLayout,
		overflowHeader: false,
	},
];

export default publicRoutes;
