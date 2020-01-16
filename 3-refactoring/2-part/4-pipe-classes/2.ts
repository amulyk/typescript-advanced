{
  interface IPipeableCondition {
    check(): boolean;
  }

  class UserIsActiveAdmin implements IPipeableCondition {
    private _user: User;

    constructor(user: User) {
      this._user = user;
    }

    public check(): boolean {
      return this._user.isAdmin()
        && this._user.isActive();
    }
  }

  const conditions: IPipeableCondition[] = [
    new UserIsActiveAdmin(user),
    new UserCanEdit(user),
    new UserIsNotBlacklisted(user),
    new UserLivesInAvailableLocation(user)
  ];

  const valid = conditions.every(p => p.check());

  if (valid) {
    // Do stuff.
  }
}
