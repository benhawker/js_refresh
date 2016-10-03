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




//expect( function(){ parser.parse(raw); } ).toThrow(new Error("Parsing is not possible"));

// class Customer

//   VALID_TYPES = [:web, :company]

//   attr_reader :name, :type

//   def initialize(name, type)
//     @name = name.to_s
//     @type = type.to_sym

//     validate!
//   end

//   private

//   def validate!
//     raise "This is not a valid type of customer" unless VALID_TYPES.include? self.type
//   end

// end