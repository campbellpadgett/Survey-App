const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/api/current_user", "/auth/google"],
    createProxyMiddleware({
      target: "https://calm-cove-98603.herokuapp.com",
    })
  );
};