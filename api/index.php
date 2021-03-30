<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tuupola\Middleware\HttpBasicAuthentication;

use Slim\Factory\AppFactory;
use \Firebase\JWT\JWT;

require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();

const JWT_SECRET = "123456";

$options = [
    "attribute" => "token",
    "header" => "Authorization",
    "regexp" => "/Bearer\s+(.*)$/i",
    "secure" => false,
    "algorithm" => ["HS256"],
    "secret" => JWT_SECRET,
    "path" => ["/api"],
    "ignore" => ["/api/hello","/api/login","/api/createUser"],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'JWT Non valide');
        $response = $response->withStatus(401);
        return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data)); 
    }
];

$app->get('/hello/{name}',
    function (Request $request, Response $response, $args) {
        $array = [];

        $array ["nom"] = $args["name"];
        return $response->getBody()->write(json_encode($array));

    });

$app->get('/api/hello/{name}',
function (Request $request, Response $response, $args) {
    $array = [];

    $array ["nom"] = $args["name"];
    return $response->getBody()->write(json_encode($array));

});

echo("launch");
$app->add(new Tuupola\Middleware\JwtAuthentication($options));
$app->run();