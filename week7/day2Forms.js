import { FORM_API_KEY_CONFIG } from "../config/config.js";

const name = document.getElementById(`name`);
const email = document.getElementById(`email`);
const message = document.getElementById(`message`);

const contactForm = document.getElementById("contactForm");

const nameError = document.getElementById("nameError");

const handleContactFormSubmit = async (e) => {
  try {
    e.preventDefault();
    const contactFormData = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    if (name.value === "") {
      nameError.innerHTML = "Please enter a name";
    } else {
      // net par
      const formApiResponse = await axios.post(
        FORM_API_KEY_CONFIG,
        contactFormData
      );
      console.log(formApiResponse);
      if (formApiResponse.data.ok) {
        alert(`form submitted successfully`);
      } else {
        alert(`form submission failed`);
      }
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

contactForm.addEventListener("submit", handleContactFormSubmit);
