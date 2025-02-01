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

import { MDBCardImage } from 'mdb-react-ui-kit';
import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import PanelHeader from "../components/PanelHeader/PanelHeader";
import { routes } from '../routes/Router';
import { SettingsCard } from "../components/Settings/SettingsCard";

import header from '../assets/img/header.jpg';

const Settings = (props) => {
  return (
    <div className="wrapper">
      <Sidebar {...props} routes={routes} />
      <div className="main-panel">
        <NavBar {...props} />
        <PanelHeader
          size="md"
          content={
            <div className="align-center">
              <MDBCardImage position='top' src={header} alt='...' />
            </div>
          }
        />
        <div className="content">
          <SettingsCard />
        </div>
        <Footer fluid />
      </div>
    </div>
  );
};

export default Settings;