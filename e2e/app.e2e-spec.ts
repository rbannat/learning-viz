import { LearningVizPage } from './app.po';

describe('learning-viz App', () => {
  let page: LearningVizPage;

  beforeEach(() => {
    page = new LearningVizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
