const sand_canvas = document.getElementById("sand-canvas");
const dataURL = sand_canvas.toDataURL();

alert("Type openPrompt() in the console to bring up the prompt. Type help to get a list of commands.");

function openPrompt () {
  const input = prompt("Command: ");
  
  if (input.toLowerCase() === "help") {
    alert("Press C to open the prompt, type upload to upload your orb, and type browse to browse orbs.");
  }
  
  else if (input.toLowerCase() === "upload") {
    const orb_title = prompt("Orb Title: ");
    
    
  }
  
  else {
    alert("That's not a command!");
  }
}
