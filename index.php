<!doctype html>
<html lang="es" ng-app="DirtyTrucks">
<head>
    <meta charset="UTF-8">
    <title>Dirty Trucks Inc.</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
    <link rel="shortcut icon" href="favicon.ico" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,700,300' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="public/css/vendor/materialize.css"/>
    <!--<link rel="stylesheet" href="public/css/vendor/angular-busy.css"/>-->
    <link rel="stylesheet" href="public/css/main.css"/>
</head>
<body>
    <div class="container">
        <h1 class="center-align">Dirty Trucks Inc.</h1>
        <ng-view></ng-view>
    </div>

    <script type="text/javascript" src="public/scripts/vendor/jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="public/scripts/vendor/angular.min.js"></script>
    <script type="text/javascript" src="public/scripts/vendor/materialize.js"></script>

    <script type="text/javascript" src="public/scripts/vendor/angular-route.min.js"></script>
    <script type="text/javascript" src="public/scripts/vendor/angular-resource.min.js"></script>
    <!--<script type="text/javascript" src="public/scripts/vendor/angular-busy.js"></script>-->
    <script type="text/javascript" src="public/scripts/vendor/angular-ui-router.min.js"></script>
    <script type="text/javascript" src="public/scripts/vendor/angular-materialize.js"></script>
    <script type="text/javascript" src="public/scripts/app/directives.js"></script>
    <script type="text/javascript" src="public/scripts/app/controllers.js"></script>
    <script type="text/javascript" src="public/scripts/app/services.js"></script>
    <script type="text/javascript" src="public/scripts/app/app.js"></script>

    <script type="text/javascript" src="public/scripts/main.js"></script>
</body>
</html>