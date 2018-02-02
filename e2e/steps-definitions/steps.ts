// e2e/step-definitions/steps.ts
import { defineSupportCode } from "cucumber";
import { DashboardPageObject } from "../pages/dashboard.po";

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(({ Given, When, Then }) => {

  let page = new DashboardPageObject();

  Given('I am on the Home page', (callback) => {
    page.get().then(() => callback());
  });

  When('I click on {string} button', (button, callback) => {
    page.clickButton(button).then(() => callback());
  });

  Then('the greeting should be {string}', (greeting, callback) => {
    greeting = greeting.replace(/['"]+/g, '');
    page.getGreeting().then(pageGreeting => {
      expect(pageGreeting).to.equal(greeting);
      callback();
    });
 });
});