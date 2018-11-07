function hideWhenClicked(el) {
  el.hide();
}

$('#hide_this').on('click', hideWhenClicked(this));
