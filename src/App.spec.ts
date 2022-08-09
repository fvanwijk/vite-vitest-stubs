import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import App from "./App.vue";

describe("Example test to show that stubs are broken", () => {
  it("should not stub HelloWorld when unplugin-vue-components is used in vite.config.ts", () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          HelloWorld: {
            props: ["msg"],
            template: '<span id="hello">HELLO WORLD STUB</span>',
          },
        },
      },
    });

    expect(wrapper.find("#hello").text()).to.equals("HELLO WORLD STUB");
  });
});
