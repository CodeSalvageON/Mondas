const panel_title = document.querySelector(".title-bar-text");
const window_body = document.querySelector(".window-body.hud-body");

panel_title.innerText = "MONDAS";
window_body.innerHTML = "<pre>Press E to upload your orb. Press V to browse orbs.</pre>" + window_body.innerHTML;
