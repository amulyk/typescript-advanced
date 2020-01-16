{
  class AccountIsVerifiedGate {
    private _accountRepo: AccountRepo;

    constructor(accountRepo: AccountRepo) {
      this._accountRepo = accountRepo;
    }

    async invoke(account: UserAccount) {
      const isVerified = await this._accountRepo.accountIsVerified(account);
      if(!isVerified) {
        throw "Gate exception"; }
      }
  }

  // Both gate classes are supplied as external dependencies.
  await accountIsVerifiedGate.invoke(userAccount);
  await userCanPlaceOrderGate.invoke(user);
  await orderRepo.placeOrder(order);
}

// This is not an entry-level pattern to use,
// but under situations like those above,
// they can make your code much easier to understand
// and reason about. And, you can automate
// what happens when they fail.
