import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <div className="p-10 text-center">Something went wrong!</div>, 
    children: [
      {
        index: true, 
        element: <HomePage />,
      },
    ],
  },
]);