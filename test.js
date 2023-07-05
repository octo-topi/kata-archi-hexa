import chai from 'chai';
import sinon from 'sinon';

import sinonChai from 'sinon-chai'

chai.use(sinonChai);

const expect = chai.expect;
import {taxRate} from './application/tax-calculator.js'
import {forGettingTaxes} from "./application/driving-ports/for-getting-taxes.js";
import {taxRepository} from './application/driven-ports/tax-repository.js'

// taxRate(amount) return the tax rate to apply, eg. taxRate(100) => 0,10 (10 percent)
// taxOn(amount) return the tax value, eg.taxRate(100) =>  10 (euros)

describe('Tests ', function () {

  describe('#taxRate', function () {
    describe('given the amount is anything', function () {
      it("should return zero", function () {
        // given
        const amount = 0;
        const taxRepository = {get: () => 0}

        // when
        const rate = taxRate(amount, taxRepository);

        // then
        expect(rate).to.equal(0);
      });
    })
  })

  describe('forGettingTaxes taxRate', function () {
    describe('given the amount is anything', function () {
      it("should return zero", function () {
        // given
        const amount = 0;

        // when
        const rate = forGettingTaxes.taxRate(amount, taxRepository);

        // then
        expect(rate).to.equal(0);
      });
      it("should call taxRepository", function () {
        // given
        const amount = 0;
        const get = sinon.stub();
        get.returns(0)
        const taxRepositoryStub = {get}

        // when
        forGettingTaxes.taxRate(amount, taxRepositoryStub);

        // then
        expect(get).to.have.been.calledWith(amount);
      });
    })
  });

  describe('taxRepository', function () {
   })
})
