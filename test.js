import * as chai from 'chai';
import { expect } from 'chai';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

it('fails', function() {
  expect(1).to.equal(0);
});
