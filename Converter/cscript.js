// Get the form and results elements from the HTML
const form = document.querySelector('form');
const results = document.querySelector('#results');

// Create a conversion function
function convertSensitivity(sensitivity, fromGame, toGame) {
  let convertedSensitivity = 0;

  // Perform the conversion based on the fromGame and toGame values
  switch (fromGame) {
    case 'valorant':
      switch (toGame) {
        case 'csgo':
          convertedSensitivity = sensitivity * 3.18181818;
          break;
        case 'overwatch':
          convertedSensitivity = sensitivity * 10.6;
          break;
        default:
          convertedSensitivity = sensitivity;
      }
      break;
    case 'csgo':
      switch (toGame) {
        case 'valorant':
          convertedSensitivity = sensitivity / 3.18181818;
          break;
        case 'overwatch':
          convertedSensitivity = sensitivity * 3.33333333;
          break;
        default:
          convertedSensitivity = sensitivity;
      }
      break;
    case 'overwatch':
      switch (toGame) {
        case 'valorant':
          convertedSensitivity = sensitivity / 10.6;
          break;
        case 'csgo':
          convertedSensitivity = sensitivity / 3.33333333;
          break;
        default:
          convertedSensitivity = sensitivity;
      }
      break;
    default:
      convertedSensitivity = sensitivity;
  }

  // Return the converted sensitivity value
  return convertedSensitivity;
}

// Add an event listener to the form submit button
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get the input values from the form
  const sensitivity = parseFloat(document.querySelector('#sensitivity').value);
  const fromGame = document.querySelector('#fromGame').value;
  const toGame = document.querySelector('#toGame').value;

  // Convert the sensitivity
  const convertedSensitivity = convertSensitivity(sensitivity, fromGame, toGame);

  // Display the results on the page
  results.innerHTML = `<p>Converted Sensitivity: ${convertedSensitivity.toFixed(2)}</p>`;
});