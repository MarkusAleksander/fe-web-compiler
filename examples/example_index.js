import _ from 'lodash';

import "./style.css";
// * import image - will be moved to output and will contain final URL
import MyImage from "./MyImage.jpg";

// * examples
// import Data from './data.xml';
// import Notes from './data.csv';
// import toml from './data.toml';
// import yaml from './data.yaml';
// import json from './data.json5';

// console.log(toml.title); // output `TOML Example`

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    const image = new Image();
    image.src = MyImage;

    element.appendChild(image);

    return element;
}

document.body.appendChild(component());