<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script type="text/javascript">
        $.ajax({
            url: 'API/about',
            dataType: 'json',
            method: 'get',
            success: function(data){
                console.log(JSON.parse(data));
            },
            error: function(err) {
                console.error(err);
            }
        });
    </script>
</head>
<body>
    <h1>home!</h1>
</body>
</html>