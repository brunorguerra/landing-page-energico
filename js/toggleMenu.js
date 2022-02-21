let nav = $("header nav.mn-mobile");
let overlayMenu = $("header .overlay-mobile");
$("header button").click(() => {
  nav.toggleClass("active-mnMobile");
  overlayMenu.toggleClass("active-overlay");
});
overlayMenu.click(() => {
  nav.removeClass("active-mnMobile");
  overlayMenu.removeClass("active-overlay");
});
