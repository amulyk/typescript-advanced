{
  interface IPipeableCondition {
    check(): boolean;
  }

  class ConditionsPipe {
    private _conditions: IPipeableCondition[];

    constructor(conditions: IPipeableCondition[]) {
      this._conditions = conditions;
    }

    public check(): boolean {
      return this._conditions.every(p => p.check());
    }
  }

  const pipe = new ConditionsPipe( [
    new UserIsActiveAdmin(user),
    new UserCanEdit(user),
    new UserIsNotBlacklisted(user),
    new UserLivesInAvailableLocation(user)
  ]);

  if (pipe.check()) {
    // Do stuff.
  }
}
