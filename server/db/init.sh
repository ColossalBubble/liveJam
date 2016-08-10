#!/bin/bash

DB='liveJam_development'
DB_USER='liveJam'
DB_PASSWORD=''

sql="
  DROP DATABASE IF EXISTS $DB;
  CREATE DATABASE $DB;
  CREATE USER '$DB_USER'@'localhost' IDENTIFIED BY '$DB_PASSWORD';
  GRANT ALL PRIVILEGES ON $DB.* TO '$DB_USER'@'localhost';
  FLUSH PRIVILEGES;
"

echo $sql | mysql -u root -p
