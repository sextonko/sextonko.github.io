$(document).ready(function() {

  $(".otherpages, .bottom").each(function() {
    $(this).hide();
    if ($(this).attr('id') == 'main') {
      $(this).show();
    }
  });

  $('a').on("click", function(e) {
    e.preventDefault();
    var id = $(this).attr('data-related');
    $("div.otherpages").each(function() {
      $(this).hide();
      if ($(this).attr('id') == id) {
        $(this).show();
        if ($(this).attr('id') == 'contact') {
          $(this).parent().css({'background-color':'#92a8d1'});
        } else if ($(this).attr('id') == 'about') {
          $(this).parent().css({'background-color':'#b0dbd1'});
        } else if ($(this).attr('id') == 'resume') {
          $(this).parent().css({'background-color':'#cec5e0'});
        }
      }
    });
  });

  $('.otherpages').each(function() {

  });

});
