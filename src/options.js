import { browser } from "webextension-polyfill-ts";

document.addEventListener('DOMContentLoaded', restore_options);

const save = document.getElementById('save');
if (save) {
  addEventListener('click', save_options);
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.layout').addEventListener('change', changeImgLayout);
  document.querySelector('.color').addEventListener('change', changeImgColor);
  document.querySelector('.logo').addEventListener('change', changeImgLogo);
  document.querySelector('.font').addEventListener('change', changeImgFont);
  document.querySelector('.rating').addEventListener('change', changeImgRating);
});

async function save_options () {
  /**
   * Saves options to chrome.storage
   */
  const activeLayout = document.getElementById('layout').value;
  const activeColor = document.getElementById('color').value;
  const activeLogo = document.getElementById('logo').value;
  const activeFont = document.getElementById('font').value;
  const activeRating = document.getElementById('rating').value;
  await browser.storage.sync.set(
    { activeLayout, activeColor, activeLogo, activeFont, activeRating }
  );
  // Update status to let user know options were saved.
  const status = document.getElementById('status');
  status.textContent = 'Options saved.';
  setTimeout(() => status.textContent = '', 750);
}

async function restore_options () {
  /**
   * Restores select box and checkbox state using the preferences
   * stored in chrome.storage.
   */
  const items = await browser.storage.sync.get({
    activeLayout: 'none',
    activeColor: 'none',
    activeLogo: 'none',
    activeFont: 'none',
    activeRating: 'none'
  });
  document.getElementById('layout').value = items.activeLayout;
  document.getElementById('color').value = items.activeColor;
  document.getElementById('logo').value = items.activeLogo;
  document.getElementById('font').value = items.activeFont;
  document.getElementById('rating').value = items.activeRating;
  changeImgLayout();
  changeImgColor();
  changeImgLogo();
  changeImgFont();
  changeImgRating();
}

function changeImgLayout () {
  const layout = document.getElementById("layout").value;
  document.getElementById("select-layout").src = `/img/layout/${layout}.png`;
}

function changeImgColor () {
  const color = document.getElementById("color").value;
  document.getElementById("select-color").src = `/img/color/${color}.png`;
}

function changeImgLogo () {
  const logo = document.getElementById("logo").value;
  document.getElementById("select-logo").src = `/img/logo/${logo}.png`;
}

function changeImgFont () {
  const font = document.getElementById("font").value;
  document.getElementById("select-font").src = `/img/font/${font}.png`;
}

function changeImgRating () {
  const rating = document.getElementById("rating").value;
  document.getElementById("select-rating").src = `/img/rating/${rating}.png`;
}
