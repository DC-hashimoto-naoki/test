<?php

$pdo = null;
$stmt = null;

$dsn      = 'mysql:charset=UTF8;dbname=LAA1360251-cxtnb8;host=mysql152.phy.lolipop.lan';
$user     = 'LAA1360251';
$password = 'PR15DADB';


try {
    $option = array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::MYSQL_ATTR_MULTI_STATEMENTS => false,
    );
    $pdo = new PDO($dsn, $user, $password, $option);

    date_default_timezone_set('Asia/Tokyo');
    $current_date = date("Y-m-d H:i:s");

    // SQL作成
    $stmt = $pdo->prepare("INSERT INTO message (view_name, message, post_date) VALUES ( :view_name, :message, :current_date)");

    // 値をセット
    $stmt->bindParam(':view_name', $_POST['view_name'], PDO::PARAM_STR);
    $stmt->bindParam(':message', $_POST['message'], PDO::PARAM_STR);
    $stmt->bindParam(':current_date', $current_date, PDO::PARAM_STR);

    // SQLクエリの実行
    $res = $stmt->execute();
} catch (PDOException $e) {
    // 接続エラーのときエラー内容を取得する
    $error_message[] = $e->getMessage();
}

// メッセージのデータを取得する
$sql = "SELECT view_name,message,post_date FROM message ORDER BY post_date DESC";
$message_array = $pdo->query($sql);

$stmt = null;
$pdo = null;
?>

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>掲示板</h1>

    <form method="post">
        <div>
            <input type="text" name="view_name" id="view_name">
        </div>
        <div>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <div>
            <input type="submit" value="submit" name="btn_submit">
        </div>
    </form>

    <section>
        <?php foreach( $message_array as $value): ?>
            <h2><?php echo $value['view_name']; ?></h2>
        <?php endforeach; ?>
    </section>
</body>

</html>