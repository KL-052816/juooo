$(function(){
    $('.list-top li').on('click',function(){
        var i=$(this).index()
        // console.log(i)
        $(this).addClass('active').siblings().removeClass('active')
        $('.list-middle').eq(i).addClass('blocks').siblings().removeClass('blocks')
    })

    
})