
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>聚橙网   </title>

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
  
      margin: 0 auto 100px;
      padding: 45px;
      text-align: center;
      /* box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); */
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
   
span{
  color:red;
  float:left;
}
</style>

</head>
<body>
<?php
  $servername="localhost";
  $name="text";
  $password="123456";
  $mysql="user-value";
  $connect=new mysqli($servername,$name,$password,$mysql);
//   if($connect->connect_error) { 
//     die("数据库连接失败:".$connect->connect_error);
// }
// echo "数据库连接成功";
// $admin=$password1="";

if($_SERVER["REQUEST_METHOD"]=="POST") {
  if(empty($_POST["admin"])) {
      $admin="*当前字段不能为空";
  }else {
               
    if(preg_match("/^[_a-zA-Z0-9]{1,}$/", $_POST["admin"])) {
        $admin="";
    }else {
        $admin="*用户名必须为数字字母下划线";
    }
  };
  if(empty($_POST["password"])) {
    $password1="*当前字段不能为空";
}else {
   
    if(preg_match("/^[a-zA-Z0-9]{6,}$/", $_POST["password"])) {
        $password1="";
    }else {
        $password1="*密码长度不小于六位且为字母数字";
    }
};
  };

?>
<div class="htmleaf-container">
    <div id="wrapper" class="login-page">
      <div id="login_form" class="form">
     
        <form class="login-form" action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
          <input type="text" placeholder="用户名" id="user_name" name="admin"/>
          <span><?php echo $admin; ?></span>
          <input type="password" placeholder="密码" id="password" name="password"/>
          <span><?php echo $password1; ?></span>
          <button id="login">注册</button>
       
        </form>
      </div>
    </div>
</div>


</body>
<!-- <script>
  $("#login").click(function(){
    alert("祖册成功")
  });

</script> -->
</html>

