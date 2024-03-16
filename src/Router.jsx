import App from './components/pages/HomePage/App.jsx';
import Browse from './components/pages/BrowsePage/Browse.jsx';
import ErrorPage from './error-page.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Category from './components/pages/BrowsePage/components/Category.jsx';

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
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
