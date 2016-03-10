function button_click(id, url, name) {
    $(id).on('click', function(event){
        window.open(url, name);
    });
}

button_click("#email", "http://mail.google.com", "mail");
button_click("#facebook", "http://www.facebook.com/fangfang.fu.315", "facebook");
button_click("#qq", "http://user.qzone.qq.com/450490365", "qq");

$( ".slidedown li" ).hide();
$(".contact").click(function () {
  if ( $( ".slidedown li:first" ).is( ":hidden" ) ) {
    $( ".slidedown li" ).slideDown( "slow" );
    $(".contact").addClass("contact_background");
  } else {
    $( ".slidedown li" ).hide();
    $(".contact").removeClass("contact_background");
  }
});
