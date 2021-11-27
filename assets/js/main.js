const onContactFormSubmit = (event) => {
  console.log("Potato");
  event.preventDefault();

  $("#contactForm form").get(0).reset();

  const submitModal = new bootstrap.Modal(
    document.getElementById("submitModal")
  );
  submitModal.show();
};
