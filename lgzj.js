/*******************************
脚本名称:灵敢足迹
*******************************
[rewrite_local]
^https:\/\/footprint-api\.quthing\.com\/vip\/state url script-response-body https://raw.githubusercontent.com/wtxj/Quantumult_X/main/lgzj.js
[mitm] 
hostname = footprint-api.quthing.com
*******************************/
var _0x3fe0=['wqINDFEKw47Co8OmFkhSW8KCw5nDgw==','w4XDtSxXN8OVwoQ8Ay9fw6PCmcKIwqzCgER7wpRP','wrLDocOqO8KgXMOcAsKlP8KcBiULXsKyw7A=','UwnCjMO3UcOnNA==','HMO7KT80wprDnA==','wrcBwrk3w7bCrTk=','w4gdwrh4wqbDuic=','H8KKZB0/wrnCpEx2E8OaF8Ofw4HDp8OYOTw=','wrUrwrXDuB4dw4U=','woZRwpcW'];(function(_0x33caaa,_0x3fe032){var _0x2f1e03=function(_0x3e4a12){while(--_0x3e4a12){_0x33caaa['push'](_0x33caaa['shift']());}};_0x2f1e03(++_0x3fe032);}(_0x3fe0,0x13d));var _0x2f1e=function(_0x33caaa,_0x3fe032){_0x33caaa=_0x33caaa-0x0;var _0x2f1e03=_0x3fe0[_0x33caaa];if(_0x2f1e['BzpdsU']===undefined){(function(){var _0x3d1c23;try{var _0x2ef2b2=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x3d1c23=_0x2ef2b2();}catch(_0xd4593c){_0x3d1c23=window;}var _0x3da2af='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3d1c23['atob']||(_0x3d1c23['atob']=function(_0x1628d3){var _0x4c8b92=String(_0x1628d3)['replace'](/=+$/,'');var _0x52bdc3='';for(var _0xa3208e=0x0,_0x552598,_0x18ed76,_0x746f5d=0x0;_0x18ed76=_0x4c8b92['charAt'](_0x746f5d++);~_0x18ed76&&(_0x552598=_0xa3208e%0x4?_0x552598*0x40+_0x18ed76:_0x18ed76,_0xa3208e++%0x4)?_0x52bdc3+=String['fromCharCode'](0xff&_0x552598>>(-0x2*_0xa3208e&0x6)):0x0){_0x18ed76=_0x3da2af['indexOf'](_0x18ed76);}return _0x52bdc3;});}());var _0x382d80=function(_0x456d25,_0x10b3cb){var _0x197254=[],_0x4925d8=0x0,_0x42c5bb,_0x5959c5='',_0x30f801='';_0x456d25=atob(_0x456d25);for(var _0x5513ab=0x0,_0xda9071=_0x456d25['length'];_0x5513ab<_0xda9071;_0x5513ab++){_0x30f801+='%'+('00'+_0x456d25['charCodeAt'](_0x5513ab)['toString'](0x10))['slice'](-0x2);}_0x456d25=decodeURIComponent(_0x30f801);var _0x5ae3a4;for(_0x5ae3a4=0x0;_0x5ae3a4<0x100;_0x5ae3a4++){_0x197254[_0x5ae3a4]=_0x5ae3a4;}for(_0x5ae3a4=0x0;_0x5ae3a4<0x100;_0x5ae3a4++){_0x4925d8=(_0x4925d8+_0x197254[_0x5ae3a4]+_0x10b3cb['charCodeAt'](_0x5ae3a4%_0x10b3cb['length']))%0x100;_0x42c5bb=_0x197254[_0x5ae3a4];_0x197254[_0x5ae3a4]=_0x197254[_0x4925d8];_0x197254[_0x4925d8]=_0x42c5bb;}_0x5ae3a4=0x0;_0x4925d8=0x0;for(var _0x298dda=0x0;_0x298dda<_0x456d25['length'];_0x298dda++){_0x5ae3a4=(_0x5ae3a4+0x1)%0x100;_0x4925d8=(_0x4925d8+_0x197254[_0x5ae3a4])%0x100;_0x42c5bb=_0x197254[_0x5ae3a4];_0x197254[_0x5ae3a4]=_0x197254[_0x4925d8];_0x197254[_0x4925d8]=_0x42c5bb;_0x5959c5+=String['fromCharCode'](_0x456d25['charCodeAt'](_0x298dda)^_0x197254[(_0x197254[_0x5ae3a4]+_0x197254[_0x4925d8])%0x100]);}return _0x5959c5;};_0x2f1e['gUvzML']=_0x382d80;_0x2f1e['jLoCkJ']={};_0x2f1e['BzpdsU']=!![];}var _0x3e4a12=_0x2f1e['jLoCkJ'][_0x33caaa];if(_0x3e4a12===undefined){if(_0x2f1e['TJCAZi']===undefined){_0x2f1e['TJCAZi']=!![];}_0x2f1e03=_0x2f1e['gUvzML'](_0x2f1e03,_0x3fe032);_0x2f1e['jLoCkJ'][_0x33caaa]=_0x2f1e03;}else{_0x2f1e03=_0x3e4a12;}return _0x2f1e03;};var body=$response[_0x2f1e('0x2','JT[]')];body=body[_0x2f1e('0x8','TvJI')](/"validVip\":\w+/g,_0x2f1e('0x3','K*73'));body=body[_0x2f1e('0x7','gG6X')](/"expireTime\":\d+/g,'\x22expireTime\x22:9999999999999');body=body[_0x2f1e('0x6','liCv')](/"trialPeriod\":\w+/g,_0x2f1e('0x0','3OPl'));body=body[_0x2f1e('0x1','X(GG')](/"checkIsExpire\":false/g,_0x2f1e('0x4','styw'));body=body[_0x2f1e('0x9','aJKC')](/"checkIsVip\":false/g,_0x2f1e('0x5','R[jJ'));$done(body);
