{
  const accountIsVerified = await accountRepo.accountIsVerified(userAccount);
  const canPlaceOrder = await orderRepo.userCanPlaceOrder(user);

  if (accountIsVerified) {
    if (canPlaceOrder) {
      await orderRepo.placeOrder(order);
    }
  }
}
