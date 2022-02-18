$(document).ready(function(){
    $("button").hover(function(){
      $(this).css("background-color", "#9ec3df");
      }, function(){
      $(this).css("background-color", "#003359");
    });
  });

  $(document).ready(function(){
    $("li").hover(function(){
        $(this).css("font-size", "30px");
        }, function(){
        $(this).css("font-size", "20px");
    });
});