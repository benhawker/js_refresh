class Order {
  constructor(customer) {
    this.customer = customer;
    this.state = "pending";
    this.products = new Map;
  };

  add_product(product, quantity) {
    this.products[product] = quantity;

    console.log("You have added x to your order")
  };
}



  // def add_product(product, quantity = 1)
  //   @products[product] = (@products[product] ? @products[product] + quantity :  quantity )

  //   puts "You haved added #{quantity} #{product.title}'s to your order"
  // end

  // def show_order
  //   return products.map { |product, quantity| "Item: $#{product.price} / Quantity: #{quantity}\n" }
  // end

  // def order_total
  //   self.total = products.inject(0){|memo, (product, quantity)| (product.price * quantity) + memo}.to_f.round(2)
  // end