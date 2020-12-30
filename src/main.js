import { browser } from "webextension-polyfill-ts";

["layout", "color", "logo", "font", "rating"].forEach(addStyle);

async function addStyle (type) {
  /**
   * Adds a CSS stylesheet of the specified type to the page. Gets the value of
   * the stylesheet from the synchronised extension storage.
   *
   * @param {string} type: The type of stylesheet to add.
   */
  const [dir, keyName] = {
    layout: ["layouts", "activeLayout"],
    color: ["colors", "activeColor"],
    logo: ["images", "activeLogo"],
    font: ["fonts", "activeFont"],
    rating: ["ratings", "activeRating"],
  }[type];

  const value = (await browser.storage.sync.get(keyName))[keyName];
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.href = browser.runtime.getURL(`/css/${dir}/${value}.${dir}.css`);

  document.head.appendChild(style);
}
