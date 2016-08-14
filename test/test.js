var chai = require('chai');
var expect = chai.expect;
'use strict';

// Need to figure out why import doesn't work here
// import chai, { expect } from 'chai';

describe('Mocha & Chai works', () => {
  it('Should pass', () => {
    expect(2).to.equal(2);
  });
});