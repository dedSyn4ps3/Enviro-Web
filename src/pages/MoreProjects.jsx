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

import { useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import PerfectScrollbar from 'perfect-scrollbar';

import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import { ProjectsCard } from '../components/Project/ProjectsCard';

import { routes } from '../routes/Router';

export default function MoreProjects(props) {
  const location = useLocation();
  const mainPanel = useRef();

  useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      const ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle('perfect-scrollbar-on');
      return () => {
        ps.destroy();
        document.body.classList.toggle('perfect-scrollbar-on');
      };
    }
  }, []);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
  }, [location]);

  return (
    <div className="wrapper">
      <Sidebar {...props} routes={routes} />
      <div className="main-panel" ref={mainPanel}>
        <NavBar {...props} />
        <ProjectsCard />
        <Footer fluid />
      </div>
    </div>
  );
}
