class Takeaway {
  constructor() {
    this.menu = {curry: 10};
  }

  printMenu() {
    return `${Object.keys(this.menu)}: £${Object.values(this.menu)}`;
  };
};