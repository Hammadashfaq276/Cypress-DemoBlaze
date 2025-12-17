const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",  // ✅ Reports folder
    overwrite: false,
    html: true,                   // ✅ HTML report
    json: true,                   // ✅ JSON report
    charts: true,                 // ✅ Charts in report
    embeddedScreenshots: true,    // ✅ Embed screenshots
    inlineAssets: true,           // ✅ Inline CSS/JS assets
    saveAllAttempts: false,
    quiet: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    screenshotsFolder: "cypress/screenshots", // ✅ Screenshots folder
    videosFolder: "cypress/videos",           // Optional: Videos folder
    screenshotOnRunFailure: true,
    video: false                               // Optional: Disable video recording
  }
});



