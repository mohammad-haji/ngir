import {CheckMarkPipe} from "./checkMark.pipe";
describe('checkMarkPipe', function () {
  let checkMark: CheckMarkPipe;
  beforeEach(()=>{
    checkMark = new CheckMarkPipe();
  });

  it('transforms boolean value to check mark', () => {
    expect(checkMark.transform(true)).toEqual('✓');
    expect(checkMark.transform(false)).toEqual('✘');
  });
});
