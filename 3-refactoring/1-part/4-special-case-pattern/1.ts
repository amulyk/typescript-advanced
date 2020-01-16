{
  enum OrderStatus {
    Pending, FraudulentAccount, PaymentRejected
  }

  class Order {
    public status: OrderStatus;

    constructor() {

    }

    public placeOrder() {
      // Do some stuff...
    }
  }
}
