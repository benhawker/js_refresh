class Order {
  constructor(customer) {
    this.customer = customer;
    this.state = "pending";
    this.products = new Map;
  };

  add_product(product, quantity) {
    this.products[product.title] = quantity;
    console.log(`You have added ${quantity} x ${product.title} to your order`)
  };

  show_order() {
    console.log(`Customer : ${this.customer}`)

    // etc.
  };
}
