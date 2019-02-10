// loading animation
$('.loader-inner').loaders()

window.onload=function(){
    setTimeout(function(){
        TweenMax.to(".loader-inner",0.3,{opacity:"0"})
        TweenMax.to(".loading_bg",0.7,{delay:"0.3",scaleX:"0%",transformOrigin:"100% 0%",ease: Power2.easeOut}) 
    }, 600)
}


//selection


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
                TweenMax.to(".test",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".work",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".act",1,{opacity:"0",ease: Power2.easeOut});
                TweenMax.to(".travel",1,{opacity:"1",ease: Power2.easeOut});
                
                $(".kind_lists_banner a").removeClass("active");
                $(".segment-4 a").addClass("active");
            }
            else{
                $(".work,.test,.act,.travel").css("display","block");
                TweenMax.to(".work,.test,.act,.travel",1,{opacity:"1",ease: Power2.easeOut});
                
                $(".kind_lists_banner a").removeClass("active");
                $(".segment-0 a").addClass("active");
            }
        
    }))
    //瀑布流
    // $('.box').masonry({
    //     itemSelector: '.item',
    // });
})


