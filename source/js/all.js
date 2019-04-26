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
    console.log('first image load error!');
  }
  

$(document).ready(function(){
    $('.kind_lists_work li a').on('click',(function(){
        var name = $(this).data("value")
        console.log(name)

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
            console.log(name)
    
            if(name == "work"){
                $(".work").css("display","block");
                $(".act,.test,.travel").css("display","none");
                $(".act,.test,.travel").hide();
                $(".work").show();
               
                masonry_fn();
                TweenMax.to(".work",1,{opacity:"1",ease: Power2.easeOut});
                TweenMax.to(".test",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".act",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".travel",1,{opacity:"0",ease: Power2.easeOut});
                $(".kind_lists_banner a").removeClass("active");
                $(".segment-1 a").addClass("active");
            }
            else if(name == "test"){
                $(".work,.act,.travel").css("display","none");
                $(".test").css("display","block");
                $(".work,.act,.travel").hide();
                $(".test").show();
              
                masonry_fn();
                TweenMax.to(".test",1,{opacity:"1",ease: Power2.easeOut});
                TweenMax.to(".work",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".act",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".travel",1,{opacity:"0",ease: Power2.easeOut});
                $(".kind_lists_banner a").removeClass("active");
                $(".segment-2 a").addClass("active");
            }
            else if(name == "act"){
                $(".work,.test,.travel").css("display","none");
                $(".act").css("display","block");
                $(".work,.test,.travel").hide();
                $(".act").show();
               
                masonry_fn();
                TweenMax.to(".test",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".work",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".act",1,{opacity:"1",ease: Power2.easeOut});
                TweenMax.to(".travel",1,{opacity:"0",ease: Power2.easeOut});
                
                $(".kind_lists_banner a").removeClass("active");
                $(".segment-3 a").addClass("active");
            }
            else if(name == "travel"){
                $(".work,.test,.act").css("display","none");
                $(".travel").css("display","block");
                $(".work,.test,.act").hide();
                $(".travel").show;
               
                masonry_fn();
                TweenMax.to(".test",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".work",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".act",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".travel",1,{opacity:"1",ease: Power2.easeOut});
                
                $(".kind_lists_banner a").removeClass("active");
                $(".segment-4 a").addClass("active");
            }
            else{
                $(".work,.test,.act,.travel").css("display","block");
                $(".work,.test,.act,.travel").show();
                $('#masonry').masonry({
                    itemSelector: '.item',
                    columnWidth: 10,
                    isAnimated: true
                });
                TweenMax.to(".work,.test,.act,.travel",1,{opacity:"1",ease: Power2.easeOut});
                
                $(".kind_lists_banner a").removeClass("active");
                $(".segment-0 a").addClass("active");
            }
        
    }))

    masonry_fn();
    $('.gif').gifplayer({label:""});

    $(window).resize(function(){
        
        //改變視窗時重新整理一次
        this.location.reload();
        masonry_fn();
    });
    

})




