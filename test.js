import chai from 'chai';
const expect = chai.expect;
import sinonChai from 'sinon-chai';
chai.use(sinonChai);


it('fails', function() {
  expect(1).to.equal(0);
});
