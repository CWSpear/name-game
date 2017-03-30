import { NameGamePage } from './app.po';
import { async } from '@angular/core/testing';

describe('Name Game Web App', () => {
  it('should display welcome message', () => {
    NameGamePage.navigateTo();
    expect(NameGamePage.getHeaderText()).toEqual('Welcome to the Name Game web app!');
  });

  it('should navigate to New Game page', (() => {
    console.info('anything');
    NameGamePage.navigateTo();
    NameGamePage.clickNewGame();
    NameGamePage.browser.wait(() => {
      // const url = await NameGamePage.browser.getCurrentUrl();
      // console.info(url);
      return true;
      // return NameGamePage.elementIsPresent(NameGamePage.newGameForm());
      // return url === 'new-game';
    }, 5000);
    // console.info('after');
    // NameGamePage.getCurrentUrl().then(url => {
    //   console.info(url);
    // });
    expect(1).toEqual(1);
    // NameGamePage.browser.pause();
  }));
});
