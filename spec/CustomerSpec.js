describe("Customer", function() {

  beforeEach(function() {
    customer = new Customer("ben", "web");
  });

  describe("constructor", function() {
    it("creates a new customer", function() {
     expect(customer).toEqual(jasmine.objectContaining({ name: "ben", type: "web" }));
    });

    it("throws an exception if the user is invalid", function() {
      expect( function() { new Customer("ben", "wrong") } ).toThrow(new Error("Invalid Type specified"));
    });
  });
});
