{
  const isAdmin: boolean = user.role === "admin";
  const userIsActive: boolean = user.active;
  const userCanEdit: boolean = user.permissions.some(p => p === "edit");

  const activeAdminCanEdit: boolean = isAdmin && userIsActive && userCanEdit;

  if (activeAdminCanEdit) {
    // Do stuff.
  }
}

// As a general guideline, try to make your if statements
// refer to the condition of one variable. If you are checking
// multiple variables, then consider combining them into
// a new one that will add more clarity and semantic meaning.
