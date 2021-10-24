/*===========Fixed============*/
$(function(){

    let header=$("#header");
        let intro = $("#intro");
            let introH = intro.height();
                let scrollPos = $(window).scrollTop();

                    checkScroll(introH,scrollPos);

                $(window).on("scroll load resize", function(){
                    let introH = intro.height();
                    scrollPos= $(this).scrollTop();

                    checkScroll(introH,scrollPos);
                  
                });

            function checkScroll(introH,scrollPos){ 

                if (scrollPos > introH){
                    header. addClass("fixed");

                }
                else{
                    header. removeClass("fixed");
                }
            }

                
                $("[data-scroll]").on("click", function(event){
                    event.preventDefault();

                    let blocId = $(this).data("scroll");

                        let blocIdoffset = $(blocId).offset().top;
                        console.log(blocIdoffset);
                        nav.removeClass("show");

                       $("html, body").animate({
                           scrollTop: blocIdoffset -100
                       }, 1000)


                    

                })

                /*burger*/
                let nav= $("#nav");

                let navToglle= $("#navToggle");

                
                $("#navToggle").on("click", function(event){
                    event.preventDefault();

                  nav.toggleClass("show");

                });


                let slider = $("#reviewsSlider");
                slider.slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                    arrows:false,
                  });



})
    





             
            
                      
            







 