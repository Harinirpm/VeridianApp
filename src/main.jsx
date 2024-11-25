import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Routes from './routes/Routes.jsx'

const AppRoute = () => {
  const element = useRoutes(Routes);
  return element;
}
const routes = createRoot(document.getElementById('root'));
routes.render(
  <BrowserRouter>
    <AppRoute />
  </BrowserRouter>,
)
