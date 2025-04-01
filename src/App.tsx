import { Route, Routes } from 'react-router-dom';
import './App.css';
import publicRoutes from './routes';

export default function App() {
	return (
		<Routes>
			{publicRoutes.map((route, index) => {
				const Layout = route.layout;
				const RouteElement = route.element;
				return (
					<Route
						key={index}
						path={route.path}
						element={
							Layout !== undefined ? (
								<Layout overflow={route.overflowHeader}>
									<RouteElement />
								</Layout>
							) : (
								<RouteElement />
							)
						}
					/>
				);
			})}
		</Routes>
	);
}
