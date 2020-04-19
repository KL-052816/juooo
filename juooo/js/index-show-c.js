$(".nav-left").on({
    mouseenter:function(){
        $(this).show()
    },
    mouseleave:function(){
        $(this).hide()
    }
})
$(".all-shop").mouseenter(function(){
    $(".nav-left").show()
})
$(".all-shop").mouseleave(function(){
    $(".nav-left").hide()
})
$(".w1204").on("click",".linb", (event)=>{
    console.log($(event.tarage))
    $(".w1204 a").removeClass("active")
    $(event.tarage).addClass("active")
    
})
$(".pcity-city").on("click",".pcity-city-a span", function(){
    $(".pcity-city span").removeClass("active-a")
    $(this).addClass("active-a")  
})
$(".pcity-city .pcity-city-a-last").mouseenter(function(){
    $(".citys").show()
})
// $(".pcity-city .pcity-city-a-last").mouseleave(function(){
//     $(".citys").hide()
// })
$(".citys").mouseenter(function(){
    $(".citys").show()
})
$(".citys").mouseleave(function(){
    $(".citys").hide()
})