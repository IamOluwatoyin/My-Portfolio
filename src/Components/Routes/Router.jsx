import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
  }
])



