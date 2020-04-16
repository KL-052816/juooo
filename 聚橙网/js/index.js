// banner图
// 页面加载时，banner开始执行
function banner2(a){
    //改变left
    $(".b-box ul").css("left",(a-1)*1200+"px")
    //运动到最后一张的时候
    if(a==-9){
        //关闭过度
        $(".b-box ul").css({"transition":"all 0s","left":"0px"}) 
        //不知原因，不能去（暂未解决）
        console.log(parseInt($(".b-box ul").css("left")))
        //显示第一张
        $(".b-box ul").css({"transition":"all 0.8s","left":"-1200px"})
        //同时小圆点高亮
        $(".b-circle>ul li").eq(0).css("opacity","1").siblings().css("opacity","0.4")
    }
    //对应的小圆点高亮
    $(".b-circle>ul li").eq(-a).css("opacity","1").siblings().css("opacity","0.4")
}
// 页面加载时执行
window.onload=function banner1(){
    setTimeout(function(){
        var bleft=Math.ceil(parseInt($(".b-box ul").css("left"))/1200)
        // console.log(bleft)
        banner2(bleft)
        banner1()
    },3000)
}
// 小圆点事件
function circle(){
    var bindex=$(this).index()
    banner2(bindex)
}
//事件委托给div
$(".b-circle").on("click","li",circle)

// 左右箭头
$(".b-box").on({
    mouseenter:function(){
        $(".b-box span").show()
    },
    mouseleave:function(){
        $(".b-box span").hide()
    }
})
$(".b-left").on("click",function(){
    var bleft1=Math.ceil(parseInt($(".b-box ul").css("left"))/-1200)
    console.log(bleft1)
})
$(".b-right").on("click",function(){
    var bright1=Math.ceil(parseInt($(".b-box ul").css("left"))/1200)
    console.log(bright1)
    // banner2(bright1)
})

// 欢聚橙卡

