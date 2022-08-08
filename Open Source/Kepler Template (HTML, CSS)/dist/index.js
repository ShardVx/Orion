// Get Btn-Back-Top Button
let fabbtn = document.getElementById('backtop');

// Detect scroll
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    fabbtn.style.display = 'block';
  } else {
    fabbtn.style.display = 'none';
  }
};

// Fabbtn clicked
fabbtn.addEventListener('click', backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

/* Couting animation
let counts = setInterval(updated);
let upto = 0;

function updated() {
  var count = document.getElementById('users');
  count.innerHTML=++upto;
  if (upto===500) {
    clearInterval(counts);
  }
};
*/
