// explore.js

window.addEventListener('DOMContentLoaded', init);

let voices = [];

function init() {
  let text = document.querySelector('textarea');
  let image = document.querySelector('img');
  let button = document.querySelector('button');
  let voiceselect = document.querySelector('#voice-select');


  
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }
  
    voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  
  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  

  button.onclick = function(){
    const utterThis = new SpeechSynthesisUtterance(text.value);
    const selectedOption = voiceselect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        console.log(voices[i]);
      }
    }
    
    speechSynthesis.speak(utterThis);
    image.src = "assets/images/smiling-open.png";
    
    utterThis.onend = (event) => {
      image.src="assets/images/smiling.png";
    }
   
  }
  
}