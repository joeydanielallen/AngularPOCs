// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./e2e/**/*.ts'],
    tags: [],
    strict: true,
    format: ['progress'],
    dryRun: false,
    compiler: [ 'ts:ts-node']
  },
  onPrepare: function() {
    // browser.manage().window().maximize(); // maximize the browser before executing the feature files
  },
  beforeLaunch: () => {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  }
};
