import {SplitStringPipe} from "./split-string.pipe";
describe('SplitStringPipe spec', () => {
  let splitStringPipe: SplitStringPipe;
  let text: string = 'Homero volt it vis';
  beforeEach(() => {
    splitStringPipe = new SplitStringPipe();
  });
  it('should split strings that size if more than specified', () => {
    expect(splitStringPipe.transform(text)).toMatch('Homero vol...');
    expect(splitStringPipe.transform(text + text)).not.toMatch(text);
    expect(splitStringPipe.transform(text + text, 2)).toMatch('Ho...');
  });
});
