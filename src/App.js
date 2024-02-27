
import MainLayout from './layouts/MainLayout';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import BlogDetail from './pages/BlogDetail';
import Home from './pages/Home';
import Create from './pages/Create';

const appRoutes = [
  {
    path: '/',
    element: (
      <MainLayout/>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/create',
        element: <Create />
      },
      {
        path: '/blog/:id',
        element: <BlogDetail />
      }
    ]
  }
];

const router = createBrowserRouter([
  {
    element: (
      <Outlet />
    ),
    children: appRoutes
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
