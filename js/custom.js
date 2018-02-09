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
      $("div").each(function(){
          $(this).hide();
          if($(this).attr('id') == id) {
              $(this).show();
          }
      });
  });

});
