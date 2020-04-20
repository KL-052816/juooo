

<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title> </title>

<style type="text/css">
    .center{text-align: center;}
    .login-page {
      width: 360px;
      padding: 8% 0 0;
      margin: auto;
    }
    .form {
      position: relative;
      z-index: 1;
      background: #FFFFFF;
      max-width: 360px;
      margin: 0 auto 100px;
      padding: 45px;
      text-align: center;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }
    .form input {
      font-family: "Roboto", sans-serif;
      outline: 0;
      background: #f2f2f2;
      width: 100%;
      border: 0;
      margin: 0 0 15px;
      padding: 15px;
      box-sizing: border-box;
      font-size: 14px;
    }
    .form button {
      font-family: "Microsoft YaHei","Roboto", sans-serif;
      text-transform: uppercase;
      outline: 0;
      background: #4CAF50;
      width: 100%;
      border: 0;
      padding: 15px;
      color: #FFFFFF;
      font-size: 14px;
      -webkit-transition: all 0.3 ease;
      transition: all 0.3 ease;
      cursor: pointer;
    }
    .form button:hover,.form button:active,.form button:focus {
      background: #43A047;
    }
    .form .message {
      margin: 15px 0 0;
      color: #b3b3b3;
      font-size: 12px;
    }
    .form .message a {
      color: #4CAF50;
      text-decoration: none;
    }
    .form .register-form {
      display: none;
    }
    .container {
      position: relative;
      z-index: 1;
      max-width: 300px;
      margin: 0 auto;
    }
    .container:before, .container:after {
      content: "";
      display: block;
      clear: both;
    }
    .container .info {
      margin: 50px auto;
      text-align: center;
    }
    .container .info h1 {
      margin: 0 0 15px;
      padding: 0;
      font-size: 36px;
      font-weight: 300;
      color: #1a1a1a;
    }
    .container .info span {
      color: #4d4d4d;
      font-size: 12px;
    }
    .container .info span a {
      color: #000000;
      text-decoration: none;
    }
    .container .info span .fa {
      color: #EF3B3A;
    }
    body {
    background: orange;  
    }
   
    p.center{
        color: #fff;font-family: "Microsoft YaHei";
    }
</style>

</head>
<body>
<div class="htmleaf-container">
    <div id="wrapper" class="login-page">
      <div id="login_form" class="form">
        
        <form class="login-form"  action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
          <input type="text" placeholder="用户名" name="admin"/>
          <input type="password" placeholder="密码" name="password"/>
          <button id="login" name="login">登　录</button>
          <p class="message">还没有账户? <a href="http://localhost/juooo/zhuce-z.php">立刻创建</a></p>
        </form>
      </div>
    </div>
</div>

</body>
</html>
<?php 
    $servername="localhost";
    $name="text";
    $password="123456";
    $mysql="user-value";
    $connect=new mysqli($servername,$name,$password,$mysql);
    if($connect->connect_error) { 
      die("数据库连接失败:".$connect->connect_error);
  }
  echo "数据库连接成功";

 $admin=$_POST["admin"];
//  获取表单id
 $password=$_POST["password"];
//  获取表单密码
// $mima=$_cookie["mima"];
// $select="select * from user where  '%".$_admin."%';";

    // if($connect->query($select)) {
    //     echo "输出数据成功";
    // }else {
    //     echo "输出数据失败";
    // };



//基于刚创建的连接对象进行一次查询操作
$query= mysqli_query($connect,'select id from user ');
 
 if(!$query){
   exit('<h1>查询失败</h1>');
 }
//遍历结果集
while ($row=mysqli_fetch_assoc($query)){
  //打印结果集
 var_dump($row);
}
 //释放结果集
 mysqli_free_result($query);

//  if(isset($_POST['login'])) 
// //  检测变量是否设置
//  {
  
//      if($admin===$select){ 
    
//       echo '<script language="JavaScript">;alert("登录成功");location.href="index1-z.html";</script>;';

//     }
// else{

//    echo '<script language="JavaScript">;alert("账号或密码错误,请重新输入");</script>;';

 
//  } 
 
//  }
 
?>
