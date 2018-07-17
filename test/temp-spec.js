const expect = require('chai').expect;
const tempConvert = require('../temp-convert');
const { convertToFfromC } = require(tempConvert);

describe('Temp Converter', () => {
  it('exists', () => {
    expect(tempConvert).to.be.ok;
  });
  it('converting to F from C works', () => {
    expect(converttoFfromC(0)).to.equal(32);
  });
  it('converting to C from F works', () => {
    expect(converttoCfromF(32)).to.equal(0);
  });
});
