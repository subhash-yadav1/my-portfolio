document.addEventListener("DOMContentLoaded", function () {
  fetch("/components/navbar/nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("nav").innerHTML = data;

      // Add event listeners AFTER navbar loads
      document.querySelector(".fa-bars").onclick = openmenu;
      document.querySelector(".fa-circle-xmark").onclick = closemenu;
    })
    .catch(error => console.error("Error loading the navbar:", error));
});

// Define the menu functions
function openmenu() {
  document.getElementById("sidemenu").style.right = "0";
}

function closemenu() {
  document.getElementById("sidemenu").style.right = "-250px"; // Adjust as needed
}
