const expect = require('chai').expect;
const tempConvert = require('../temp-convert');
const { convertToFfromC } = require(tempConvert);

describe('Temp Converter', () => {
  it('exists', () => {
    expect(tempConvert).to.be.ok;
  });
  it('converting to F works', () => {
    expect(converttoFfromC(0)).to.equal(32);
  });
});
