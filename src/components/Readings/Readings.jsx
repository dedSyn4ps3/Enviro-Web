/* eslint-disable react/prop-types */
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


import { MDBCardImage } from 'mdb-react-ui-kit';
import header from '../../assets/img/header.jpg';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Label,
} from "reactstrap";

import LoadingPage from "../Loading/Loading";
import PanelHeader from "../PanelHeader/PanelHeader";
import CircularProgressWithLabel from '../Progress/CircularProgress'

export function CoreReadingsPlus({ data }) {
  if (!data || !data.currentReadingsPlus) {
    return (
      <>
        <PanelHeader
          size="md"
          content={
            <div className="align-center">
              <MDBCardImage position='top' src={header} alt='...' />
            </div>
          }
        />
        <LoadingPage />
      </>
    );
  }

  const { humidity, temperature, pressure, co, nh3 } = data.currentReadingsPlus;
  return (
    <>
      <PanelHeader
        size="md"
        content={
          <div className="align-center">
            <MDBCardImage position='top' src={header} alt='...' />
          </div>
        }
      />
      <div className="plusDashboard">
        <Row>
          <Col xs={12} md={4}>
            <Card className="h-100">
              <CardHeader>
                <h5 className="card-category">BME-280</h5>
                <CardTitle tag="h4">Temperature</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="align-center">
                  <CircularProgressWithLabel value={temperature} symbol="°F" style={{ width: 200, height: 200 }} color="success" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="h-100">
              <CardHeader>
                <h5 className="card-category">BME-280</h5>
                <CardTitle tag="h4">Humidity</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="align-center">
                  <CircularProgressWithLabel value={humidity} symbol="%" style={{ width: 200, height: 200 }} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="h-100">
              <CardHeader>
                <h5 className="card-category">BME-280</h5>
                <CardTitle tag="h4">Pressure</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="align-center">
                  <Label style={{ fontSize: 42 }}>{pressure} hPa</Label>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: 25 }}>
          <Card>
            <CardHeader>
              <h5 className="card-category">BME-280</h5>
              <CardTitle tag="h4">Additional Readings</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <Row>
                  <Col>
                    <CardHeader>
                      <CardTitle tag="h4">CO</CardTitle>
                    </CardHeader>
                    <CardBody >
                      <div>
                        <Label style={{ fontSize: 60, marginTop: -20 }}>{co} kO</Label>
                      </div>
                    </CardBody>
                  </Col>
                  <Col>
                    <CardHeader>
                      <CardTitle tag="h4">NH3</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <div>
                        <Label style={{ fontSize: 60, marginTop: -20 }}>{nh3} kO</Label>
                      </div>
                    </CardBody>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </Row>
      </div>
    </>
  );
}

export function CoreReadingsStandard({ data }) {
  if (!data || !data.currentReadings) {
    return (
      <>
        <PanelHeader
          size="md"
          content={
            <div className="align-center">
              <MDBCardImage position='top' src={header} alt='...' />
            </div>
          }
        />
        <LoadingPage />
      </>
    );
  }

  const { humidity, temperature, pressure } = data.currentReadings;
  return (
    <>
      <PanelHeader
        size="md"
        content={
          <div className="align-center">
            <MDBCardImage position='top' src={header} alt='...' />
          </div>
        }
      />
      <div className="standardDashboard">
        <Row>
          <Col xs={12} md={4}>
            <Card className="h-100">
              <CardHeader>
                <h5 className="card-category">BME-280</h5>
                <CardTitle tag="h4">Temperature</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="align-center">
                  <CircularProgressWithLabel value={temperature} symbol="°F" style={{ width: 200, height: 200 }} color="success" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="h-100">
              <CardHeader>
                <h5 className="card-category">BME-280</h5>
                <CardTitle tag="h4">Humidity</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="align-center">
                  <CircularProgressWithLabel value={humidity} symbol="%" style={{ width: 200, height: 200 }} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="h-100">
              <CardHeader>
                <h5 className="card-category">BME-280</h5>
                <CardTitle tag="h4">Pressure</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="align-center">
                  <Label style={{ fontSize: 42 }}>{pressure} hPa</Label>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}