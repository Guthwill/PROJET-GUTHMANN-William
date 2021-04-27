<?php

  use Doctrine\ORM\Tools\Setup;
  use Doctrine\ORM\EntityManager;
  date_default_timezone_set('America/Lima');
  require_once "../vendor/autoload.php";
  $isDevMode = true;
  $config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
  $conn = array(
    'host' => 'ec2-52-50-171-4.eu-west-1.compute.amazonaws.com',
    'driver' => 'pdo_pgsql',
    'user' => 'bdmekdfoygxyvo',
    'password' => '5449b388072ada55a71b6bd3db10fc94408010ded20e07414901c52a8ba186fb',
    'dbname' => 'dd3b7457q01jt8',
    'port' => '5432'
  );
  $entityManager = EntityManager::create($conn, $config);

?>
