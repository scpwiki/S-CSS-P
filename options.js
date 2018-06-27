// Saves options to chrome.storage
function save_options() {
  var layout = document.querySelector('input[name="layout"]:checked').value;
  var color = document.querySelector('input[name="color"]:checked').value;
  var logo = document.querySelector('input[name="logo"]:checked').value;
  chrome.storage.sync.set({
    activeLayout: layout,
    activeColor: color,
    activeLogo: logo
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
    activeLogo: 'none'
  }, function(items) {
    document.querySelector('input[name="layout"]:checked').value = items.activeLayout;
    document.querySelector('input[name="color"]:checked').value = items.activeColor;
    document.querySelector('input[name="logo"]:checked').value = items.activeLogo;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);