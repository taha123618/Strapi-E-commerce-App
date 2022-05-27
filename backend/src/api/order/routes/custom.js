// path: ./src/api/restaurant/routes/custom-restaurant.js

module.exports = {
  routes: [
    // POSt method kre ge payment ke lye
    // for pre
    {
      method: "POST",
      path: "/orders/pretransaction",
      handler: "custom.pre",
    },
    // for post
    {
      method: "POST",
      path: "/orders/posttransaction",
      handler: "custom.post",
    },
  ],
};
