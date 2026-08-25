import { StrictMode } from 'react'
import { router } from '@/pages'
import { createRoot } from 'react-dom/client'
import { Providers } from '@/providers'
import { RouterProvider } from 'react-router'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>,
)
