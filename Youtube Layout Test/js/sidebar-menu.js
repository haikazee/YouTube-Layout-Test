$(document).ready(function(){

  // For showing side bar menu
   $("#menu-icon").click( function(){
       $(".sidebar_menu").css("margin-left","0");
       
      
   }); 
   $("#sdmenu-icon").click( function(){
        $(".sidebar_menu").css("margin-left","-240px")
       
       
    });
    
    
    $(".show-more").click( function() {
     
      var $this = $(this); 
      var $content = $this.parent().prev("div.content");
      var linkText = $this.text().toUpperCase();    
      
      if(linkText === "SHOW MORE"){
          linkText = "SHOW LESS";
          $content.addClass('showContent').removeClass('hideContent');
      } else {
          linkText = "Show more";
          $content.addClass('hideContent').removeClass('showContent');
      }
  
      $this.text(linkText);
  });

 


  $(window).resize(function() {

    //To show the list of thumbnails when screensize is less than 1015px
    if ($(window).width() < 1015) {
      $('.section2').appendTo('.section1');
    }
    else
    {$('.section2').appendTo('.container');
  }

  //To change the search bar into icon when screensize is less than 
    if ($(window).width() < 600) {
      $('.search-section').hide();
      // $('.search-bar').hide();
      $('.srch-btn').show();
      $('.logo').css('flex-basis','47%');

      $(".srch-btn").click( function(){
        $('.search-bar').css('flex','1');
        $('.menu').hide();
        $('.logo').hide();
        $('.buttons-section').hide();
        $('.search-section').show();
        $('.back-btn').show();
      });
      $(".back-btn").click( function(){
        // $('.search-section').css('flex','1');
        $('.menu').show();
        $('.logo').show();
        $('.buttons-section').show();
        $('.search-section').hide();
        $('.back-btn').hide();
      });

    }
    else
   {
    $('.search-section').css('flex-basis','60%');
    $('.menu').show();
    $('.logo').show();
    $('.back-btn').hide();
    $('.buttons-section').show();
     $('.search-section').show();
  //  $('.search-bar').show();
   $('.srch-btn').hide();
   $('.logo').css('flex-basis','15%');
  }
  }).resize();


  // For comment-box buttons
      // To display comment and cancel buttons
      $(".comment").click( function(){
        $('.comment-btn').show();
      });
    
      // To able the comment button
      $('.comment').on('keyup keydown',function () { 
        if($('.comment').val().length === 0)
    {
      $('.submit-btn').css('pointer-events', 'none'); 
      $('.submit-btn').css('background-color', '#dcdcdc'); 
    }else{
        $('.submit-btn').css('pointer-events', 'auto'); 
        $('.submit-btn').css('background-color', 'blue'); 
    }
    });
      // To hide comment and cancel buttons
      $(".cancel-btn").click( function(){
        $('.comment-btn').hide();
        $('.reply-btn').hide();
        $('.submit-btn').css('pointer-events', 'none'); 
        $('.submit-btn').css('background-color', '#dcdcdc'); 
      });
 

// For reply-post div
      // To display comment and cancel buttons
      $(".reply").click( function(){
        $('.reply-btn').show();
      });
      $("#reply").click( function(){
        $('.reply-post').css('display','flex');
      });

      // To able the comment button
    $('.reply').on('keyup keydown',function () { 
      if($('.reply').val().length === 0)
    {
    $('.r-submit-btn').css('pointer-events', 'none'); 
    $('.r-submit-btn').css('background-color', '#dcdcdc'); 
    }else{
      $('.r-submit-btn').css('pointer-events', 'auto'); 
      $('.r-submit-btn').css('background-color', 'blue'); 
    }
    });
      // To hide the reply div
    $(".r-cancel-btn").click( function(){
      $('.reply-btn').hide();
      $('.reply-btn').hide();
      $('.r-submit-btn').css('pointer-events', 'none'); 
      $('.r-submit-btn').css('background-color', '#dcdcdc'); 
      $('.reply-post').hide();
    });

//To change the subcribe button to "subscribed"
  $(".subscribe-btn").click( function(){
   
    // var change = document.getElementByClass("subscribe-btn");
    if ($(".subscribe-btn").text() === "Subscribe")
    {
      $(".subscribe-btn").text("Subscribed");
      $(".subscribe-btn").css('background-color','#ccc');
    }
    else 
    {
      $(".subscribe-btn").text("Subscribe");
      $(".subscribe-btn").css('background-color','red');
    }
  });
//   $("[data-showonhover]").hover(function(){
//     $("options").css('visibility','visible');
// });
});








 
