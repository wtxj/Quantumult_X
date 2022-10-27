/*******************************
脚本名称:灵敢足迹
*******************************
[rewrite_local]
^https:\/\/footprint-api\.quthing\.com\/vip\/state url script-response-body https://raw.githubusercontent.com/wtxj/Quantumult_X/main/lgzj.js
[mitm] 
hostname = footprint-api.quthing.com
*******************************/
var obj = JSON.parse($response.body);
    obj["\x76\x61\x6c\x69\x64\x56\x69\x70"]= true;obj["\x65\x78\x70\x69\x72\x65\x54\x69\x6d\x65"]= 9999999999999;obj["\x74\x72\x69\x61\x6c\x50\x65\x72\x69\x6f\x64"]= true;obj["\x63\x68\x65\x63\x6b\x49\x73\x45\x78\x70\x69\x72\x65"]= true;obj["\x63\x68\x65\x63\x6b\x49\x73\x56\x69\x70"]= true;
    $done({body: JSON.stringify(obj)});

