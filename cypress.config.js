const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9s8taj',
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 10000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  env: {
    url: 'https://rahulshettyacademy.com'
  }
});
