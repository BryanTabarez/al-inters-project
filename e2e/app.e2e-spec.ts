import { TmdbPage } from './app.po';

describe('tmdb App', () => {
  let page: TmdbPage;

  beforeEach(() => {
    page = new TmdbPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
