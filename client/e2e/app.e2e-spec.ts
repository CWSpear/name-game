import { NameGamePage } from './app.po';

describe('name-game App', () => {
  let page: NameGamePage;

  beforeEach(() => {
    page = new NameGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(' works!');
  });
});
