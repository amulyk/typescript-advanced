{
  enum OrderStatus {
    Pending, FraudulentAccount, PaymentRejected
  }

  class Order {
    constructor(public status: OrderStatus) {

    }

    public placeOrder() {
      // Do some stuff...
    }
  }

  const order = new Order(0);

  if (order.status === OrderStatus.Pending) {
    order.placeOrder();
  } else if(order.status === OrderStatus.FraudulentAccount) {
    // Do something else
  }
}
