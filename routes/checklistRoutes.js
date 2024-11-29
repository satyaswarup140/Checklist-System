const express = require("express");
const axios = require("axios");
const { evaluateChecklist } = require("../controllers/controllerChecklist");

const router = express.Router();

router.post("/submit", async (req, res) => {
  const userData = req.body;

  try {
    // Fetch data from the API
    const response = await axios.get("http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639");
    const apiData = response.data; // Assuming the API returns a JSON object

    // Evaluate checklist using user data
    const checklistResults = evaluateChecklist(userData);

    // Create a version of the API data with public emails
    const obfuscatedApiData = {
      _id: apiData._id,
      applicationID: apiData.applicationID,
      applicationNumber: apiData.applicationNumber,
      applicationTypeName: apiData.applicationTypeName,
      riskRating: apiData.riskRating,
      submittedDateFormatted: apiData.submittedDateFormatted,
      ltv: apiData.ltv,
      product: apiData.product,
      noOfApplicants: apiData.noOfApplicants,
      // Public information
      brokerName: apiData.brokerName,
      brokerEmail: apiData.brokerID.email, // Make the email public
      solicitorName: apiData.solicitorID.nameOfFirm, // Assuming you want the firm name
      solicitorEmail: apiData.solicitorID.email, // Make the email public
      // You can add more fields as needed
    };

    res.render("results", { results: checklistResults, apiData: obfuscatedApiData });
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).send("An error occurred while fetching data.");
  }
});

module.exports = router;
