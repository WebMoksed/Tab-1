function myFunction() {
  var x = document.getElementById("mobile_menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
 $('.menu_area ul li a').on('click', function(){
     $(this).siblings().removeClass('active-btn')
    // $(this).addClass('active-btn');
 })