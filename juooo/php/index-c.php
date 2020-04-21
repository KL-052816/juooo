<?php
    header("Access-Control-Allow-Origin: *");
    // 设置Access-Control-Allow-Origin响应头 使任何一个地址发起的请求都能调用该接口
    header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
    // 设置需要支持的请求方式
    header("Access-Control-Allow-Headers: x-requested-with, content-type");
    // 允许请求的字段
    $c=$_GET['city'];
    $ty=$_GET['type'];
    // 连接数据库
    $server="localhost";
    $name="root";
    $pwd="123456";
    $mysql="juooo";

    $con=new mysqli($server,$name,$pwd,$mysql);

    if($con->connect_error){
        die("连接失败:".$con->connect_error);
    }
    // 获取数据
    if($c=="全部"){
        $sql="select * from orange where type='{$ty}' limit 15";
        
    }else{
        $sql="select * from orange where city='{$c}'and type='{$ty}' limit 15;";
        
    };
    // $sql="select * from orange limit 15";
    $list=$con->query($sql);
    if($list->num_rows>0){
        while($arr=$list->fetch_assoc()){
            $array[]=$arr;
        }
    }
    echo json_encode($array);
?>