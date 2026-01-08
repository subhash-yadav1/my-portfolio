document.addEventListener("DOMContentLoaded", function () {
  fetch("/my-portfolio/components/navbar/nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav').innerHTML = data;

      // Set the logo URL relative to the page
      const logo = document.querySelector('#nav .logo');
      if (logo) {
        logo.src = "/my-portfolio/logo/subhash-logo.png";
      }

      // Add event listeners AFTER navbar loads
      const bars = document.querySelector('.fa-bars');
      const close = document.querySelector('.fa-circle-xmark');
      if (bars) bars.onclick = openmenu;
      if (close) close.onclick = closemenu;
    })
    .catch(error => console.error('Error loading the navbar:', error));
});

// Define the menu functions
function openmenu() {
  document.getElementById("sidemenu").style.right = "0";
}

function closemenu() {
  document.getElementById("sidemenu").style.right = "-250px"; // Adjust as needed
}
