{
  const activeAdminCanEdit: boolean = user.isAdmin()
    && user.isActive()
    && user.canEdit();

  if (activeAdminCanEdit) {
    // Do stuff.
  }
}
