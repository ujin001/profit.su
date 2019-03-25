<?php

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
		exit;
	}

	$name  = htmlspecialchars($_POST['name']);
	$mobile  = htmlspecialchars($_POST['mobile']);
	$product  = !empty($_POST['product']) ? htmlspecialchars($_POST['product']) : '';
	$club  = !empty($_POST['club']) ? htmlspecialchars($_POST['club']) : '';
	$email  = !empty($_POST['email']) ? htmlspecialchars($_POST['email']) : 'Нет';
	$goods  = !empty($_POST['goods']) ? htmlspecialchars($_POST['goods']) : '';

	$product = !empty($product)
			? '<img src="' . $product . '" alt="product"></img>'
			: (!empty($goods) ? $goods : 'Заявка без продукта');

	$to = "profit-nl@yandex.ru";
	$subject = "New request from the site (" . $_SERVER['SERVER_NAME'] . ")";

	$body = "<head><meta charset=\"utf-8\"><title>Новая заявка с сайта! (" . $_SERVER['SERVER_NAME'] . ")</title><style>*{margin:0;padding: 0;font: 16px normal Arial, sans-serif;color: #777}h1{font-size: 28px;font-weight: bold;color: #ccc}body{background: #f0f0f0}hr{margin: 30px 0 ;background: #ccc;display: block;width:100%;height:1px;border:none}.message{padding: 5%;box-sizing: border-box}p{margin-bottom: 15px}.input{font-weight: bold;color: #aaa}</style></head><body><div class=\"message\"><h1>Данные:</h1>".
			"<hr><p><span class=\"input\">Имя: </span>" . $name . "</p>".
			"<p><span class=\"input\">Номер телефона: </span>" . $mobile . "</p>" .
			"<p><span class=\"input\">Адрес электронной почты: </span>" . $email . "</p>" .
			"<hr><p><span class=\"input\">Продукт: </span>" . $product . "</p>" .
			"<hr><p><span class=\"input\">Client Club: </span>" . ($club ? 'да' : 'нет') . "</p></div></body>";
	$headers = 'From: info@' . $_SERVER['SERVER_NAME'] . "\r\n" ;
	$headers .='Reply-To: '. $to . "\r\n" ;
	$headers .='X-Mailer: PHP/' . phpversion();
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";
	mail($to, $subject, $body,$headers);
    exit(0);
?>