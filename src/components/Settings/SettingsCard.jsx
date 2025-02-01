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

import { useState, useEffect } from 'react';
import { Button, Card } from 'reactstrap';
import FormBody from './components/FormBody';
import { SettingsHeader } from './components/SettingsHeader';
import styles from './styles/Settings.module.css';

export const SettingsCard = () => {

  const [dashTitle, setDashTitle] = useState("");
  const [sideUrl, setSideUrl] = useState("");
  const [hatType, setHatType] = useState("");
  const [sideColor, setSideColor] = useState("");

  useEffect(() => {
    loadValues();
  }, []);

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const clearValues = () => {
    setDashTitle("Auxilliary Dashboard");
    setSideUrl("");
    setHatType("Standard");
    setSideColor("Navy");
  };

  const saveValues = () => {
    localStorage.setItem("dash_title", JSON.stringify(dashTitle));
    localStorage.setItem("side_url", JSON.stringify(sideUrl));
    localStorage.setItem("hat_type", JSON.stringify(hatType));
    localStorage.setItem("side_color", JSON.stringify(sideColor));
  };

  const loadValues = () => {
    let i = localStorage.getItem("dash_title");
    setDashTitle(i === null ? "Auxilliary Dashboard" : JSON.parse(i));

    i = localStorage.getItem("side_url");
    setSideUrl(i === null ? "" : JSON.parse(i));

    i = localStorage.getItem("hat_type");
    setHatType(i === null ? "Standard" : JSON.parse(i));

    i = localStorage.getItem("side_color");
    setSideColor(i === null ? "Navy" : JSON.parse(i));
  };

  const handleClear = () => {
    clearValues();
    window.location.reload(false);
  };

  const handleSubmit = () => {
    saveValues();
    window.location.reload(false);
  };

  return (
    <Card className="sidedash">
      <main className={styles.settingsContainer}>
        <div className={styles.settingsContent}>
          <div className={styles.topSection}>
            <SettingsHeader
              profileImage="https://cdn.builder.io/api/v1/image/assets/b72a844a13ff4ffe868438b0fccc36bb/4e6106c5b8ba5c425f88e63976945bf0c6920bb960a5d3bca08c839a09cb44b6?apiKey=b72a844a13ff4ffe868438b0fccc36bb&"
              title="Settings"
              subtitle="Side Dash & System Preferences"
            />
            <div className={styles.clearButton}>
              <Button color="primary" onClick={handleClear}>CLEAR</Button>
            </div>
          </div>
          <div className={styles.formBody}>
            <FormBody
              dash_title={dashTitle}
              side_url={sideUrl}
              hat_type={hatType}
              side_color={sideColor}
              handleChange={handleChange}
              setDashTitle={setDashTitle}
              setSideUrl={setSideUrl}
              setHatType={setHatType}
              setSideColor={setSideColor}
            />
          </div>
          <Button color="success" onClick={handleSubmit} className={styles.saveButton}>SAVE</Button>
        </div>
      </main>
    </Card>
  );
};
