import { MyPage } from './app.po';

describe('my App', () => {
  let page: MyPage;

  beforeEach(() => {
    page = new MyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
