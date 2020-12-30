import { browser } from "webextension-polyfill-ts";

applyCss();

async function applyCss () {
  const { activeLayout } = await browser.storage.sync.get('activeLayout');
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.href = browser.runtime.getURL(`/css/layouts/${activeLayout}.layouts.css`);
  document.head.appendChild(style);

  const { activeColor } = await browser.storage.sync.get('activeColor');
  const style2 = document.createElement('link');
  style2.rel = 'stylesheet';
  style2.type = 'text/css';
  style2.href = browser.runtime.getURL(`/css/colors/${activeColor}.colors.css`);
  document.head.appendChild(style2);

  const { activeLogo } = await browser.storage.sync.get('activeLogo');
  const style3 = document.createElement('link');
  style3.rel = 'stylesheet';
  style3.type = 'text/css';
  style3.href = browser.runtime.getURL(`css/images/${activeLogo}.images.css`);
  document.head.appendChild(style3);

  const { activeFont } = await browser.storage.sync.get('activeFont');
  const style4 = document.createElement('link');
  style4.rel = 'stylesheet';
  style4.type = 'text/css';
  style4.href = browser.runtime.getURL(`css/fonts/${activeFont}.fonts.css`);
  document.head.appendChild(style4);

  const { activeRating } = await browser.storage.sync.get('activeRating');
  const style5 = document.createElement('link');
  style5.rel = 'stylesheet';
  style5.type = 'text/css';
  style5.href = browser.runtime.getURL(`css/ratings/${activeRating}.ratings.css`);
  document.head.appendChild(style5);
}
