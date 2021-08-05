const panel_title = document.querySelector(".title-bar-text");
const window_body = document.querySelector(".window-body.hud-body");
const fps = document.getElementById("fps");

const sand_canvas = document.getElementById("sand-canvas");
const sky_canvas = document.getElementById("sky-canvas");

const sand_render = sand_canvas.getContext("2d");
const sky_render = sky_canvas.getContext("2d");

panel_title.innerText = "MONDAS NETWORK";
fps.innerText = "CONNECTED TO MONDAS";
window_body.style.opacity = "0.8";
window_body.style.backgroundColor = "blue";
