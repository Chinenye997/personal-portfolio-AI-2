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
// ==========================
// Mobile Navigation
// ==========================

if (menuBtn && mobileMenu && menuIcon) {

    // Toggle the mobile menu
    menuBtn.addEventListener("click", function () {

        mobileMenu.classList.toggle("hidden");

        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-xmark");

    });

    // Close menu after clicking a link
    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.add("hidden");

            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");

        });

    });

}



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

if (skillBars.length > 0) {
    observer.observe(skillBars[0]);
}


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


/* ==========================
   Podcast Modal
========================== */

function openPodcastModal() {
  const modal = document.getElementById("podcastModal");

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  document.body.style.overflow = "hidden";
}

function closePodcastModal() {
  const modal = document.getElementById("podcastModal");

  modal.classList.remove("flex");
  modal.classList.add("hidden");

  document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("podcastModal");

  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closePodcastModal();
      }
    });
  }
});



/* ==========================
   Podcast Videos
========================== */

document.addEventListener("DOMContentLoaded", function () {

  const playJollof = document.getElementById("play-jollof");
  const jollofContainer = document.getElementById("jollof-container");

  if (playJollof) {
    playJollof.addEventListener("click", function () {

      jollofContainer.innerHTML = `
        <iframe
          class="w-full h-[320px] rounded-2xl"
          src="https://app.heygen.com/embeds/6e5e06f422334a1bb07f55c1227e0a49"
          title="The Great Jollof Debate"
          frameborder="0"
          allow="encrypted-media; fullscreen;"
          allowfullscreen>
        </iframe>
      `;

    });
  }

  const playFocus = document.getElementById("play-focus");
  const focusContainer = document.getElementById("focus-container");

  if (playFocus) {

    playFocus.addEventListener("click", function () {

      focusContainer.innerHTML = `
        <video
          controls
          autoplay
          class="w-full rounded-2xl"
        >
          <source src="../assets/videos/The_Circle_of_Light_Dealing_with_Distractions.mp4" type="video/mp4">
        </video>
      `;

    });

  }

});