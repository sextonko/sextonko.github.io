$(document).ready(function() {

  $(function() {
    var message = "Don't forget me!";
    var original;

    $(window).focus(function() {
      if (original) {
        document.title = original;
      }
    }).blur(function() {
      var title = $('title').text();
      if (title != message) {
        original = title;
      }
      document.title = message;
    });
  });

  $(".otherpages, .bottom").each(function() {
    $(this).hide();
    if ($(this).attr('id') == 'main') {
      $(this).show();
    }
  });

  $('.home-name a, .pages a').on("click", function(e) {
    e.preventDefault();
    var id = $(this).attr('data-related');
    $("div.otherpages").each(function() {
      $(this).hide();
      if ($(this).attr('id') == id) {
        $(this).show();
        if ($(this).attr('id') == 'contact') {
          $(this).parent().css({
            'background-color': '#c0d2f5'
          });
        } else if ($(this).attr('id') == 'about') {
          $(this).parent().css({
            'background-color': '#b0dbd1'
          });
        } else if ($(this).attr('id') == 'resume') {
          $(this).parent().css({
            'background-color': '#cec5e0'
          });
        } else {
          $(this).parent().css({
            'background-color': '#fccfcf'
          });
        }
      }
    });
  });

});
