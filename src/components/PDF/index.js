import React from 'react';
import imageURL from './JoshuaCross_ResumePortfolio.pdf';

function PDF () {
    return (
        <object data={imageURL} type="application/pdf" width="100%" height="1500">
        <p>Download PDF <a href="https://joshacross.github.io/portfolio/assets/files/Joshua%20Cross%20Resume_Portfolio%20(3).pdf">Click Here!</a></p>
        </object>
    )
}

export default PDF;
