//   /*====== Sidebar menu Active ======*/
//   function mobileHeaderActive() {
//     var navbarTrigger = $('.mobile-header-button-active'),
//         endTrigger = $('.sidebar-close'),
//         container = $('.mobile-header-active'),
//         wrapper4 = $('.main-wrapper');
    
//     wrapper4.prepend('main-wrapper' ,'<div class="body-overlay-1"></div>');
    
//     navbarTrigger.on('click', function(e) {
//         e.preventDefault();
//         container.addClass('sidebar-visible');
//         wrapper4.addClass('overlay-active-1');
//     });
    
//     endTrigger.on('click', function() {
//         container.removeClass('sidebar-visible');
//         wrapper4.removeClass('overlay-active-1');
//     });
    
//     $('.body-overlay-1').on('click', function() {
//         container.removeClass('sidebar-visible');
//         wrapper4.removeClass('overlay-active-1');
//     });
// };
// mobileHeaderActive();


 /*====== Sidebar menu Active ======*/
 function mobileHeaderActive() {
     var navbarTrigger = document.querySelector('.mobile-header-button-active'),
     endTrigger = document.querySelector('.sidebar-close'),
     container = document.querySelector('.mobile-header-active'),
        wrapper4 = document.querySelector('.main-wrapper');

        wrapper4.prepend('<div class="body-overlay-1"></div>');
    
        navbarTrigger.onclick = function(e){
            e.preventDefault();
            container.classList.add('sidebar-visible');
            wrapper4.classList.add('overlay-active-1');

        }
        endTrigger.onclick = function(){
            container.classList.remove('sidebar-visible');
            wrapper4.classList.remove('overlay-active-1');

        }
        var Body_overlay = document.querySelector('.body-overlay-1').onclick = function(){
            container.classList.remove('sidebar-visible');
            wrapper4.classList.remove('overlay-active-1');

        }
 }
 mobileHeaderActive();


 
 /*====== Sidebar menu Active ======*/
 function mobileHeaderActive() {
    var navbarTrigger = document.querySelector('.mobile-header-button-active'),
    endTrigger = document.querySelector('.sidebar-close'),
    container = document.querySelector('.mobile-header-active'),
       wrapper4 = document.querySelector('.main-wrapper');

    //    wrapper4.prepend('main-wrapper' , '<div class="body-overlay-1"></div>');
   
       navbarTrigger.onclick = function(e){
           e.preventDefault();
           container.classList.add('sidebar-visible');
           wrapper4.classList.add('overlay-active-1');

       }
       endTrigger.onclick = function(){
           container.classList.remove('sidebar-visible');
           wrapper4.classList.remove('overlay-active-1');

       }
       var Body_overlay = document.querySelector('.body-overlay-1').onclick = function(){
           container.classList.remove('sidebar-visible');
           wrapper4.classList.remove('overlay-active-1');

       }
}
mobileHeaderActive();
