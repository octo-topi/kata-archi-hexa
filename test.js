import chai from 'chai';
const expect = chai.expect;
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

describe('#stub',function() {
  it("should return {people: 'jane'}", function() {
    // given
    const stub = sinon.stub();
    stub.returns({people: 'jane'})

    // when
    const data = stub()

    // then
    expect(data).to.deep.equal({people: 'jane'});
  });
  it("should be called once with {parameter: 'foo'}", function() {
    // given
    const stub = sinon.stub();
    stub.returns({people: 'jane'})

    // when
    stub({parameter: 'foo'})

    // then
    expect(stub).to.have.been.calledWith({parameter: 'foo'});
  });
})

