function hideWhenClicked(el) {
  console.log('worked');
  $(el).hide();
}

$('#hide_this').on('click', hideWhenClicked(this));
