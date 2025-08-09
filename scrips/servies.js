// Constructor for the services
function Service(name, description, duration, price) {
  this.name = name;
  this.description = description;
  this.duration = duration;
  this.price = price;
}

$(document).ready(function () {
  // Add a CSS class for error highlighting if not present
  if (!$("style#error-highlight").length) {
    $(
      "<style id='error-highlight'>.input-error { border: 2px solid red !important; }</style>"
    ).appendTo("head");
  }

  $("#serviceRegistrationForm").on("submit", function (event) {
    event.preventDefault();

    // Remove previous error highlights
    $("#serviceRegistrationForm input").removeClass("input-error");

    let isValid = true;

    const name = $("#serviceName").val().trim();
    const description = $("#serviceDescription").val().trim();
    const duration = $("#serviceDuration").val().trim();
    const price = $("#servicePrice").val().trim();

    if (name === "") {
      $("#serviceName").addClass("input-error");
      isValid = false;
    }
    if (description === "") {
      $("#serviceDescription").addClass("input-error");
      isValid = false;
    }
    if (duration === "") {
      $("#serviceDuration").addClass("input-error");
      isValid = false;
    }
    if (price === "" || isNaN(price) || parseFloat(price) <= 0) {
      $("#servicePrice").addClass("input-error");
      isValid = false;
    }

    if (isValid) {
      // Create new Service object
      const newService = new Service(
        name,
        description,
        duration,
        parseFloat(price)
      );
      // Clear the form
      this.reset();
      // Remove all error highlights
      $("#serviceRegistrationForm input").removeClass("input-error");
      // Optionally, you can log or use newService as needed
      // console.log(newService);
    }
  });

  // Optional: Remove error highlight on input
  $("#serviceRegistrationForm input").on("input", function () {
    $(this).removeClass("input-error");
  });
});
