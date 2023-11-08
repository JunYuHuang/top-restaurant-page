import { renderHome, renderMenu, renderContact } from "./loadPage";

const tabToRenderFn = {
  home: (rootElement) => {
    renderHome(rootElement);
  },
  menu: (rootElement) => {
    renderMenu(rootElement);
  },
  contact: (rootElement) => {
    renderContact(rootElement);
  },
};

const isNavItem = function (element) {
  if (!element.classList.contains("nav-item")) return false;
  if (!element.getAttribute("data-nav-id")) return false;
  return true;
};

const renderTabContent = function (tabId, contentElement, tabToRenderFn) {
  contentElement.replaceChildren();
  tabToRenderFn[tabId](contentElement);
};

window.addEventListener("load", function () {
  const contentElement = document.querySelector("#content");
  const navListElement = document.querySelector(".nav-list");

  const handleNavItem = function (e) {
    if (!isNavItem(e.target)) return;

    const desiredTab = e.target.getAttribute("data-nav-id");
    const realTab = document.querySelector(".tab")
      ? document.querySelector(".tab").getAttribute("data-tab-id")
      : "home";
    if (desiredTab === realTab) return;

    renderTabContent(desiredTab, contentElement, tabToRenderFn);
  };

  navListElement.addEventListener("click", handleNavItem);

  renderTabContent("home", contentElement, tabToRenderFn);
});
