import App from './App.jsx';
import ErrorPage from './error-page.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Router = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			errorElement: <ErrorPage />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
