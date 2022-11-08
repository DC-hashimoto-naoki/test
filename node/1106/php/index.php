<?php
$dsn      = 'mysql:charset=UTF8;dbname=LAA1360251-cxtnb8;host=mysql152.phy.lolipop.lan';
$user     = 'LAA1360251';
$password = 'PR15DADB';
// DBへ接続
try {
    $dbh = new PDO($dsn, $user, $password);
    // クエリの実行
    $query = "SELECT * FROM hanbai";
    $stmt = $dbh->query($query);
    // 表示処理
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo $row["goods_id"];
    }
} catch (PDOException $e) {
    print("データベースの接続に失敗しました" . $e->getMessage());
    die();
}
// 接続を閉じる
$dbh = null;

?>

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>

<body>

</body>

</html>