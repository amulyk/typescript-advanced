{
  if (user.role === 'admin'
    && user.active
    && user.permissions.some(p => p === 'edit')) {

    // Do stuff.
  }
}

// They are hard to read
// Hard to understand once you’ve read it
// Hard to modify
// Hard to test (well... you can’t really directly test it at all)
