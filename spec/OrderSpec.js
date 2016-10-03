describe("Order", function() {

  beforeEach(function() {
    customer = new Customer("ben", "web");
    order = new Order(customer);
  });

  describe("constructor", function() {
    it("creates a new order", function() {
     expect(order).toEqual(jasmine.objectContaining({ customer, state: 'pending', products: new Map }));
    });
  });

  it("adds an item to the order", function() {
    shoe = new Product("shoe", 1);
    order.add_product(shoe, 2)

    expect(Object.keys(order.products).length).toEqual(1)

    expect(Object.keys(order.products)).toEqual(["shoe"])
    expect(order.products["shoe"]).toEqual(2)
  });
});
