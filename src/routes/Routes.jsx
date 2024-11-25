import React, { Children } from 'react'
import routes from '../utils/RouteObj'
import { lazy,Suspense } from 'react';
const App = lazy(() => import ( "../App"));
const Routes = [
  {
    path : routes.home,
    element : <App />,
    Children: [
      {
        path:routes.home,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
              <App />
              </Suspense>
      )
      },

    ]
  }
]

export default Routes
