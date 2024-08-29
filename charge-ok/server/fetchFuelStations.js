// TODO you need to request for this
// GET /api/alt-fuel-stations/v1.json?api_key=YOUR_API_KEY&status=E&fuel_type=ELEC,HY&access=public

const axios = require("axios");
const charger_api_key = process.env.CHARGER_API_KEY;

// Define the base URL for the API
const baseURL = "https://developer.nrel.gov/api/alt-fuel-stations/v1"; // Replace with the actual base URL

// Define the parameters
const params = {
  format: "json", // Response format
  api_key: charger_api_key, // Replace with your actual API key
  //   status: "E", // Available stations
  //   fuel_type: "ELEC,HY", // Electric or Hydrogen fuel
  fuel_type: "ELEC", // Electric
  access: "public", // Public access
};

// Make the API request
axios
  .get(baseURL, { params })
  .then((response) => {
    // Handle the response data
    console.log("Data:", response.data);
  })
  .catch((error) => {
    // Handle any errors
    console.error("Error:", error);
  });
