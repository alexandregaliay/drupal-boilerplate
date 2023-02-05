#!/bin/bash

composer update &&
drush updb -y &&
drush locale:check &&
drush locale:update &&
drush cex -y &&
drush cr
