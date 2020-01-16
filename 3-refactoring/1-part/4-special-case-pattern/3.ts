{
  interface IOrder {
    placeOrder();
  }

  class PendingOrder implements IOrder {
    constructor() {}

    public placeOrder() {
      // Do some stuff...
    }
  }

  class FraudulentAccountOrder implements IOrder {
    constructor() {}

    public placeOrder() {
      // Do some stuff...
    }
  }

  class PaymentRejectedOrder implements IOrder {
    constructor() {}

    public placeOrder() {
      // Do some stuff...
    }
  }

  const ordersCollection: IOrder[] = getOrders();
  for (const order of ordersCollection) {
    order.placeOrder();
  }
}
