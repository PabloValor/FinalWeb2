<?php

namespace API\Database;

class Database {
    public function getDB() {
        $dbhost="localhost";
        $dbuser="root";
        $dbpass="root";
        $dbname="DirtyTrucks";

        $dbConnection = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);

        $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        return $dbConnection;
    }
}
