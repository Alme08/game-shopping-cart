import App from './components/pages/HomePage/App.jsx';
import Browse from './components/pages/BrowsePage/Browse.jsx';
import ErrorPage from './error-page.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Category from './components/pages/BrowsePage/components/Category.jsx';
import GamePage from './components/pages/BrowsePage/components/GamePage.jsx';

const Router = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/browse',
			element: <Browse />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: ':category',
					element: <Category />,
				},
				{
					path: ':category/:page',
					element: <Category />,
				},
			],
		},
		{
			path: '/browse/game/:id',
			element: <GamePage />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
