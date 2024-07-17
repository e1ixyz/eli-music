// Join Alert
var alerted = localStorage.getItem('alerted') || '';
if (alerted != 'yes') {
 alert("Welcome! For the optimal user experience, please enable audio in your browser settings. =) All songs are made/remixed by me.");
 localStorage.setItem('alerted','yes');
  }