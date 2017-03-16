import { NameGamePage } from './app.po';

describe('name-game App', () => {
  let page: NameGamePage;

  beforeEach(() => {
    page = new NameGamePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to the Name Game web app!');
  });
});
