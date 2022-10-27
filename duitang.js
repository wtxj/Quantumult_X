/*******************************
脚本名称:堆糖
*******************************
[rewrite_local]
^https?:\/\/api\.duitang\.com url script-response-body duitang.js
[mitm] 
hostname = api.duitang.com
*******************************/
var body=$response.body;
body = body.replace(/"vip_end_at\":\d+/g,'"vip_end_at":9666666666666');
body = body.replace(/"svip_mechanism\":\d+/g,'"svip_mechanism":99');
body = body.replace(/"vip\":\w+/g,'"vip":true');
body = body.replace(/"vip_end_at_mills\":\d+/g,'"vip_end_at_mills":9666666666666');
body = body.replace(/"vip_level\":\d+/g,'"vip_level":11');
$done(body);
