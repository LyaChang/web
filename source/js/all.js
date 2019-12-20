// loading animation
$('.loader-inner').loaders()

window.onload=function(){
    setTimeout(function(){
        TweenMax.to(".loader-inner",0.3,{opacity:"0"})
        TweenMax.to(".loading_bg",0.7,{delay:"0.3",scaleX:"0%",transformOrigin:"100% 0%",ease: Power2.easeOut}) 
    }, 600)
}


//selection

var winH = $(window).width();

function masonry_fn(){

    if (winH > 576){
        $('#masonry').imagesLoaded(function(){
            $('#masonry').masonry({
                itemSelector: '.item',
                columnWidth: 10,
                isAnimated: true
            });
        });
    }else{
        $('#masonry').masonry('destroy');
    }

};

function errorOne() {
    // console.log('first image load error!');
  }
  

$(document).ready(function(){
    $('.kind_lists_work li a').on('click',(function(){
        var name = $(this).data("value")
        // console.log(name)

        if(name == "web"){
            $(".web").css("display","block");
            $(".banner,.app").css("display","none");
            TweenMax.to(".web",1,{opacity:"1",ease: Power2.easeOut});
            TweenMax.to(".app",1,{opacity:"0",ease: Power2.easeOut});
            TweenMax.to(".banner",1,{opacity:"0",ease: Power2.easeOut});
            $(".kind_lists a").removeClass("active");
            $(".segment-1 a").addClass("active");
        }
        else if(name == "app"){
            $(".web,.banner").css("display","none");
            $(".app").css("display","block");
            TweenMax.to(".app",1,{opacity:"1",ease: Power2.easeOut});
            TweenMax.to(".web",1,{opacity:"0",ease: Power2.easeOut});
            TweenMax.to(".banner",1,{opacity:"0",ease: Power2.easeOut});
            $(".kind_lists a").removeClass("active");
            $(".segment-2 a").addClass("active");
        }
        else if(name == "banner"){
            $(".web,.app").css("display","none");
            $(".banner").css("display","block");
            TweenMax.to(".app",1,{opacity:"0",ease: Power2.easeOut});
            TweenMax.to(".web",1,{opacity:"0",ease: Power2.easeOut});
            TweenMax.to(".banner",1,{opacity:"1",ease: Power2.easeOut});
            
            $(".kind_lists a").removeClass("active");
            $(".segment-3 a").addClass("active");
        }
        else{
            $(".banner,.app,.web").css("display","block");
            TweenMax.to(".web,.app,.banner",1,{opacity:"1",ease: Power2.easeOut});
            
            $(".kind_lists a").removeClass("active");
            $(".segment-0 a").addClass("active");
        }

    }))



        $('.kind_lists_banner li a').on('click',(function(){
            var name = $(this).data("value")
            // console.log(name)
    
            if(name == "work"){
                $(".work").css("display","block");
                $(".act,.test,.travel,.pd").css("display","none");
                $(".act,.test,.travel,.pd").hide();
                $(".work").show();
               
                masonry_fn();
                TweenMax.to(".work",1,{opacity:"1",ease: Power2.easeOut});
                TweenMax.to(".test",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".act",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".travel",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".pd",1,{opacity:"0",ease: Power2.easeOut});
                $(".kind_lists_banner a").removeClass("active");
                $(".segment-1 a").addClass("active");
            }
            else if(name == "test"){
                $(".work,.act,.travel,.pd").css("display","none");
                $(".test").css("display","block");
                $(".work,.act,.travel,.pd").hide();
                $(".test").show();
              
                masonry_fn();
                TweenMax.to(".test",1,{opacity:"1",ease: Power2.easeOut});
                TweenMax.to(".work",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".act",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".travel",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".pd",1,{opacity:"0",ease: Power2.easeOut});
                $(".kind_lists_banner a").removeClass("active");
                $(".segment-2 a").addClass("active");
            }
            else if(name == "act"){
                $(".work,.test,.travel,.pd").css("display","none");
                $(".act").css("display","block");
                $(".work,.test,.travel,.pd").hide();
                $(".act").show();
               
                masonry_fn();
                TweenMax.to(".test",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".work",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".act",1,{opacity:"1",ease: Power2.easeOut});
                TweenMax.to(".travel",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".pd",1,{opacity:"0",ease: Power2.easeOut});
                
                $(".kind_lists_banner a").removeClass("active");
                $(".segment-3 a").addClass("active");
            }
            else if(name == "travel"){
                $(".work,.test,.act,.pd").css("display","none");
                $(".travel").css("display","block");
                $(".work,.test,.act,.pd").hide();
                $(".travel").show;
               
                masonry_fn();
                TweenMax.to(".test",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".work",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".act",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".pd",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".travel",1,{opacity:"1",ease: Power2.easeOut});
                
                $(".kind_lists_banner a").removeClass("active");
                $(".segment-4 a").addClass("active");
            }
            else if(name == "pd"){
                $(".work,.test,.act,.travel").css("display","none");
                $(".pd").css("display","block");
                $(".work,.test,.act,.travel").hide();
                $(".pd").show;
               
                masonry_fn();
                TweenMax.to(".test",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".work",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".act",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".travel",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".pd",1,{opacity:"1",ease: Power2.easeOut});
                
                $(".kind_lists_banner a").removeClass("active");
                $(".segment-5 a").addClass("active");
            }
            else{
                $(".work,.test,.act,.travel,.pd").css("display","block");
                $(".work,.test,.act,.travel,.pd").show();
                masonry_fn();
                TweenMax.to(".work,.test,.act,.travel,.pd",1,{opacity:"1",ease: Power2.easeOut});
                
                $(".kind_lists_banner a").removeClass("active");
                $(".segment-0 a").addClass("active");
            }
        
    }))
    $('.dropmenu').on('click',(function(){
        TweenMax.to(".dropmenu_space",.6,{opacity:"0.94",ease: Power2.easeOut,"display":"block"});        
    }));
    $('#menu_content li a').on('click',(function(){
        TweenMax.to(".dropmenu_space",.6,{opacity:"0",ease: Power2.easeOut,"display":"none"});
        var name = $(this).data("value")
        if(name == "web"){
            $(".dropmenu .words").html("WEB");
            $(".dropmenu span").html("3");
        }
        else if(name == "all"){
            $(".dropmenu .words").html("ALL");
            $(".dropmenu span").html("5");
        }
        else if(name == "app"){
            $(".dropmenu .words").html("APP");
            $(".dropmenu span").html("1");
        }
        else if(name == "banner"){
            $(".dropmenu .words").html("BANNER");
            $(".dropmenu span").html("1");
        }
    }));
    $('#menu_content_banner li a').on('click',(function(){
        TweenMax.to(".dropmenu_space",.6,{opacity:"0",ease: Power2.easeOut,"display":"none"});
        var name = $(this).data("value")
        if(name == "work"){
            $(".dropmenu .words").html("工作轉職");
            $(".dropmenu span").html("6");
        }
        else if(name == "all"){
            $(".dropmenu .words").html("ALL");
            $(".dropmenu span").html("31");
        }
        else if(name == "test"){
            $(".dropmenu .words").html("測驗分析");
            $(".dropmenu span").html("6");
        }
        else if(name == "act"){
            $(".dropmenu .words").html("活動");
            $(".dropmenu span").html("5");
        }
        else if(name == "travel"){
            $(".dropmenu .words").html("旅遊");
            $(".dropmenu span").html("1");
        }
        else if(name == "pd"){
            $(".dropmenu .words").html("商品");
            $(".dropmenu span").html("13");
        }
    }));
    $('.dropmenu_space .cancel_btn').on('click',(function(){
        TweenMax.to(".dropmenu_space",.6,{opacity:"0",ease: Power2.easeOut,"display":"none"});
    }));

    //nav

    $('#nav').on('click',(function(){
        // console.log("nav");
        TweenMax.to(".nav_mobile",.6,{opacity:"0.94",ease: Power2.easeOut,"display":"block"});        
    }));
    $('.nav_mobile .cancel_btn').on('click',(function(){
        // console.log("nav");
        TweenMax.to(".nav_mobile",.6,{opacity:"0",ease: Power2.easeOut,"display":"none"});        
    }));

    masonry_fn();
    //$('.gif').gifplayer({label:""});

    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

    }
    else {
        $(window).resize(function(){
        
            //改變視窗時重新整理一次
            this.location.reload();
            masonry_fn();
        });
    }
    lazyload();


})




