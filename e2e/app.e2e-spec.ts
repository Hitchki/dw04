import { DwPage } from './app.po';

describe('dw App', function() {
  let page: DwPage;

  beforeEach(() => {
    page = new DwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
