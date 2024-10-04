import * as THREE from "https://cdn.skypack.dev/three@0.133.1";
import { ImprovedNoise } from "https://cdn.skypack.dev/three@0.133.1/examples/jsm/math/ImprovedNoise.js";
import { AsciiEffect } from "https://cdn.skypack.dev/three@0.133.1/examples/jsm/effects/AsciiEffect.js";

// import * as THREE from 'three';
// import { ImprovedNoise } from "three/addons/math/ImprovedNoise.js";
// import { AsciiEffect } from "three/addons/effects/AsciiEffect.js";

// Define common var
const w = window.innerWidth;
const h = window.innerHeight;
const rbgThreshold = 105;
let divider = 200
let ascii_set = ' .:/\\@#'
let ascii_set2 = ' ._/\\0@'
let bgColor =  'black'
let r0 = 45;
let g0 = 52;
let b0 = 54;
// rgb(45, 52, 54)
let ascii_resolution = 0.1;
let pSize = 10;
let gap = 0.07;

// Define Scene
const scene = new THREE.Scene();

// Define Camera
const camera = new THREE.OrthographicCamera( w / - divider,w / divider,h / divider, h / - divider, 2, 1000 );
camera.position.z = 500;

// Define Renderer
// const canvas = document.querySelector("canvas");
// const renderer = new THREE.WebGLRenderer({canvas: canvas});
const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);

// Define ascii effect
const effect = new AsciiEffect( renderer, ascii_set2, { invert: true, resolution: ascii_resolution } );
effect.setSize( w, h );
// effect.domElement.style.color = `rgb(${r0}, ${g0}, ${b0})`;
effect.domElement.style.color = `rgb(${r0}, ${g0}, ${b0})`;
effect.domElement.style.backgroundColor = bgColor;

document.body.appendChild(effect.domElement);

// Define noise points
let gridSizeW = w/(divider*gap);
let gridSizeH = h/(divider*gap);
const coords = [];
const colors = [];
const points = [];
let x;
let y;
let z = 0;
let r;
let g;
let b;
let point = {
    position: {},
    rate: 0.0,
};
function updateArr(gridW, gridH){
    // let x1 = -gridW + 5;
    // let x2 = x1 + 40;
    // let y1 = gridH - 20;
    // let y2 = y1 + 15;
    for (let i = -gridW; i < gridW; i += 1) {
        for (let j = -gridH; j < gridH; j += 1) {
            // if( (i >= x1 || i <=x2) || (j > y1 || j <= y2)){
            // if( i < x1 || i >=x2 || j < y1 || j >= y2){
            x = i * gap;
            y = j * gap;
            r = Math.random();
            g = Math.random();
            b = Math.random();
            point = {
                position: {
                    x,
                    y,
                    z,
                },
                    color: new THREE.Color(r, g, b),
            };

            points.push(point);
            coords.push(x, y, z);
            colors.push(r, g, b);
        }
        // }
    }
}
updateArr(gridSizeW, gridSizeH)
// points
const geo = new THREE.BufferGeometry();
geo.setAttribute("position", new THREE.Float32BufferAttribute(coords, 3));
geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
const mat = new THREE.PointsMaterial({ size: pSize, vertexColors: true });
const pointsObj = new THREE.Points(geo, mat);
const Noise = new ImprovedNoise();

function updatePoints(t) {
    const coords = [];
    const cols = [];
    let ns;
    const nScale = 0.65;
    const zPosScale = 1.5;
    const highColor = new THREE.Color(100, 74, 57);
    const lowColor = new THREE.Color(20, 10, 0);
    points.forEach((p, i) => {
        ns = Noise.noise(p.position.x * nScale, p.position.y * nScale, t);
        p.position.z = ns * zPosScale;
        p.color.lerpColors(lowColor, highColor, ns * 1.5);
        let { r, g, b } = p.color;
        cols.push(r, g, b);
        let {x, y, z } = p.position;
        coords.push(x, y, z);
    });
    geo.setAttribute("position", new THREE.Float32BufferAttribute(coords, 3));
    geo.setAttribute("color", new THREE.Float32BufferAttribute(cols, 3));
}
scene.add(pointsObj);

function randomRGB(mult, val){
    let rand_val = Math.random();
    if (rand_val*rbgThreshold > val){
        val += mult;
    }else{
        val -= mult;
    }
    return val
}

const timeMult = 0.0007;
function animate(timeStep) {
    requestAnimationFrame(animate);
    updatePoints(timeStep * timeMult);
    effect.render(scene, camera);
    r0 = randomRGB(0.1, r0)
    g0 = randomRGB(0.1, g0)
    b0 = randomRGB(0.1, b0)

    effect.domElement.style.color = `rgb(${r0}, ${g0}, ${b0})`;
    // console.log(`rgb(${r0}, ${g0}, ${b0})`)
}

// START!
animate(0);

function handleWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    // renderer.setSize(window.innerWidth, window.innerHeight);
    effect.setSize( window.innerWidth, window.innerHeight);

    gridSizeW =  window.innerWidth/(divider*gap);
    gridSizeH =  window.innerHeight/(divider*gap);
    updateArr(gridSizeW, gridSizeH)
}
// effect.setSize( window.innerWidth, window.innerHeight );
window.addEventListener("resize", handleWindowResize, false);
