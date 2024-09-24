(function() {
  "use strict";
  const main = "";
  document.addEventListener("click", onAccordionClick);
  document.addEventListener("keydown", onAccordionKeydown);
  function onAccordionClick(event) {
    if (event.target) {
      initAccordion(event.target);
    }
  }
  function onAccordionKeydown(event) {
    if (event.code == "Space") {
      initAccordion(event.target);
    }
  }
  function initAccordion(domNode) {
    if (!domNode.closest(".zb-el-accordions-accordionTitle")) {
      return;
    }
    const wrapperElement = domNode.closest(".zb-el-accordions");
    const accordionType = wrapperElement.dataset.accordionType || "accordion";
    const $clickedItem = domNode.closest(".zb-el-accordions-accordionWrapper");
    if (accordionType === "accordion") {
      if ($clickedItem == null ? void 0 : $clickedItem.classList.contains("zb-el-accordions--active")) {
        closeItem($clickedItem);
      } else {
        const activeAccordions = wrapperElement.querySelectorAll(".zb-el-accordions--active");
        activeAccordions.forEach((accordion) => {
          if (accordion instanceof HTMLElement) {
            closeItem(accordion);
          }
        });
        openItem($clickedItem);
      }
    } else {
      if ($clickedItem == null ? void 0 : $clickedItem.classList.contains("zb-el-accordions--active")) {
        closeItem($clickedItem);
      } else {
        openItem($clickedItem);
      }
    }
  }
  function closeItem(item) {
    const contentWrapper = item.querySelector(".zb-el-accordions-accordionContent");
    if (!contentWrapper) {
      return;
    }
    window.requestAnimationFrame(() => {
      const height = contentWrapper.clientHeight;
      contentWrapper.style.height = `${height}px`;
      item.classList.add("zb-el-accordions--transition");
      window.requestAnimationFrame(() => {
        contentWrapper.style.height = `${0}px`;
      });
      const complete = () => {
        contentWrapper.style.height = null;
        item.classList.remove("zb-el-accordions--transition");
        item.classList.remove("zb-el-accordions--active");
        contentWrapper.removeEventListener("transitionend", complete);
      };
      contentWrapper.addEventListener("transitionend", complete);
    });
  }
  function openItem(item) {
    const contentWrapper = item.querySelector(".zb-el-accordions-accordionContent");
    window.requestAnimationFrame(() => {
      item.classList.add("zb-el-accordions--active");
      const height = contentWrapper.clientHeight;
      item.classList.remove("zb-el-accordions--active");
      contentWrapper.style.height = `${0}px`;
      window.requestAnimationFrame(() => {
        item.classList.add("zb-el-accordions--transition");
        item.classList.add("zb-el-accordions--active");
        contentWrapper.style.height = `${height}px`;
      });
    });
    const complete = () => {
      contentWrapper.style.height = null;
      item.classList.remove("zb-el-accordions--transition");
      contentWrapper.removeEventListener("transitionend", complete);
    };
    contentWrapper.addEventListener("transitionend", complete);
  }
})();
