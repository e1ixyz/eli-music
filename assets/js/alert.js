// Join Alert
var alerted = localStorage.getItem('alerted') || '';
if (alerted != 'yes') {
 alert("Welcome! For the optimal user experience, please enable audio in your browser settings. =) All songs are made/remixed by me. @license CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/");
 localStorage.setItem('alerted','yes');
  }