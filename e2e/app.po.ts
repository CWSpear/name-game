import { browser, element, by } from 'protractor';

export class NameGamePage {
  static browser = browser;

  static navigateTo(url: string = '/') {
    return browser.get(url);
  }

  static async getCurrentUrl() {
    console.log(await browser.getCurrentUrl());
    return (await browser.getCurrentUrl()).replace(browser.baseUrl, '');
  }

  static clickNewGame() {
    return element(by.css('.e2e-create-game-link')).click();
  }

  static getHeaderText() {
    return element(by.css('app-root h1')).getText();
  }
}
