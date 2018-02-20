$(document).ready(function() {

  $(".otherpages, .bottom").each(function(){
       $(this).hide();
      if($(this).attr('id') == 'main') {
          $(this).show();
      }
  });

  $('a').on( "click", function(e) {
      e.preventDefault();
      var id = $(this).attr('data-related');
      $("div.otherpages").each(function(){
          $(this).hide();
          if($(this).attr('id') == id) {
              $(this).show();
              if($(this).attr('id') == 'contact') {
                $(this).parent().toggleClass('blue');
              }
              else if($(this).attr('id') == 'about') {
                $(this).parent().toggleClass('mint');
              }
              else if($(this).attr('id') == 'resume') {
                $(this).parent().toggleClass('blue');
              }
          }
      });
  });

  $('.otherpages').each(function(){

  });

});
