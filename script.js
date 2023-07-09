const sliderImages = document.querySelectorAll('.slider-image');
let currentIndex = 0;

sliderImages.forEach((image, index) => {
    image.style.left = `${index * 100}%`;
});

function showSlide() {
  sliderImages.forEach((image) => {
    image.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
);
currentIndex ++ ;
if (currentIndex >= sliderImages.length) {
    currentIndex = 0;
}
}

setInterval(showSlide, 2500);

//----------------------------------------------------------------------------------------------
const toggleButton = document.querySelector('.burger');
const menu = document.querySelector('#tog');

// Function to handle the toggle button visibility
function toggleButtonVisibility() {
  if (window.innerWidth <= 900) {
    toggleButton.style.display = 'block';
  } else {
    toggleButton.style.display = 'none';
    menu.classList.remove('active'); // Hide the menu when toggle button is not visible
  }
}

// Add initial visibility check
toggleButtonVisibility();

// Add a resize event listener to handle visibility changes on window resize
window.addEventListener('resize', toggleButtonVisibility);

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', function() {
  // Toggle the "active" class on the menu
  menu.classList.toggle('active');//the role of toggle is to add the class if it doesn't exist and remove it if it does
});

document.getElementById("hist").onclick = function () {
  
  location.href = "histoire.html";
  
};