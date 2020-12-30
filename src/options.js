import { browser } from "webextension-polyfill-ts";

document.addEventListener('DOMContentLoaded', restore_options);

const save = document.getElementById('save');
if (save) {
  addEventListener('click', save_options);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.layout').addEventListener(
    'change', () => updateImage('layout')
  );
  document.querySelector('.color').addEventListener(
    'change', () => updateImage('color')
  );
  document.querySelector('.logo').addEventListener(
    'change', () => updateImage('logo')
  );
  document.querySelector('.font').addEventListener(
    'change', () => updateImage('font')
  );
  document.querySelector('.rating').addEventListener(
    'change', () => updateImage('rating')
  );
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
  updateImage('layout');
  updateImage('color');
  updateImage('logo');
  updateImage('font');
  updateImage('rating');
}

function updateImage (type) {
  /**
   * Updates the image preview of the specified option.
   *
   * @param {string} type: The name of the option to preview.
   */
  const value = document.getElementById(type).value;
  document.getElementById(`select-${type}`).src = `/img/${type}/${value}.png`;
}
