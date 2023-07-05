import chai from 'chai';
const expect = chai.expect;
import { taxRate }from './application/tax-calculator.js'

// taxRate(amount) return the tax rate to apply, eg. taxRate(100) => 0,10 (10 percent)
// taxOn(amount) return the tax value, eg.taxRate(100) =>  10 (euros)

describe('#taxRate',function() {
  describe('given the amount is zero',function() {
    it("should return zero", function() {
      // given
      const amount = 0;

      // when
      const rate = taxRate(amount);

      // then
      expect(rate).to.equal(0);
    });
  })

})

