// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti()
  const airhorn = document.querySelector("[value='air-horn']");
  const partyhorn = document.querySelector("[value=party-horn");
  const carhorn = document.querySelector("[value=car-horn");
  let volume = document.getElementById("volume");
  let images = document.getElementsByTagName("img");
  const playsound = document.querySelector("button");
  const hornSelector = document.getElementById("horn-select");
  let audio = document.querySelector("audio")
  
  /* *
   * This event is for changing the image at the top when a new value is selected in the dropdown menu.
   * The associated mp3 file is also updated.
   * */
  hornSelector.addEventListener("change", updateImage);
  function updateImage() {
    let selected = hornSelector.value;
    if(selected == "air-horn"){
      images[0].src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    } else if(selected == "car-horn"){
      images[0].src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    } else {
      images[0].src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  }
  
  /**
  * This function updates the volume icon as someone moves the slider 
  * depending on how loud they want the horn volume to be.
  */
  volume.oninput = function() {
    audio.volume = volume.value / 100;
    if (volume.value == 0) {
      images[1].src = "assets/icons/volume-level-0.svg";
    }
    else if (volume.value > 1 && volume.value < 33) {
      images[1].src = "assets/icons/volume-level-1.svg";
    }
    else if (volume.value > 34 && volume.value < 67) {
      images[1].src = "assets/icons/volume-level-2.svg";
    }
    else {
      images[1].src = "assets/icons/volume-level-3.svg";
    }
  }

  /**
   * This function is for when someone clicks the button to play the sound, the audio is played 
   * and the confetti visual is shown on the website.
   */
  playsound.onclick = function() {
    if (hornSelector.value != "select") {
      audio.play();
      if (hornSelector.value == "party-horn") {
        jsConfetti.addConfetti( {
          emojis: ['🎉', '🎊', '🫦'],
          emojiSize: 70,
          confettiNumber: 100,
        })
    }
      
    }
    
  }
}