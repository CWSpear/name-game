import { NameGamePage } from './app.po';

describe('Name Game Web App', () => {
  it('should display welcome message', () => {
    NameGamePage.navigateTo();
    expect(NameGamePage.getHeaderText()).toEqual('Welcome to the Name Game web app!');
  });
});
