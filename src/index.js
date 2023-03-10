import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './routes/Root'
import Index from './routes/Index'
import Error from './routes/Error'

import { ThemeProvider } from './utils/context/ThemeProvider'

import GlobalStyle from './utils/style/GlobalStyle.jsx'

const router = createBrowserRouter([
  {
    path: '/memtube',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Index />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
