const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/ecommerce-vue3-frontend-user/"
      : "/",
  transpileDependencies: true,
});
