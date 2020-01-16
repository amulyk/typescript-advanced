{
  const getResult = () => {
    if (order.isPaid()) {
      return order.sendToShipping();
    }

    if (order.isFraudulent()) {
      return order.sendToFraudDept();
    }

    return order.tryAgainLater();
  };
}

// Fail Fast:
// • Return from our method at the earliest time possible
// • Each condition (if possible), is tested to see if it fails rather than passes
