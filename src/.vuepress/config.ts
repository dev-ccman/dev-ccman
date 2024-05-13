import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "CcMan Docs",
      description: "Technology changes life",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "CcMan Docs",
      description: "技术改变生活",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
