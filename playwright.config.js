// @ts-check
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  timeout: 10 * 1000,

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
    trace : 'retain-on-failure',
  },

 
});

