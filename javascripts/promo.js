$(function() {
  $(".no-touch .gallery").addClass("autoplay");

  // Avoid a bug in old Safari: http://stackoverflow.com/a/16609549
  if ($("<div/>").css("-webkit-filter","brightness(101%)").css("-webkit-filter")!="") {
    $(".cssfilters .table-content a").hover(function() {
      $(".content-left a").addClass("image-dark");
      $(".js-index-image-" + $(this).data("index-image")).removeClass("image-dark");
    }, function() {
      $(".content-left a").removeClass("image-dark");
    });

    $(".cssfilters .content-left a").hover(function() {
      $(".content-left a").addClass("image-dark");
      $(this).removeClass("image-dark");
    }, function() {
      $(".content-left a").removeClass("image-dark");
    });
  }
  if ($(".tip").length) {
    Mousetrap.bind("right", function(){
      var previous = $(".tip").data("previous");
      if (previous) {
        window.location.href = previous;
      } else {
        window.location.href = "/";
      }
    });
    Mousetrap.bind("left", function(){
      var next = $(".tip").data("next");
      if (next) {
        window.location.href = next;
      } else {
        window.location.href = "/";
      }
    });
  }
});