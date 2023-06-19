const  chai = require('chai');
const { expect }= require('chai');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

it('fails', function() {
  expect(1).to.equal(0);
});
