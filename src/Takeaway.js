class Takeaway {
  constructor() {
    this.menu = {curry: 10, pizza: 10, burger: 13};
  }

  printMenu() {
    const menuString = Object.entries(this.menu);
    let returnValue = "";
    for(const[name, price] of menuString) {
      returnValue += `${name}: £${price} `
    };
    return returnValue.trim();
  };
};