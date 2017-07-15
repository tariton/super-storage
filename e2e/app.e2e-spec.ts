import { SuperStoragePage } from './app.po';

describe('super-storage App', () => {
  let page: SuperStoragePage;

  beforeEach(() => {
    page = new SuperStoragePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
