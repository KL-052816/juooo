// 头部
// 头部手机二维码
$(".header .header-top li:last").on({
    mouseenter:function(){
        $(".mobile").css("display","block")
    },
    mouseleave:function(){
        $(".mobile").css("display","none")
    },
})
//头部全国列表
$(".all").on({
    mouseenter:function(){
        $("#a-display").css("display","block")
    },
    mouseleave:function(){
        $("#a-display").css("display","none")
    },
})
// 头部左侧列表
$(".nav-left>a").on({
    mouseenter:function(){
        //进入时改变i标签的背景图的定位
        num1=parseInt($(".nlbg1").css("background-positionX"))
        $(this).children(".nlbg1").css("background-positionX",num1-32+"px")
        $(this).children(".nlbg2").css("background-positionX","-461px")
        //当鼠标进入左侧导航的时候显示隐藏块
        index1=$(this).index()
        $(".nl-none ul li").eq(index1).show()
    },
    mouseleave:function(){
        //进入时变回来原来的i标签的背景图的定位
        $(this).children(".nlbg1").css("background-positionX",num1+"px")
        $(this).children(".nlbg2").css("background-positionX","-474px")
        //离开时隐藏块隐藏
        $(".nl-none ul li").eq(index1).hide()
    },
})
$(".nl-none ul li").on({
    mouseenter:function(){
        // 进入时显示本块
        $(this).show()
        //进入时更改对应的a标签里的样式
        index2=$(this).index()
        $(".nav-left>a").eq(index2).css({"background":"#fff","color":"#ff7919"})
        $(".nav-left>a").eq(index2).children(".nlbg1").css("background-positionX",num1-32+"px")
        $(".nav-left>a").eq(index2).children(".nlbg2").css("background-positionX","-461px")
    },
    mouseleave:function(){
        $(this).hide()
        // 离开时变回原来的样式
        $(".nav-left>a").eq(index2).css({"background":"#fafafa","color":"#333"})
        $(".nav-left>a").eq(index2).children(".nlbg1").css("background-positionX",num1+"px")
        $(".nav-left>a").eq(index2).children(".nlbg2").css("background-positionX","-474px")
    },
})
// 头部结束
