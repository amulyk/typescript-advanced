{
  class User {
    isAdmin(): boolean { /* Code */
    }

    isActive(): boolean { /* Code */
    }

    canEdit(): boolean { /* Code */
    }

    isActiveAdmin(): boolean { /* Code */
    }
  }

  class UserIsActiveAdmin {
    private _user: User;

    constructor(user: User) {
      this._user = user;
    }

    public invoke(): boolean {
      return this._user.isAdmin()
        && this._user.isActive();
    }
  }

  const user = new User();
  const activeAdminCanEdit: boolean = new UserIsActiveAdmin(user).invoke()
    && user.canEdit();

  if (activeAdminCanEdit) {
    // Do some stuff.
  }
}

// Having our logic sharable to other parts of our application
// Our user class isn’t becoming a dumping ground for methods
// Our conditional logic still benefits from the simplification of our code
