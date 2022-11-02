/******************************
QQ交流群：1077223830
脚本名称:知音漫客

*******************************

[rewrite_local]
^https?:\/\/logger\.zymk\.cn.*?|https?:\/\/apigate\.zymk\.cn.*?*? url script-response-body zymk1.js


[mitm]
hostname = logger.zymk.cn,apigate.zymk.cn

*******************************/
var body=$response.body;
body = body.replace(/"status\":\d+/g,'"status":0');
body = body.replace(/"isvip\":\d/g,'"isvip":1');
$done(body);
