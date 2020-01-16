const user = {
  emailAddress: "test@test.com"
};

emailUser(user.emailAddress);
user.emailAddress=2;

emailUser(user.emailAddress);
