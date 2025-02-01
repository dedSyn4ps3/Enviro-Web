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


***This project is built on a skeleton using styling and navigation components designed by Creative Tim***

Any use, re-use, and adaptations of this project and it's code shall include the above license as well
as credit for the components used that were adapted from Creative Tim's work...


=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


/*eslint-disable*/
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'perfect-scrollbar';
import { Nav } from 'reactstrap';
import { routes } from '../../routes/Router';
import logo from '../../assets/img/raspberry-pi.svg';

function Sidebar() {
  const [sideColor, setSideColor] = useState("");
  const sidebar = useRef();

  useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      const ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      return () => {
        ps.destroy();
      };
    }
  }, []);

  useEffect(() => {
    var i = localStorage.getItem("side_color");
    setSideColor(i === null ? "Navy" : JSON.parse(i));
  }, []);

  return (
    <div className="sidebar" data-color={sideColor}>
      <div className="logo" style={{ marginTop: 50 }}>
        <a
          href="https://www.raspberrypi.org/"
          className="simple-text logo-mini"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="logo-img" style={{ width: 45, height: 80, marginLeft: -5, marginTop: -10 }}>
            <img src={logo} alt="pi-logo" style={{ width: 70, height: 80 }} />
          </div>
        </a>
        <a
          className="simple-text logo-normal"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: 500, fontSize: 20 }}
        >
          Enviro-Web
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar} style={{ width: '110%' }}>
        <div style={{ marginTop: -20 }}>
          <Nav>
            {routes.map((prop, key) => {
              if (prop.redirect) return null;
              const toPath = prop.path;
              return (
                <li key={key}>
                  <NavLink
                    to={toPath}
                    className={({ isActive }) => (isActive ? 'custom-nav-link active' : 'custom-nav-link')}
                  >
                    <i className={'now-ui-icons ' + prop.icon} />
                    <p style={{ color: 'white', fontSize: 13 }}>{prop.name}</p>
                  </NavLink>
                </li>
              );
            })}
          </Nav>
        </div>
      </div>
    </div>
  );
}


Sidebar.defaultProps = {
  routes: [],
  showNotification: false,
  backgroundColor: "blue",
};


export default Sidebar;



// import React from "react";
// import { NavLink } from "react-router-dom";
// import { Nav } from "reactstrap";

// // javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from "perfect-scrollbar";

// import logo from "../../assets/img/raspberry-pi.svg"

// var ps;

// function Sidebar(props) {
//   const sidebar = React.useRef();
//   // verifies if routeName is the one active (in browser input)
//   const activeRoute = (routeName) => {
//     return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
//   };
//   React.useEffect(() => {
//     if (navigator.platform.indexOf("Win") > -1) {
//       ps = new PerfectScrollbar(sidebar.current, {
//         suppressScrollX: true,
//         suppressScrollY: false,
//       });
//     }
//     return function cleanup() {
//       if (navigator.platform.indexOf("Win") > -1) {
//         ps.destroy();
//       }
//     };
//   });
//   return (
//     <div className="sidebar" data-color="navy">
//       <div className="logo" style={{marginTop: 50}}>
//         <a
//           href="https://www.raspberrypi.org/"
//           className="simple-text logo-mini"
//           target="_blank"
//         >
//           <div className="logo-img" style={{width: 45, height: 80, marginLeft: -5, marginTop: -8}}>
//             <img src={logo} alt="pi-logo" style={{width: 70, height: 80}} />
//           </div>
//         </a>
//         <a
//           className="simple-text logo-normal"
//           target="_blank"
//           style={{fontWeight: 500, fontSize: 20}}
//         >
//           Enviro+ Python
//         </a>
//       </div>
//       <div className="sidebar-wrapper" ref={sidebar} style={{marginTop: 20, width:'110%', marginLeft:-10}}>
//         <Nav>
//           {props.routes.map((prop, key) => {
//             if (prop.redirect) return null;
//             return (
//               <li
//                 key={key}
//               >
//                 <NavLink
//                   to={prop.layout + prop.path}
//                 >
//                   <i className={"now-ui-icons " + prop.icon} />
//                   <p style={{color: 'white', fontSize: 13}}>{prop.name}</p>
//                 </NavLink>
//               </li>
//             );
//           })}
//         </Nav>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
