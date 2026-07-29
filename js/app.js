// ==========================
// Mobile Navigation
// ==========================

// Select the theme toggle button
const themeToggle = document.getElementById("theme-toggle");

// Select the menu button
const menuBtn = document.getElementById("menu-btn");

// Select the mobile menu
const mobileMenu = document.getElementById("mobile-menu");
// Select the menu icon
const menuIcon = document.getElementById("menu-icon");
// Select all mobile navigation links
const mobileLinks = document.querySelectorAll("#mobile-menu a");

// Toggle the mobile menu
menuBtn.addEventListener("click", function () {

    // Show or hide the menu
    mobileMenu.classList.toggle("hidden");

    // Change the icon
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");

});

// Close the mobile menu when a link is clicked
mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.add("hidden");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});

// ==========================
// Light & Dark Mode
// ==========================

// Toggle dark mode
// themeToggle.addEventListener("click", function () {

//     document.documentElement.classList.toggle("dark");

// });

/* ==========================
   Skills Animation
========================== */

const skillBars = document.querySelectorAll(".skill-bar");
const skillPercents = document.querySelectorAll(".skill-percent");

const observer = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting) {

        skillBars.forEach((bar, index) => {

            setTimeout(() => {

                // Animate the bar
                bar.style.width = bar.dataset.width;

                // Animate the percentage
                const percent = skillPercents[index];
                const target = parseInt(percent.dataset.target);

                let current = 0;

                const timer = setInterval(() => {

                    if (current >= target) {

                        clearInterval(timer);

                    } else {

                        current++;

                        percent.textContent = current + "%";

                    }

                }, 20);

            }, index * 250);

        });

        observer.disconnect();

    }

}, {
    threshold: 0.3
});

observer.observe(skillBars[0]);


/* ==========================
   Translation Modal
========================== */

function openTranslationModal() {
  const modal = document.getElementById("translationModal");

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  document.body.style.overflow = "hidden";
}

function closeTranslationModal() {
  const modal = document.getElementById("translationModal");

  modal.classList.remove("flex");
  modal.classList.add("hidden");

  document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("translationModal");

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeTranslationModal();
    }
  });
});


/* ==========================
   Sentiment Analysis Modal
========================== */

function openSentimentModal() {
  const modal = document.getElementById("sentimentModal");

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  document.body.style.overflow = "hidden";
}

function closeSentimentModal() {
  const modal = document.getElementById("sentimentModal");

  modal.classList.remove("flex");
  modal.classList.add("hidden");

  document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("sentimentModal");

  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeSentimentModal();
      }
    });
  }
});