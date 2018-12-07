// loading animation
$('.loader-inner').loaders()

window.onload=function(){
    setTimeout(function(){
        TweenMax.to(".loader-inner",0.3,{opacity:"0"})
        TweenMax.to(".loading_bg",0.7,{delay:"0.3",scaleX:"0%",transformOrigin:"100% 0%",ease: Power2.easeOut}) 
    }, 600)
}


