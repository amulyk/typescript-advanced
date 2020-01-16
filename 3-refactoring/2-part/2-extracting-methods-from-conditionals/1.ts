{
  const isAdmin: boolean = user.role === "admin";
  const userIsActive: boolean = user.active;
  const userCanEdit: boolean = user.permissions.some(p => p === "edit");

  const activeAdminCanEdit: boolean = isAdmin && userIsActive && userCanEdit;

  if (activeAdminCanEdit) {
    // Do stuff.
  }
}

// What’s Wrong Here?
// If user A is an admin?
// If user A is active?
// If user A can edit certain resources?
