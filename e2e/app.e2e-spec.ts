import { NgAggPage } from './app.po';

describe('ng-agg App', function() {
  let page: NgAggPage;

  beforeEach(() => {
    page = new NgAggPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
