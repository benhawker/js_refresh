class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
    this.instock = true;
  }

  inStock() {
    return(this.instock)
  }

  markOutOfStock() {
    this.instock = false;
  }

  markInStock() {
    this.instock = true;
  }
}

