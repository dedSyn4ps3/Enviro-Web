/*!
================================
        ** Enviro-Web **
================================

MIT License

Copyright (c) 2025 dedSyn4ps3

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

import { createBrowserRouter } from 'react-router-dom';
import About from '../pages/AboutProject';
import MainDashboard from '../pages/MainDashboard';
import ErrorPage from '../pages/ErrorPage';
import MoreProjects from '../pages/MoreProjects';
import Settings from '../pages/Settings';
import Sidedash from '../pages/SideDash';


const routes = [
  {
    path: '/',
    element: <MainDashboard />,
    name: 'Overview',
    icon: 'design_bullet-list-67',
    layout: '/admin',
    errorElement: <ErrorPage />,
  },
  {
    path: '/secondary',
    element: <Sidedash />,
    name: 'Secondary Dashboard',
    icon: 'business_chart-bar-32',
    layout: '/admin',
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
    name: 'About',
    icon: 'education_paper',
    layout: '/admin',
    errorElement: <ErrorPage />,
  },
  {
    path: '/more',
    element: <MoreProjects />,
    name: 'More Projects',
    icon: 'education_atom',
    layout: '/admin',
    errorElement: <ErrorPage />,
  },
  {
    path: '/settings',
    element: <Settings />,
    name: 'Settings',
    icon: 'ui-1_settings-gear-63',
    layout: '/admin',
    errorElement: <ErrorPage />,
  },
];

export const router = createBrowserRouter(
    routes.map((route) => ({
      path: route.path,
      element: route.element,
      errorElement: route.errorElement,
    }))
  );
  
export { routes }