import { describe, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import App from "./App.vue";

describe("Example test to show that stubs are broken", () => {
  it("should not stub HelloWorld when unplugin-vue-components is used in vite.config.ts", () => {
    render(App, {
      global: {
        stubs: {
          HelloWorld: { props: ["msg"], template: "HELLO WORLD STUB" },
        },
      },
    });

    screen.getByText("HELLO WORLD STUB");
  });
});
