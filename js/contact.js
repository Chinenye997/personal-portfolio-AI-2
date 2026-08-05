// Initialize EmailJS
emailjs.init({
  publicKey: "3XaN4V12v_DI5UIY0",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_t4nns2o",
      "template_l3h730r",
      this
    )
    .then(() => {
      alert("Message sent successfully!");

      form.reset();
    })
    .catch((error) => {
      console.error(error);

      alert("Sorry, something went wrong. Please try again.");
    });
});