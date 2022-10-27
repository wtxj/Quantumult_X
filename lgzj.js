/*******************************
脚本名称:灵敢足迹
*******************************
[rewrite_local]
^http[s]?:\/\/footprint-api\.quthing\.com\/vip\/state url script-response-body lgzj.js
[mitm] 
hostname = footprint-api.quthing.com
*******************************/
var body=$response.body;
body = body.replace(/"validVip\":\w+/g,'"validVip":true');
body = body.replace(/"expireTime\":\d+/g,'"expireTime":9999999999999');
body = body.replace(/"trialPeriod\":\w+/g,'"trialPeriod":true');
body = body.replace(/"checkIsExpire\":false/g,'"checkIsExpire":true');
body = body.replace(/"checkIsVip\":false/g,'"checkIsVip":true');
$done(body);
