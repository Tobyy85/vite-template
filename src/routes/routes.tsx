import type { RouteObject } from 'react-router-dom'

import ErrorPage from '@/pages/ErrorPage'
import HomePage from '@/pages/HomePage'

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
]
