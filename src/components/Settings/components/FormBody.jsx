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

*/

import { Form, FormGroup, Label, Row, Col, Input } from 'reactstrap';

export default function FormBody(props) {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="dashboardTitle">Secondary Dashboard Title</Label>
            <Input
              id="dashboardTitle"
              name="title"
              placeholder="with a placeholder"
              type="text"
              value={props.dash_title}
              onChange={props.handleChange(props.setDashTitle)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="dashboardURL">URL</Label>
            <Input
              id="dashboardURL"
              name="url"
              placeholder="password placeholder"
              type="text"
              value={props.side_url}
              onChange={props.handleChange(props.setSideUrl)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="sideColor">Sidebar Color</Label>
            <Input
              id="sideColor"
              name="color"
              type="select"
              value={props.side_color}
              onChange={props.handleChange(props.setSideColor)}
            >
              <option>Navy</option>
              <option>Emerald</option>
              <option>Crimson</option>
              <option>Dark</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="hatType">HAT Type</Label>
            <Input
              id="hatType"
              name="type"
              type="select"
              value={props.hat_type}
              onChange={props.handleChange(props.setHatType)}
            >
              <option>Standard</option>
              <option>Plus</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
}
