const sand_canvas = document.getElementById("sand-canvas");
const dataURL = sand_canvas.toDataURL();

alert("Press C to open the prompt. Type help to get a list of commands.");

function openPrompt () {
  const input = prompt("Command: ");
  
  if (input.toLowerCase() === "help") {
    alert("Press C to open the prompt, type upload to upload your orb, and type browse to browse orbs.");
  }
  
  else {
    alert("That's not a command!");
  }
}

document.onkeypress = function (eventKeyName) {
  eventKeyName = eventKeyName || window.event;
  
  if (eventKeyName.keyCode === 67) {
    openPrompt();
  } 
};
