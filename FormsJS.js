<script type="text/javascript" src="https://github.com/KMeibom/JS/blob/main/FormsJS.js">
   (function(jQuery) {

  function measureWidth(deflt) {
    var dummy = jQuery('<p></p>').text(deflt).css('visibility','hidden').appendTo(document.body);
    var result = dummy.width();
    dummy.remove();
    return result;
  }

  function toggleLabel() {
    var input = jQuery(this);
    var deflt = input.attr('title');
    var span = input.prev('label');
    setTimeout(function() {
      if (!input.val() || (input.val() == deflt)) {
        span.css('visibility', '');
        if (deflt) {
          span.css('margin-left', measureWidth(deflt) + 2 + 'px');
        }
      } else {
        span.css('visibility', 'hidden');
      }
    }, 0);
  };

  jQuery(document).on('cut', 'input, textarea', toggleLabel);
  jQuery(document).on('keydown', 'input, textarea', toggleLabel);
  jQuery(document).on('paste', 'input, textarea', toggleLabel);
  jQuery(document).on('change', 'select', toggleLabel);

  jQuery(document).on('focusin', 'input, textarea', function() {
      jQuery(this).prev('label').css('color', '#ccc');
  });
  jQuery(document).on('focusout', 'input, textarea', function() {
      jQuery(this).prev('label').css('color', '#999');
  });

  function init() {
    jQuery('input, textarea, select').each(toggleLabel);
  };

  // Set things up as soon as the DOM is ready.
  jQuery(init);

  // Do it again to detect Chrome autofill.
  jQuery(window).load(function() {
    setTimeout(init, 0);
  });

})(jQuery);
</script>
