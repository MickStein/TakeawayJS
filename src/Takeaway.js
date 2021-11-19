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
  };
};