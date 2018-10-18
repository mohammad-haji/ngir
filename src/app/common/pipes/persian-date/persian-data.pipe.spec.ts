import {PersianDatePipe} from "./persian-date.pipe";
describe('PersianDataPipe spec', ()=>{
  let persianData: PersianDatePipe;
  let currentDate = 1495634312000;
  beforeEach(()=>{
    persianData = new PersianDatePipe();
  });
  it('should change time stamp to persian data with expected format', ()=>{
    expect(persianData.transform(currentDate)).toEqual('1396/3/3');
    expect(persianData.transform(currentDate, 'HH:mm:ss - jYYYY/jM/jD')).toEqual('18:28:32 - 1396/3/3');
    expect(persianData.transform(currentDate)).not.toEqual('1396/3/8');
  });
});
