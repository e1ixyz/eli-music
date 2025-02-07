// Preloader
document.addEventListener("DOMContentLoaded", function() {
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");
  setTimeout(function() {
    preloader.style.display = "none";
    mainContent.classList.add("visible");
  }, 500);
});


var isToggled = false; // Define isToggled variable here
        
function setBackgroundImage(image) {
    document.body.style.backgroundImage = "url('assets/img/" + image + "')";
}

var bgImages = ["bg1.gif", "bg2.gif", "bg3.gif"];
var currentBgIndex = getRandomIndex(bgImages); // Randomly select an initial background

setBackgroundImage(bgImages[currentBgIndex]);

function toggleStylesheet() {
    isToggled = !isToggled;

    if (isToggled) {
        document.getElementById("stylesheet").setAttribute("href", "assets/css/win95_dark.css");
        setBackgroundImage("bg_dark.gif");
    } else {
        document.getElementById("stylesheet").setAttribute("href", "assets/css/win95.css");
        // Reset the currentBgIndex to choose a random background from the array
        currentBgIndex = getRandomIndex(bgImages);
        setBackgroundImage(bgImages[currentBgIndex]);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Add a click event listener to the button
    document.getElementById("toggleButton").addEventListener("click", toggleStylesheet);
});

function cycleBackgroundImages() {
    currentBgIndex = (currentBgIndex + 1) % bgImages.length;
    var randomBg = bgImages[currentBgIndex];
    setBackgroundImage(randomBg);
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}