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
$(".citys").mouseenter(function(){
    $(".citys").show()
})
$(".citys").mouseleave(function(){
    $(".citys").hide()
})
$(".show-frist").mouseenter(function(){
    $(".show-frist-1").show()
})
$(".show-frist").mouseleave(function(){
    $(".show-frist-1").hide()
})
$(".show-second").mouseenter(function(){
    $(".show-second-1").show()
})
$(".show-second").mouseleave(function(){
    $(".show-second-1").hide()
})
$(".show-thrid").mouseenter(function(){
    $(".show-thrid-1").show()
})
$(".show-thrid").mouseleave(function(){
    $(".show-thrid-1").hide()
})
$(".show-fifth").mouseenter(function(){
    $(".show-fifth-1").show()
})
$(".show-fifth").mouseleave(function(){
    $(".show-fifth-1").hide()
})
$(".show-sixed").mouseenter(function(){
    $(".show-sixed-1").show()
})
$(".show-sixed").mouseleave(function(){
    $(".show-sixed-1").hide()
})
function jump(){
    var p=$(".p1").html()
    window.location.href="./detail-g.html?id"+p
    console.log(1111111)
}
$(".jump-m-c").click(()=>{
    console.log(11111)
    window.location.href="./concert-g.html"
})