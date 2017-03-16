import { browser, element, by } from 'protractor';

export class NameGamePage {
  static navigateTo() {
    return browser.get('/');
  }

  static getHeaderText() {
    return element(by.css('app-root h1')).getText();
  }
}
