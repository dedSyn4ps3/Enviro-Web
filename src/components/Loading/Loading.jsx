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

import { Spinner } from 'reactstrap';
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';

export default function LoadingPage() {
  return (
    <div className="content">
      <Row>
        <Col xs={12} md={12}>
          <Card className="card-chart h-100">
            <CardBody className="d-flex flex-column align-items-center justify-content-center">
              <Spinner style={{ width: '8rem', height: '8rem' }} color="primary" />
              <CardTitle tag="h4" className="text-center mt-3">Loading Data</CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}