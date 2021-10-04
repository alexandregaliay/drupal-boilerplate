<img src="web/themes/custom/starter/logo.svg" width="90">

# Drupal Boilerplate

-- Work in progress --

## Local settings
```php
// Config sync
$settings['config_sync_directory'] = '../config/sync';

// Database
$databases['default']['default'] = [
  'database' => 'drupal',
  'username' => 'drupal',
  'password' => 'drupal',
  'host' => 'mysql',
  'port' => '3306',
  'driver' => 'mysql',
  'prefix' => '',
  'collation' => 'utf8mb4_general_ci',
];
```
