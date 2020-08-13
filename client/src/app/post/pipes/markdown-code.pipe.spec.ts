import { MarkdownCodePipe } from './markdown-code.pipe';

describe('MarkdownCodePipe', () => {
  it('create an instance', () => {
    const pipe = new MarkdownCodePipe();
    expect(pipe).toBeTruthy();
  });
});
