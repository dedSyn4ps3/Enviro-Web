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

import headerImage from '../../assets/img/header.jpg';

export default function ProjectsHeader() {
    const headerStyle = {
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '260px', // Adjust the height as needed
        width: '100%', // Adjust the width as needed
    };

    return (
        <header>
            <div
                className='text-center bg-image'
                style={headerStyle}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white projectsBox'>
                            <h2 className="title">Other Interesting Projects</h2>
                            <h5 className="description">
                                Looking for some more inspiration? Check out these other great projects to get you started!
                            </h5>
                            <div className="section-space"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}