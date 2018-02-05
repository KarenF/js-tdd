const expect = require('chai').expect

describe('App', () => {
  let array

  before(() => {
  })

  after(() => {
  })

  beforeEach(() => {
    array = [1, 2, 3]
  })

  afterEach(() => {
  })

  it('should have a size of 4 when push another value to the array', () => {
    array.push(4)
    expect(array).to.have.lengthOf(4)
  })

  it('should have a size of 2 when pop a value from the array', () => {
    array.pop()
  })

  it('should remove the value 3 when use pop in the array', () => {
    array.pop() === 3
  })
})
