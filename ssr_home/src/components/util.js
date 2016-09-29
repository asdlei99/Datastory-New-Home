export const pageJump = (page, anchor, rl_id) => {
  var href = window.location.href;
  if (href.indexOf(page) < 0) {
    // At other page
    if (rl_id && $('#' + rl_id)) {
      $('#' + rl_id).click();
    } else {
      console.log('No router-link element.');
    }
  } else {
    // At this page
    var target = $('#' + anchor);
    if (target) {
      $('html, body').animate({
        scrollTop: target.offset().top - 50
      }, 700);
    }
  }
}

export const pageReadyAndGoAnchor = () => {
  let getAnchor = (str) => {
    if (!str) {
      str = window.location.href;
    }
    var anchor = str.split('#')[1];
    return anchor;
  }
  let anchor = getAnchor()
  if (anchor) {
    var target = $('#' + anchor);
    if (target) {
      let t = setTimeout(function() {
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 800);
      }, 150);
    } else {
      console.log('No anchor found');
    }
  }
}