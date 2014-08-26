(function ($) {
  /**
   * Behavior for Make a responsive menu 
   */
  Drupal.behaviors.persianas_menu = {
    attach: function (context, settings) {
            
            var ancho = $(window).width();
            var ancho_num  = parseInt($(window).width());          

          $('#block-system-main-menu').click(function(){

            if ( ancho_num  < 990 ) {
              
              $('#block-system-main-menu .menu').slideToggle();

            };
            
          });
    }
  };
})(jQuery);