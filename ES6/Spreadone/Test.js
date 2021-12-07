let user = {
  userName: "Bhanu",
  email: "bhanu@ks.com",
  password: "ksksks",
  cc: 11111111111,
};
let new_User = {
  ...user,
  password: ";sajlfsal;fkjaslfkajfl;asfk",
  cc: "sfkjaljflsa9284819;kja",
};
console.log(new_User);
