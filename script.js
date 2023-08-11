let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
}

let autoSlideIndex = 0;
    autoShowSlides();

    function autoShowSlides() {
        const slides = document.querySelectorAll('.slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        autoSlideIndex++;
        if (autoSlideIndex > slides.length) {
            autoSlideIndex = 1;
        }
        slides[autoSlideIndex - 1].style.display = 'block';
        setTimeout(autoShowSlides, 3000); // Change slide every 3 seconds
    }


   
    function toggleDescription(targetId, linkId) {
        var moreText = document.getElementById(targetId);
        var linkText = document.getElementById(linkId);

        if (moreText.style.display === "none") {
            moreText.style.display = "block";
            linkText.innerHTML = "Read less";
        } else {
            moreText.style.display = "none";
            linkText.innerHTML = "Read more";
        }
    }
    function playVideo() {
        var video = document.getElementById("videoPlayer");
        video.play();
        var overlay = document.querySelector(".video-overlay");
        overlay.style.display = "none";
    }


  // Add a function to handle the "Buy" button click
  function handleBuyButtonClick(imageName) {
    alert(`Thank you for purchasing ${imageName}!`);
    // You can further implement actual purchasing logic here
  }

  // Attach the "Buy" button click event handlers
  document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        const imageCard = event.target.closest('.image-card');
        const image = imageCard.querySelector('img');
        const imageName = image.alt;
        handleBuyButtonClick(imageName);
      });
    });
  });


  const navLinks = document.querySelectorAll('nav ul li a');

  // Function to highlight the active navigation link
  function highlightNavLink() {
    const scrollPosition = window.scrollY;

    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if (section.offsetTop <= scrollPosition + 150 && section.offsetTop + section.offsetHeight > scrollPosition + 150) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Listen for scroll events and update active link
  window.addEventListener('scroll', highlightNavLink);





  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const fixedLinks = document.querySelectorAll(".fixed-links a");

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            fixedLinks.forEach(link => link.classList.remove("active"));
            fixedLinks[index].classList.add("active");
        }
    });
});
   
