<?php 
    header("Access-Control-Allow-Origin: *");
    // 设置Access-Control-Allow-Origin响应头 使任何一个地址发起的请求都能调用该接口
    header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
    // 设置需要支持的请求方式
    header("Access-Control-Allow-Headers: x-requested-with, content-type");
    $id=$_GET['id'];
    $connect=new mysqli('localhost','root','123456','juooo');

    // 查询数据库
    $select="select * from orange where id={$id};";

    $txt=$connect->query($select);
    //print_r($txt);
        $a=[];
    if ($txt->num_rows>0){
        while($arr=$txt->fetch_assoc()){ 
            $a[]=$arr;     
        };
        echo json_encode($a);
    };
       $connect->close();

?>