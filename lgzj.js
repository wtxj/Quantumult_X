/*******************************
脚本名称:灵敢足迹
*******************************
[rewrite_local]
^https:\/\/footprint-api\.quthing\.com\/vip\/state url script-response-body https://raw.githubusercontent.com/wtxj/Quantumult_X/main/lgzj.js
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
