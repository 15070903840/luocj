<?php
header("Content-type:text/html;charset=utf8");
$i1 = $_GET['i1'];
$i2 = $_GET['i2'];
if($i2  && $i1 ){
    echo('登录成功');
}else{
    echo('请输入信息');
};


?>