import ErrorPage from '@/pages/ErrorPage'
import HomePage from '@/pages/HomePage'

export const routes = [
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
]
