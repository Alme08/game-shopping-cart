import App from './App.jsx';
import Browse from './components/Browse.jsx';
import ErrorPage from './error-page.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
