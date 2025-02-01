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

import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Container, Collapse, Nav, NavItem } from 'reactstrap';

function NavBar() {
  const location = useLocation();
  const [color, setColor] = React.useState('transparent');

  React.useEffect(() => {
    if (location.pathname.indexOf('full-screen-maps') !== -1) {
      setColor('white');
    } else {
      setColor('transparent');
    }
  }, [location]);

  return (
    <Navbar
      color={location.pathname.indexOf('full-screen-maps') !== -1 ? 'white' : color}
      expand="lg"
      className={
        location.pathname.indexOf('full-screen-maps') !== -1
          ? 'navbar-absolute fixed-top'
          : 'navbar-absolute fixed-top ' + (color === 'transparent' ? 'navbar-transparent ' : '')
      }
    >
      <Container fluid>
        <Collapse navbar className="justify-content-end">
          <Nav navbar>
            <NavItem>
              <a
                href="https://shop.pimoroni.com"
                target="_blank"
              >
                <i className="now-ui-icons location_world" />
                <p>
                  <span className="d-lg-none d-md-block">Visit Pimoroni</span>
                </p>
              </a>
              {/* <Link to="#pimoroni" onClick={() => { window.location.href = 'https://shop.pimoroni.com'; return null; }}>
                <i className="now-ui-icons location_world" />
                <p>
                  <span className="d-lg-none d-md-block">Visit Pimoroni</span>
                </p>
              </Link> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;