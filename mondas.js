const sand_canvas = document.getElementById("sand-canvas");
const dataURL = sand_canvas.toDataURL();

let pre_title = "";

const fps = document.getElementById("fps");

alert("Type openPrompt() in the console to bring up the prompt. Type help to get a list of commands.");

function openPrompt () {
  const input = prompt("Command: ");
  
  if (input.toLowerCase() === "help") {
    alert("Press C to open the prompt, type upload to upload your orb, and type browse to browse orbs.");
  }
  
  else if (input.toLowerCase() === "upload") {
    window.open("https://seven-of-nine.codesalvageon.repl.co/upload?title=gg&url=" + dataURL);
    alert("Uploaded orb!");
  }
  
  else {
    alert("That's not a command!");
  }
}
