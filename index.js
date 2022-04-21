
//  var offCanvasNav = document.querySelector('.mobile-menu , .category-menu-dropdown'),
//  offCanvasNavSubMenu = document.querySelectorAll('.dropdown').parentNode
// const el = document.getElementsByClassName('<span class="menu-expand"><i></i></span>')
// console.log(el)
// console.log( offCanvasNavSubMenu.parentNode)

//     offCanvasNavSubMenu.parentNode.insertBefore(el,offCanvasNavSubMenu.firstChild);

//  /*====== Sidebar menu Active ======*/
//  function mobileHeaderActive() {
//     var navbarTrigger = document.querySelector('.mobile-header-button-active'),
//     endTrigger = document.querySelector('.sidebar-close'),
//     container = document.querySelector('.mobile-header-active'),
//        wrapper4 = document.querySelector('.main-wrapper');

//        wrapper4.insertBefore('<div class="body-overlay-1"></div>, .main-wrapper.firstChild');
   
//        navbarTrigger.onclick = function(e){
//            e.preventDefault();
//            container.classList.add('sidebar-visible');
//          

//        }
//        endTrigger.onclick = function(){
//            container.classList.remove('sidebar-visible');
//          

//        }
//        var Body_overlay = document.querySelector('.body-overlay-1').onclick = function(){
//            container.classList.remove('sidebar-visible');
//         

//        }
// }
// mobileHeaderActive();
// const AddCart = document.querySelector(".cart_link > a").onclick = function(){
   
//     var elem = document.querySelector(".mini_cart")
//     elem.classList.add('active')
// }
// //sticky navbar
//         $(window).on("scroll", function () {
//     var scroll = $(window).scrollTop();
//     if (scroll < 100) {
//       $(".sticky-header").removeClass("sticky");
//     } else {
//       $(".sticky-header").addClass("sticky");
//     }
//   });
 
 
//   window.onscroll = function() {myFunction()};

// var navbar = document.getElementById(".sticky-header");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// const abcd = document.querySelector(".mini_cart_close > a").onclick = function(){
//     var elem = document.querySelector(".mini_cart")
//     elem.classList.remove('active')
// }

// js code

// var cart_link = document.getElementsByClassName("cart_link > a");
// cart_link.onclick = function(){
// mini_cart.classList.add('active')
// }
// function AddCart() {
//     console.log("clicked")
//     const ecart = document.getElementsByClassName("mini_cart.active");
//     ecart.classList.add("mini_cart");
//  }


(function ($) {
    "use strict";
  

  
    //navbar cart
    $(".cart_link > a").on("click", function () {
      $(".mini_cart").addClass("active");
    });
  
    $(".mini_cart_close > a").on("click", function () {
      $(".mini_cart").removeClass("active");
    });
  
    
  
    //sticky navbar
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        $(".sticky-header").removeClass("sticky");
      } else {
        $(".sticky-header").addClass("sticky");
      }
    });
  
 


   /*====== Sidebar menu Active ======*/
   function mobileHeaderActive() {
    var navbarTrigger = $('.mobile-header-button-active'),
        endTrigger = $('.sidebar-close'),
        container = $('.mobile-header-active');
       
    
  
    
    navbarTrigger.on('click', function(e) {
        e.preventDefault();
        container.addClass('sidebar-visible');
       
    });
    
    endTrigger.on('click', function() {
        container.removeClass('sidebar-visible');
        
    });
    

};
mobileHeaderActive();



    // /*--- checkout toggle function ----*/
    // $('.checkout-click1').on('click', function(e) {
    //     e.preventDefault();
    //     $('.checkout-login-info').slideToggle(900);
    // });
    
    
    // /*--- checkout toggle function ----*/
    // $('.checkout-click3').on('click', function(e) {
    //     e.preventDefault();
    //     $('.checkout-login-info3').slideToggle(1000);
    // });
    
    // /*-------------------------
    // Create an account toggle
    // --------------------------*/
    // $('.checkout-toggle2').on('click', function() {
    //     $('.open-toggle2').slideToggle(1000);
    // });
    
    // $('.checkout-toggle').on('click', function() {
    //     $('.open-toggle').slideToggle(1000);
    // });
    
    // /*----------------------------------
    // checkout one click toggle function
    // ------------------------------------*/
    // var checked = $('.sin-payment input:checked')
    // if (checked) {
    //     $(checked).siblings('.payment-box').slideDown(900);
    // };
    // $('.sin-payment input').on('change', function() {
    //     $('.payment-box').slideUp(900);
    //     $(this).siblings('.payment-box').slideToggle(900);
    // });
  
/*---------------------
    mobile-menu
--------------------- */
var $offCanvasNav = $('.mobile-menu , .category-menu-dropdown'),
$offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');

/*Add Toggle Button With Off Canvas Sub Menu*/
$offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');

/*Close Off Canvas Sub Menu*/
$offCanvasNavSubMenu.slideUp();  
    

/*Category Sub Menu Toggle*/
$offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
    var $this = $(this);
    if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
        e.preventDefault();
        if ($this.siblings('ul:visible').length){
            $this.parent('li').removeClass('active');
            $this.siblings('ul').slideUp();
        } else {
            $this.parent('li').addClass('active');
            $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
            $this.closest('li').siblings('li').find('ul:visible').slideUp();
            $this.siblings('ul').slideDown();
        }
    }
});
  
})(jQuery);
  
  
    