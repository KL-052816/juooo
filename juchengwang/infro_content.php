<?php
   $servername="localhost";
   $name="text";
   $password="123456";
   $mysql="user-value";
   $connect= new mysqli($serve,$name,$password,$mysql);
    if($con->connect_error) { 
        die("连接失败:".$connect->connect_error);
    };
    echo "连接成功";

 $table="create table user (
    id char(10),
    password char(10)
   
)";

if($connect->query($table)===true) {
    echo "成功";
}else {
    echo "失败";
};
 $admin= $_POST["admin"];
 $password= $_POST["password"];
    $insert="insert into user (id,password) values ('$admin',' $password');";
    if($connect->query($insert)===true) {
        echo "数据插入成功";
    }else {
        echo "数据插入失败";
    };
    // $update="update user-value set '用户名'=id;";

    // if($connect->query($update)) {
    //     echo "数据修改成功";
    // }else {
    //     echo "数据修改失败";
    // }

?>