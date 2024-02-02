import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Router = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
