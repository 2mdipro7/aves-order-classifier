const photoInput = document.getElementById("photo");
const imagePreview = document.getElementById("image-preview");
const loadingIndicator = document.getElementById("loading-indicator");
const resultsContainer = document.getElementById("results");
const errorMessage = document.getElementById("error-message");

photoInput.addEventListener("change", handlePhotoUpload);

function handlePhotoUpload(event) {
  const file = event.target.files[0];

  // Display the image preview
  const reader = new FileReader();
  reader.onload = function() {
    const image = document.createElement("img");
    image.src = reader.result;
    image.alt = "Uploaded Image";
    imagePreview.innerHTML = "";
    imagePreview.appendChild(image);
  };
  reader.readAsDataURL(file);

  // Perform the prediction
  predictOrder(file);
}

async function predictOrder(file) {
  try {
    showLoadingIndicator();

    // Perform API request and get the prediction result
    const response = await fetch("https://dipro7-aves-order-classifier.hf.space/run/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: [file] })
    });
    const result = await response.json();

    // Process the prediction result
    const label = result.data[0].label;
    displayPredictionResult(label);

    hideLoadingIndicator();
  } catch (error) {
    displayErrorMessage("An error occurred during prediction. Please try again.");
    hideLoadingIndicator();
  }
}

function showLoadingIndicator() {
  loadingIndicator.style.display = "block";
}

function hideLoadingIndicator() {
  loadingIndicator.style.display = "none";
}

function displayPredictionResult(label) {
  resultsContainer.innerHTML = `<p>The predicted bird order is: ${label}</p>`;
}

function displayErrorMessage(message) {
  errorMessage.textContent = message;
}
