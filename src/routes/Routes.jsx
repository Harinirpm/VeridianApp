import React, { children } from 'react'
import routes from '../utils/RouteObj'
import { lazy,Suspense } from 'react';
const App = lazy(() => import ( "../App"));
const Layout =lazy(()=>import("../pages/Layout"))
const Home = lazy(() => import("../pages/home/Home"))
const About = lazy(()=> import("../pages/About/About"));
const OurTeam = lazy(()=>import("../pages/ourTeam/Our_Team"));
const Investment = lazy(()=> import ("../pages/investment/Investment"));
const ContactUs = lazy(()=>import("../pages/contact/ContactUs"));
const Routes = [
  {
    path : routes.layout,
    element : (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout />
      </Suspense>
    ),
    children: [
      {
        path:routes.home,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
              <Home />
              </Suspense>
      )
      },
      {
        path:routes.about,
        element:(
          <Suspense fallback={<div>Loading...</div>}>
            <About /> 
          </Suspense>
        )
      },
      {
        path:routes.our_team,
        element:(
          <Suspense fallback={<div>Loading...</div>}>
            <OurTeam />
          </Suspense>
        )
      },
      {
        path:routes.investment,
      element:(
        <Suspense fallback={<div>Loading...</div>}>
          <Investment />
        </Suspense>
      )
      },
      {
        path:routes.contact,
        element:(
          <Suspense fallback={<div>Loading...</div>}>
            <ContactUs />
          </Suspense>
        )
      },
      {
        path: '*',
        element:<h1>404 - page Not Found</h1>,
      }

    ]
  }
]

export default Routes
