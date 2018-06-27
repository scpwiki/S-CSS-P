chrome.storage.sync.get(['activeLayout'], function (result) {
	var layoutcss = result.activeLayout;
	var style = document.createElement('link');
	style.rel = 'stylesheet';
	style.type = 'text/css';
	style.href = chrome.extension.getURL('/css/layouts/' + layoutcss + '.layouts.css');
	document.head.appendChild(style);
});

chrome.storage.sync.get(['activeColor'], function (result) {
	var colorcss = result.activeColor;
	var style2 = document.createElement('link');
	style2.rel = 'stylesheet';
	style2.type = 'text/css';
	style2.href = chrome.extension.getURL('/css/colors/' + colorcss + '.colors.css');
	document.head.appendChild(style2);
});

chrome.storage.sync.get(['activeLogo'], function (result) {
	var logocss = result.activeLogo;
	var style3 = document.createElement('link');
	style3.rel = 'stylesheet';
	style3.type = 'text/css';
	style3.href = chrome.extension.getURL('css/images/' + logocss + '.images.css');
	document.head.appendChild(style3);
});