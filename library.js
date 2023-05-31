class Library {
    constructor() {
      this.inventory = [];
    }
  
    addBook = (book) => {
      this.inventory.push(book);
    };
    
    getInventory = () => {
      return this.inventory;
    };
  }
  
  module.exports = Library;