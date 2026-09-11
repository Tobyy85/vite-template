import ErrorPage from '@/pages/ErrorPage'
import HomePage from '@/pages/HomePage'

import type { RouteObject } from 'react-router-dom'

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
]
