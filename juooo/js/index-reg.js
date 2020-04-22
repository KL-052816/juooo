// 点击大列表控制显示
$(".left-help>h2").click(function(){
    var num=$(this).index()
    $(this).next().toggleClass("xianshi")
})
// 列表内点击
$(".left-help>ul a").click(function(){
    $(this).toggleClass("changeA")
})

// 搜索框跳转
$("#s-btn").click(()=>{
    var val=$("#search").val()
    var t=encodeURI(val)
    window.location.href="search-d.html?search="+t;
})