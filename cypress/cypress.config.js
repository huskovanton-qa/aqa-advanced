const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  modifyObstructiveCode: false,
  defaultCommandTimeout: 5000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
