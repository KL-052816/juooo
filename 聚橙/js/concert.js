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
// 中间导航
   $(".con-text").on("click","a",function(){ 
       $(".c1").remove()
       $(".con-all").removeClass("on")
        $(this).parent().children().removeClass("on")
        var c=`
        <p class="c1 ">${$(this).text()}
        <span class="close">x</span></p>  
        `
        $(".co-last").append(c)
        $(this).addClass("on")
        close()
   })
   $(".con-ty").on("click","a",function(){
       $(".c2").remove()
       $(".con-all1").removeClass("on")
       $(this).parent().children().removeClass("on")
       var c=`
       <p class="c2 ">${$(this).text()}
       <span class="close">x</span></p>  
       `
       $(".co-last").append(c)
       $(this).addClass("on")
       close()
   })
   $(".con-time").on("click","a",function(){
    $(".c3").remove()
    $(".con-all2").removeClass("on")
    $(this).parent().children().removeClass("on")
    var c=`
    <p class="c3 ">${$(this).text()}
    <span class="close">x</span></p>  
    `
    $(".co-last").append(c)
    $(this).addClass("on")
    close()
})
// 已选条件删除
function close(){
    $(".close").on("click",function(){
        $(this).parent().remove()
        console.log($(this).parent())
    })
}
// 中间导航结束
// 