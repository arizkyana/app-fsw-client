import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { BookList } from './pages/books';
import Login from './pages/Login';
import { theme } from './config/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BookList />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
