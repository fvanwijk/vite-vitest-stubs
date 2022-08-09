/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    /* Comment this block to fix the test */
    components({
      resolvers: [(name) => ({ name, from: "./@" })],
    }),
    /* End block */
  ],
  test: {
    environment: "jsdom",
  },
});
