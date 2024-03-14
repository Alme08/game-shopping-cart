import { element } from 'prop-types';
import App from './App.jsx';
import Browse from './components/Browse.jsx';
import ErrorPage from './error-page.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Category from './components/Category.jsx';

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
