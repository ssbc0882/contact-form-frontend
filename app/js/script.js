document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;
  const fields = ["firstName", "lastName", "email", "message"];
  fields.forEach(function (field) {
    const input = document.getElementById(field);
    const errorMessage = input.nextElementSibling;
    if (!input.value.trim()) {
      input.classList.add("error-msg");
      errorMessage.classList.remove("hidden");
      isValid = false;
    } else {
      input.classList.remove("error-msg");
      errorMessage.classList.add("hidden");
    }
  });

  //query radio buttons selection
  const queryType = document.querySelector('input[name="query-type"]:checked');
  const querySectionError = document.querySelector(".qerror");

  if (!queryType) {
    querySectionError.classList.remove("hidden");
    isValid = false;
  } else {
    querySectionError.classList.add("hidden");
  }

  // consent checkbox section
  const consent = document.getElementById("consent");
  const consentError = consent.parentElement.nextElementSibling;
  if (!consent.checked) {
    consentError.classList.remove("hidden");
    isValid = false;
  } else {
    consentError.classList.add("hidden");
  }

  if (!isValid) {
    event.preventDefault();
  } else {
    event.preventDefault();

    document.getElementById("successMessage").classList.remove("hidden");

    document.getElementById("form").reset();
  }
});
