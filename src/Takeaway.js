class Takeaway {
  constructor() {
    this.menu = {curry: 10, pizza: 10, burger: 13};
    this.basket = {};
  }

  printMenu() {
    const menuString = Object.entries(this.menu);
    let returnValue = "";
    for(const[name, price] of menuString) {
      returnValue += `${name}: £${price} `
    };
    return returnValue.trim();
  };

  add(item) {
    let userBasket = this.basket;
    let menuList = this.menu;
    if(item in menuList) {
      userBasket[item] = menuList[item];
    }
    return userBasket;
  };

  total() {
    const basketList = Object.entries(this.basket);
    let totalCost = [];
    for(const[name, price] of basketList) {
        totalCost.push(price);
    };

    return totalCost.reduce((a, b) => a + b, 0);
  };
};