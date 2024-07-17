$(document).ready(function(){
  $(".nav-link").on("click", function(){
    $(".nav-link.active").removeClass(".active");
    $(this).addClass("active");
  });

  $(".contactus-btn").click(function(){
    window.location = "contact.html";
  });

  fsLightbox.open();
});