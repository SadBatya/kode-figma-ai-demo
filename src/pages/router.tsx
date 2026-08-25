import { HomePage } from './HomePage/HomePage'

import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
])
