'use strict'

describe('Takeaway', () => {
  let takeaway;
  beforeEach(() => {
    takeaway = new Takeaway();
  });

  it('should have a menu with prices', () => {
    expect(takeaway.printMenu()).toEqual('curry: £10 pizza: £10 burger: £13');
  });

  it('should add selected items to basket', () => {
    takeaway.add('curry');
    expect(takeaway.basket).toEqual({curry: 10});

    takeaway.add('burger');
    expect(takeaway.basket).toEqual({curry: 10, burger: 13});
  });

  it('should sum the total cost of the items in the basket', () => {
    takeaway.add('curry')
    takeaway.add('pizza')
    takeaway.add('burger')
    expect(takeaway.total()).toEqual(33);
  });
});