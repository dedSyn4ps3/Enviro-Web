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


import React from "react";
import { useLocation } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";

import Admonition from '../components/Admonition/Admonition';
import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import PanelHeader from "../components/PanelHeader/PanelHeader";
import PerfectScrollbar from 'perfect-scrollbar';
import { routes } from '../routes/Router';

import pimoroni from "../assets/img/pimoroni.jpg"
import header from '../assets/img/header.jpg'

function AboutSection() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col>
            <Card className="card-user" style={{marginBottom: -50, marginTop: -20}}>
              <div className="image">
                <img alt="..." src={header} style={{width:'100%'}} />
              </div>
              <CardBody>
                <div className="author">
                  <a to="#pimoroni" onClick={() => {window.location.href = 'https://shop.pimoroni.com'; return null;}}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={pimoroni}
                    />
                    <h3 className="title">About</h3>
                  </a>
                  <p className="description" style={{fontSize: 21}}>Project Info</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col>
            <Card>
              <CardHeader>
                <h3 className="title" style={{marginTop: 10}}>It&apos;s All About Options!</h3>
              </CardHeader>
              <CardBody>
                <p>
                  <b>The goal of this project is to offer another exciting way to utilize the excellent Enviro and Enviro+ Raspberry Pi HATs from Pimoroni, while giving
                  each maker, teacher, student, or enthusiast the opportunity to dig into the source code to better understand the inner workings
                  of the application.</b>
                </p>
                <p>
                  For those unaware, the Pimoroni website has several good walkthrough tutorials for various devices. Their Github page also offers
                  a trove of code for both new and experienced coders to use to communicate and retrieve data from whichever device they are using.
                </p>
              </CardBody>
              <CardHeader>
                <h4 className="title">Making Things Interesting</h4>
              </CardHeader>
              <CardBody>
                <p>
                  The various walkthroughs and code examples provided by Pimoroni are an outstanding way for educators and makers alike to get started
                  quickly using boards such as the Enviro+ HAT, but what about next steps? What are the steps needed to go beyond command line 
                  scripts, and on to more UI-based applications? That&apos;s usually up to the maker to figure out since each scenario is different. 
                </p>
                <p>
                  <u><b>What&apos;s better than having to figure out these steps? How about having a next-level application like this to learn from!</b></u>
                </p>
                <Admonition type="note" title="New Changes">
                  We&apos;ve updated the project to include some new functionality and underlying code improvements. Check our new <b><a href="https://docs.nullreturn-it.com">documentation</a></b> page for more details!
                </Admonition>
              </CardBody>
              <CardHeader>
                <h4 className="title">Building Blocks</h4>
              </CardHeader>
              <CardBody>
                <p>
                  There are multitudes of ways and numerous frameworks out there to assist in the development of web applications. The core framework used
                  in this project is React. <b>Like others, it offers flexible components and structures to build both simple and complex web apps.</b>
                </p>
                <p>
                  This project is merely one of thousands of React-based applications, and will hopefully serve as a launchpad for both makers and developers to 
                  discover new ways to expand their current projects, and maybe even inspire some new ones!
                </p>
                <Admonition type="success" title="Hello GraphQL">
                  It became clear when we started this project that we needed a more efficient way to handle data requests and responses. GraphQL was the answer!
                </Admonition>
                <p>
                  <b>In order to improve and streamline the development and testing process, we chose to restructure the backend to be handled by Bun, as opposed to NodeJS.</b> The primary reason for using Bun, if it isn&apos;t obvious,
                  is that it&apos;s a blazing fast and modern JavaScript runtime that&apos;s been making quite a name for itself. This works out great since Bun offers a comprehensive feature set and improved performance
                  over the previous NodeJS implementation!
                </p>
                <p>
                  The frontend&apos;s navigation structure and base stylesheets are built on top of excellent template code by <b><a href="https://www.creativetim.com">Creative Tim</a></b>. <b>Anyone looking for a great starting point or inspiration for a
                  React (or any) project should definitely check out their awesome templates!</b>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

function About(props) {
  const location = useLocation();
  const mainPanel = React.useRef();

  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      const ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle('perfect-scrollbar-on');
      return () => {
        ps.destroy();
        document.body.classList.toggle('perfect-scrollbar-on');
      };
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
  }, [location]);

  return (
    <div className="wrapper">
      <Sidebar {...props} routes={routes} />
      <div className="main-panel" ref={mainPanel}>
        <NavBar {...props} />
        <AboutSection/>
        <Footer fluid />
      </div>
    </div>
  );
}

export default About;
