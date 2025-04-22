<?php
// 獲取從表單提交的資料
$name = $_POST['name'];
$email = $_POST['email'];
$age = $_POST['age'];

// 儲存資料到檔案
$file = 'user_data.txt';
$current_data = file_get_contents($file);
$new_data = "Name: $name, Email: $email, Age: $age\n";
$current_data .= $new_data;

file_put_contents($file, $current_data);

echo "User data saved successfully!";
?>