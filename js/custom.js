$(document).ready(function() {

  $(".otherpages, .bottom").each(function() {
    $(this).hide();
    if ($(this).attr('id') == 'main') {
      $(this).show();
    }
  });

  $('a').on("click", function(e) {
    e.preventDefault();
    var $this = $(this);
    var id = $this.attr('data-related');
    $("div.otherpages").each(function() {
      $this.hide();
      if ($this.attr('id') == id) {
        $this.show();
        var $parent = $this.parent();
        if ($this.attr('id') == 'contact') {
          $parent.css({
            'background-color': '#92a8d1'
          });
        } else if ($this.attr('id') == 'about') {
          $parent.css({
            'background-color': '#b0dbd1'
          });
        } else if ($this.attr('id') == 'resume') {
          $parent.css({
            'background-color': '#cec5e0'
          });
        } else {
          $parent.css({
            'background-color': '#fccfcf'
          });
        }
      }
    });
  });

  $('.otherpages').each(function() {

  });

});
