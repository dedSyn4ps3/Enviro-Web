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
import React, { Component } from "react";
import { MDBCardImage } from 'mdb-react-ui-kit';

import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import PanelHeader from "../components/PanelHeader/PanelHeader";

import header from '../assets/img/header.jpg';
import { routes } from '../routes/Router';

import {
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";


class SideDashSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dash_title: "",
      side_url: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveValues = this.saveValues.bind(this);
  }

  componentDidMount() {
    this.loadValues();
  }

  handleChange = (prop) => (event) => {
    this.setState({ ...this.state, [prop]: event.target.value });
  };

  saveValues = () => {
    localStorage.setItem("dash_title", JSON.stringify(this.state.dash_title));
    localStorage.setItem("side_url", JSON.stringify(this.state.side_url));
  }

  loadValues = () => {
    let i = localStorage.getItem("dash_title")

    if (i === null) {
      this.setState({ dash_title: "Side Dashboard" });
    } else {
      this.setState({ dash_title: JSON.parse(i) });
    }

    i = localStorage.getItem("side_url")

    if (i === null) {
      this.setState({ side_url: "" });
    } else {
      this.setState({ side_url: JSON.parse(i) });
    }
  }

  handleSubmit() {
    this.saveValues()
    this.refreshPage()
  }

  refreshPage() {
    window.location.reload(false);
  }

  render() {
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
        <div className="content">
          <main className="sideDashContainer">
          <Card className="sidedash">
            <CardHeader>{this.state.dash_title}</CardHeader>
            <CardBody>
              <div className="ratio ratio-21x9 iframe-container">
                <iframe
                  src={this.state.side_url}
                  title="Secondary Webdash"
                  allowfullscreen
                ></iframe>
              </div>
            </CardBody>
          </Card>
          </main>
          {/* <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>{this.state.dash_title}</CardHeader>
                <CardBody>
                  <div className="ratio ratio-21x9">
                    <iframe
                      src={this.state.side_url}
                      title="Secondary Webdash"
                      allowfullscreen
                    ></iframe>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h5 className="title">Update Dash Info</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row style={{marginLeft: 60}}>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Dashboard Title</label>
                          <Input
                            value={this.state.dash_title}
                            onChange={this.handleChange('dash_title')} 
                            placeholder="Title"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="5" style={{marginLeft: 80}}>
                        <FormGroup>
                          <label>
                            Embed URL
                          </label>
                          <Input placeholder="URL" type="text" value={this.state.side_url} onChange={this.handleChange('side_url')} />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col style={{marginLeft:'42%'}}>
                        <FormGroup>
                          <Button color="success" onClick={this.handleSubmit}>Update</Button>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
        </div>
      </>
    );
  }
}

function SideDash(props) {
  const mainPanel = React.useRef();


  return (
    <div className="wrapper">
      <Sidebar {...props} routes={routes} />
      <div className="main-panel" ref={mainPanel}>
        <NavBar {...props} />
        <SideDashSection />
        <Footer fluid />
      </div>
    </div>
  );
}

export default SideDash;
