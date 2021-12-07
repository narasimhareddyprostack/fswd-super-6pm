const bcrypt = require("bcryptjs");
let user = {
  userName: "Bhanu",
  email: "bhanu@ks.com",
  password: "ksksks",
  cc: "1234567812345678",
};
let salt = bcrypt.genSaltSync(10);
let newPassword = bcrypt.hashSync(user.password, salt);
let newcc = bcrypt.hashSync(user.cc, salt);
console.log(newPassword);
console.log(newcc);
let new_user = { ...user, password: newPassword, cc: newcc };
console.log(new_user);

let result = bcrypt.compareSync("ksksks1", new_user.password);
console.log(result);
