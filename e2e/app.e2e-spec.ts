import { NameGamePage } from './app.po';
import { async } from '@angular/core/testing';

describe('Name Game Web App', () => {
  it('should display welcome message', () => {
    NameGamePage.navigateTo();
    expect(NameGamePage.getHeaderText()).toEqual('Welcome to the Name Game web app!');
  });

  it('should navigate to New Game page', (async () => {
    console.info('anything');
    NameGamePage.navigateTo();
    NameGamePage.clickNewGame();
    NameGamePage.browser.wait(async () => {
      const url = await NameGamePage.browser.getCurrentUrl();
      console.info(url);
      return url === 'new-game';
    });
    // expect(await NameGamePage.getCurrentUrl()).toEqual('new-game');
  }));
});
