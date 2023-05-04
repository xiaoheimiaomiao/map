import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/map", component: "@/pages/Map" },
  ],

  npmClient: "yarn",
  tailwindcss: {},
  request: {
    dataField: "data",
  },
  proxy: {
    "/traffic": {
      target: "http://182.92.203.199/",
      changeOrigin: true,
      pathRewrite: { "^/traffic": "/traffic" },
    },
  },
  plugins: ["@umijs/plugins/dist/tailwindcss", "@umijs/plugins/dist/request"],
});
