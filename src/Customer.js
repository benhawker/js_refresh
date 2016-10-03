// Defines custom InvalidCustomer error class

class InvalidCustomer extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  };
};


class Customer {
  constructor(name, type) {
    this.name = name;
    this.type = type;

    if (this.type != "web") {
      throw new InvalidCustomer("Invalid Type specified");
    };
  };
}
