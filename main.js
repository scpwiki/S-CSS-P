chrome.storage.local.get(['activeTheme'], function (result) {
	var themecss = result.activeTheme;
	var style = document.createElement('link');
	style.rel = 'stylesheet';
	style.type = 'text/css';
	style.href = chrome.extension.getURL('/css/colors/' + themecss + '.colors.css');
	document.head.appendChild(style);
});

var logocss = ""
chrome.storage.local.get(['activeLogo'], function (result) {
	logocss = result.activeLogo;
	var style2 = document.createElement('link');
	style2.rel = 'stylesheet';
	style2.type = 'text/css';
	style2.href = chrome.extension.getURL('css/images/' + logocss + '.images.css');
	document.head.appendChild(style2);
});