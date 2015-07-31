moreInfo = function(step) {
  jQuery('.more-info').hide(200);
  element = jQuery('#more-info-'+step);
  if(element.is(":visible")) {
    element.hide(300);
  } else {
    element.show(300);
  }
}