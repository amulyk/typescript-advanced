{
  const getResult = () => {
    let result: OrderResult = null;

    if (order.isPaid()) {
      result = order.sendToShipping();
    } else {
      if (order.isFraudulent()) {
        result = order.sendToFraudDept();
      } else {
        result = order.tryAgainLater();
      }
    }

    return result;
  };
}
