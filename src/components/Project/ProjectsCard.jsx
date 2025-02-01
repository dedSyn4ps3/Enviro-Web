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

import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

import ProjectsHeader from "./ProjectsHeader";

import inventor from '../../assets/img/inventor.png'
import grow from '../../assets/img/grow.png'
import lufdaten from '../../assets/img/lufdaten.png'


export const ProjectsCard = () => {
  return (
    <>
    <ProjectsHeader />
    <div className="projectsContainer" id="projects">
      <Container>
        <div >
          <Row>
            <Col md="4">
              <Card className="h-95">
                <a
                  href="https://shop.pimoroni.com/products/inventor-2040-w?variant=40053063155795"
                  target="_blank"
                >
                  <div className="card-image">
                    <img
                      alt="..."
                      className="img-raised rounded"
                      src={inventor}
                    />
                  </div>
                </a>
                <CardBody>
                  <a
                    href="https://shop.pimoroni.com/products/inventor-2040-w?variant=40053063155795"
                    target="_blank"
                  >
                    <CardTitle tag="h4">Inventor 2040W</CardTitle>
                  </a>
                  <h6 className="category text-info">IoT | Project Automation</h6>
                  <p className="card-description">
                    An all-in-one board for making battery powered contraptions that can move, make noise, control numerous peripherals, and even talk to the internet!
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <a
                  href="https://learn.pimoroni.com/article/assembling-grow"
                  target="_blank"
                >
                  <div className="card-image">
                    <img
                      alt="..."
                      className="img-raised rounded"
                      src={grow}
                    ></img>
                  </div>
                </a>
                <CardBody>
                  <a
                    href="https://learn.pimoroni.com/article/assembling-grow"
                    target="_blank"
                  >
                    <CardTitle tag="h4">Getting Started With Grow</CardTitle>
                  </a>
                  <h6 className="category text-info">Home | Office Plant Monitor</h6>
                  <p className="card-description">
                    Automatic, systematic and hydromatic, Grow is a smart modular monitoring system designed to help you take the best possible care of your plants
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="h-95">
                <a
                  href="https://learn.pimoroni.com/article/enviro-plus-and-luftdaten-air-quality-station"
                  target="_blank"
                >
                  <div className="card-image">
                    <img
                      alt="..."
                      className="img-raised rounded"
                      src={lufdaten}
                    ></img>
                  </div>
                </a>
                <CardBody>
                  <a
                    href="https://learn.pimoroni.com/article/enviro-plus-and-luftdaten-air-quality-station"
                    target="_blank"
                  >
                    <CardTitle tag="h4">Outdoor Air Quality Station</CardTitle>
                  </a>
                  <h6 className="category text-info">IoT | Environmental Monitoring</h6>
                  <p className="card-description">
                    Build an air quality monitoring station that can be mounted outside your house and transmit air quality data to the Luftdaten global air quality map
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    </>
  );
}
