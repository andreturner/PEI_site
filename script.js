//at the beginning of jquery script
//wait for page to load before executing code
window.onload = function(){

  // target image to be replaced using its class
  //Land Use pics//
  $('.cavendish-image').click(function(){
    $(this).attr('src', 'PEI_site/pictures/3_aerial/aerial_pics/2010_cavendish.jpeg');
  }); 

  $('.greenwich-image').click(function(){
    $(this).attr('src', 'PEI_site/pictures/3_aerial/aerial_pics/2010_greenwich.jpeg');
  }); 

//Ecosystem pics//
$("#owl-demo").owlCarousel({
 


  slideSpeed : 300,
  paginationSpeed : 400,

  items : 1, 
  itemsDesktop : false,
  itemsDesktopSmall : false,
  itemsTablet: false,
  itemsMobile : false

});

  $('.marram-grass').click(function(){
    $(this).attr('src', 'pictures/4_ecosystem/ecosystem_pics/grass_cliff.png');
  });
  
  $('.grass-cliff').click(function(){
    $(this).attr('src', 'pictures/4_ecosystem/ecosystem_pics/sandstone.png');
  });
  
  $('.sandstone').click(function(){
    $(this).attr('src', 'pictures/4_ecosystem/ecosystem_pics/sandstone_cliff.jpeg');
  });


}
