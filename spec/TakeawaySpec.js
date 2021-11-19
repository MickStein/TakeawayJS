'use strict'

describe('Takeaway', () => {
  let takeaway;
  beforeEach(() => {
    takeaway = new Takeaway();
  });

  it('should have a menu with prices', () => {
    expect(takeaway.printMenu()).toEqual('curry: £10 pizza: £10 burger: £13');
  });
});