var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function() {
  "use strict";
  const main = "";
  class Tabs {
    constructor(domNode) {
      __publicField(this, "tabLinks", []);
      __publicField(this, "tabContents", []);
      __publicField(this, "tabFocusIndex", 0);
      this.tabLinks = Array.from(domNode.querySelectorAll(".zb-el-tabs-nav-title"));
      this.tabContents = Array.from(domNode.querySelectorAll(".zb-el-tabsItem"));
      domNode.addEventListener("click", (event) => this.onTabClick(event));
      this.tabLinks.forEach((element) => {
        element.addEventListener("keydown", (event) => this.onKeyDown(event));
      });
    }
    onKeyDown(event) {
      if (event.code === "ArrowRight" || event.code === "ArrowDown") {
        this.tabLinks[this.tabFocusIndex].tabIndex = -1;
        this.tabFocusIndex++;
        if (this.tabFocusIndex >= this.tabLinks.length) {
          this.tabFocusIndex = 0;
        }
        this.tabLinks[this.tabFocusIndex].focus();
      } else if (event.code === "ArrowLeft" || event.code === "ArrowUp") {
        this.tabFocusIndex--;
        if (this.tabFocusIndex < 0) {
          this.tabFocusIndex = this.tabLinks.length - 1;
        }
        this.tabLinks[this.tabFocusIndex].focus();
      }
      this.tabLinks[this.tabFocusIndex].click();
    }
    onTabClick(event) {
      const domNode = event.target;
      if (domNode && domNode.classList.contains("zb-el-tabs-nav-title")) {
        this.activateTab(domNode);
      }
    }
    activateTab(tab) {
      [...this.tabLinks, ...this.tabContents].forEach((item) => {
        item.classList.remove("zb-el-tabs-nav--active");
        item.setAttribute("tabindex", "-1");
        item.setAttribute("aria-selected", "false");
      });
      tab.classList.add("zb-el-tabs-nav--active");
      tab.setAttribute("tabindex", "0");
      tab.setAttribute("aria-selected", "true");
      const tabIndex = this.tabLinks.indexOf(tab);
      if (tabIndex !== -1 && this.tabContents[tabIndex]) {
        this.tabContents[tabIndex].classList.add("zb-el-tabs-nav--active");
      }
    }
  }
  document.querySelectorAll(".zb-el-tabs").forEach((domNode) => {
    new Tabs(domNode);
  });
})();
