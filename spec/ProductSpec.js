describe("Product", function() {

  beforeEach(function() {
    product = new Product("shoe", 1);
  });

  describe("constructor", function() {
    it("creates a new product", function() {
     expect(product).toEqual(jasmine.objectContaining({ title: 'shoe', price: 1, instock: true }));
    });

    it("sets the instock status to true by default", function() {
      expect(product.instock).toEqual(true);
    });
  });

  it("can be set to out of stock status", function() {
    product.markOutOfStock();
    expect(product.instock).toEqual(false);
  });
});
