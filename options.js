// Saves options to chrome.storage
function save_options() {
  var layout = document.getElementById('layout').value;
  var color = document.getElementById('color').value;
  var logo = document.getElementById('logo').value;
  var font = document.getElementById('font').value;
  var rating = document.getElementById('rating').value;
  chrome.storage.sync.set({
    activeLayout: layout,
    activeColor: color,
    activeLogo: logo,
    activeFont: font,
    activeRating: rating
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    activeLayout: 'none',
    activeColor: 'none',
    activeLogo: 'none',
    activeFont: 'none',
    activeRating: 'none'
  }, function(items) {
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
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
var save = document.getElementById('save')
if(save) { 
addEventListener('click',
    save_options);
}
	
function changeImgLayout() {
	var layout = document.getElementById("layout").value;
	document.getElementById("select-layout").src = "/img/layout/" + layout + ".png";
}

function changeImgColor() {
	var color = document.getElementById("color").value;
	document.getElementById("select-color").src = "/img/color/" + color + ".png";
}

function changeImgLogo() {
	var logo = document.getElementById("logo").value;
	document.getElementById("select-logo").src = "/img/logo/" + logo + ".png";
}

function changeImgFont() {
	var font = document.getElementById("font").value;
	document.getElementById("select-font").src = "/img/font/" + font + ".png";
}

function changeImgRating() {
	var rating = document.getElementById("rating").value;
	document.getElementById("select-rating").src = "/img/rating/" + rating + ".png";
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.layout').addEventListener('change', changeImgLayout);
  document.querySelector('.color').addEventListener('change', changeImgColor);
  document.querySelector('.logo').addEventListener('change', changeImgLogo);
  document.querySelector('.font').addEventListener('change', changeImgFont);
  document.querySelector('.rating').addEventListener('change', changeImgRating);
});