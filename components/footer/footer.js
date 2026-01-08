document.addEventListener("DOMContentLoaded", function () {
    fetch('components/footer/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer").innerHTML = data;
  
        // Set the current year dynamically
        document.getElementById("year").textContent = new Date().getFullYear();
      })
      .catch(error => console.error("Error loading the footer:", error));
  });
  