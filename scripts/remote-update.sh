#!/bin/bash

git pull &&
composer install &&
drush updb -y &&
drush locale:check &&
drush locale:update &&
drush cim -y &&
drush cr
