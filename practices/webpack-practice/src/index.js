//side effect import
import "./style.css";

import { greeting } from './greeting.js';
import odin from "./odin.png";

console.log(greeting);

const img = document.createElement("img");
img.src = odin;

document.body.appendChild(img);