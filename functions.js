const axios = require("axios");
const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  chechValue: x => x,
  createUser: () => {
    const user = {
      firstName: "MD"
    };
    user["lastName"] = "Rahaduzzaman";
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.data)
      .catch(err => "error getting Data")
};

module.exports = functions;
