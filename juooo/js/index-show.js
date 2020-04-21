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