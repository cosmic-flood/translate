(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d="\u041f\u0440\u0435\u0432\u0435\u0434\u0438",e=this||self;function f(a,w){a=a.split(".");var b=e;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===w?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=w};var g={0:d,1:"\u041e\u0442\u043a\u0430\u0436\u0438",2:"\u0417\u0430\u0442\u0432\u043e\u0440\u0438",3:function(a){return"Google \u0458\u0430 \u043f\u0440\u0435\u0432\u0435\u0434\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0441\u043a\u0438 \u043e\u0432\u0430\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0430: "+a},4:function(a){return"\u041f\u0440\u0435\u0432\u0435\u0434\u0435\u043d\u043e \u043d\u0430: "+a},5:"\u0413\u0440\u0435\u0448\u043a\u0430: \u0421\u0435\u0440\u0432\u0435\u0440\u043e\u0442 \u043d\u0435 \u043c\u043e\u0436\u0435\u0448\u0435 \u0434\u0430 \u0433\u043e \u0438\u0441\u043f\u043e\u043b\u043d\u0438 \u0412\u0430\u0448\u0435\u0442\u043e \u0431\u0430\u0440\u0430\u045a\u0435. \u041e\u0431\u0438\u0434\u0435\u0442\u0435 \u0441\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u043f\u043e\u0434\u043e\u0446\u043d\u0430.",
6:"\u0414\u043e\u0437\u043d\u0430\u0458\u0442\u0435 \u043f\u043e\u0432\u0435\u045c\u0435",7:function(a){return"\u041e\u0432\u043e\u0437\u043c\u043e\u0436\u0435\u043d\u043e \u043e\u0434 "+a},8:d,9:"\u0421\u0435 \u043f\u0440\u0435\u0432 \u0435\u0434\u0443\u0432\u0430",10:function(a){return"\u041f\u0440\u0435\u0432\u0435\u0434\u0438 \u0458\u0430 \u043e\u0432\u0430\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0430: "+(a+" \u0441\u043e Google \u041f\u0440\u0435\u0432\u0435\u0434\u0443\u0432\u0430\u0447?")},
11:function(a){return"\u0412\u0438\u0434\u0438 \u0458\u0430 \u043e\u0432\u0430\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0430: "+a},12:"\u041f\u0440\u0438\u043a\u0430\u0436\u0438 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b",13:"\u0421\u043e\u0434\u0440\u0436\u0438\u043d\u0430\u0442\u0430 \u043d\u0430 \u043e\u0432\u0430\u0430 \u043b\u043e\u043a\u0430\u043b\u043d\u0430 \u0434\u0430\u0442\u043e\u0442\u0435\u043a\u0430 \u045c\u0435 \u0431\u0438\u0434\u0435 \u0438\u0441\u043f\u0440\u0430\u0442\u0435\u043d\u0430 \u0437\u0430 \u043f\u0440\u0435\u0432\u043e\u0434 \u0434\u043e Google \u043f\u0440\u0435\u043a\u0443 \u0431\u0435\u0437\u0431\u0435\u0434\u043d\u0430 \u0432\u0440\u0441\u043a\u0430.",
14:"\u0421\u043e\u0434\u0440\u0436\u0438\u043d\u0430\u0442\u0430 \u043d\u0430 \u043e\u0432\u0430\u0430 \u0431\u0435\u0437\u0431\u0435\u0434\u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u045c\u0435 \u0431\u0438\u0434\u0435 \u0438\u0441\u043f\u0440\u0430\u0442\u0435\u043d\u0430 \u0437\u0430 \u043f\u0440\u0435\u0432\u043e\u0434 \u0434\u043e Google \u043f\u0440\u0435\u043a\u0443 \u0431\u0435\u0437\u0431\u0435\u0434\u043d\u0430 \u0432\u0440\u0441\u043a\u0430.",15:"\u0421\u043e\u0434\u0440\u0436\u0438\u043d\u0430\u0442\u0430 \u043d\u0430 \u043e\u0432\u0430\u0430 \u0438\u043d\u0442\u0440\u0430\u043d\u0435\u0442 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u045c\u0435 \u0431\u0438\u0434\u0435 \u0438\u0441\u043f\u0440\u0430\u0442\u0435\u043d\u0430 \u0437\u0430 \u043f\u0440\u0435\u0432\u0435\u0434\u0443\u0432\u0430\u045a\u0435 \u0434\u043e Google \u043f\u0440\u0435\u043a\u0443 \u0431\u0435\u0437\u0431\u0435\u0434\u043d\u0430 \u0432\u0440\u0441\u043a\u0430.",
16:"\u041e\u0434\u0431\u0435\u0440\u0438 \u0458\u0430\u0437\u0438\u043a",17:function(a){return"\u0418\u0441\u043a\u043b\u0443\u0447\u0438 "+(a+" \u043f\u0440\u0435\u0432\u043e\u0434")},18:function(a){return"\u0418\u0441\u043a\u043b\u0443\u0447\u0438 \u0437\u0430:"+a},19:"\u0421\u0435\u043a\u043e\u0433\u0430\u0448 \u0441\u043e\u043a\u0440\u0438\u0458",20:"\u0418\u0437\u0432\u043e\u0440\u0435\u043d \u0442\u0435\u043a\u0441\u0442:",21:"\u041f\u0440\u0438\u0434\u043e\u043d\u0435\u0441\u0438 \u0437\u0430 \u043f\u043e\u0434\u043e\u0431\u0430\u0440 \u043f\u0440\u0435\u0432\u043e\u0434",
22:"\u041f\u0440\u0438\u0434\u043e\u043d\u0435\u0441\u0438",23:"\u041f\u0440\u0435\u0432\u0435\u0434\u0438 \u0433\u0438 \u0441\u0438\u0442\u0435 ",24:"\u041e\u0431\u043d\u043e\u0432\u0438 \u0433\u0438 \u0441\u0438\u0442\u0435",25:"\u041e\u0442\u043a\u0430\u0436\u0438 \u0433\u0438 \u0441\u0438\u0442\u0435 ",26:"\u041f\u0440\u0435\u0432\u0435\u0434\u0438 \u0434\u0435\u043b\u043e\u0432\u0438 \u043d\u0430 \u043c\u043e\u0458\u043e\u0442 \u0458\u0430\u0437\u0438\u043a ",27:function(a){return"\u041f\u0440\u0435\u0432\u0435\u0434\u0438 \u0441\u00e8 \u043d\u0430 "+
a},28:"\u041f\u0440\u0438\u043a\u0430\u0436\u0438 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u043d\u0438 \u0458\u0430\u0437\u0438\u0446\u0438",29:"\u041e\u043f\u0446\u0438\u0438",30:"\u0418\u0441\u043a\u043b\u0443\u0447\u0438  \u043f\u0440\u0435\u0432\u043e\u0434 \u043d\u0430 \u043e\u0432\u0430\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 ",31:null,32:"\u041f\u0440\u0438\u043a\u0430\u0436\u0438 \u0430\u043b\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0438 \u043f\u0440\u0435\u0432\u043e\u0434\u0438.",
33:"\u041a\u043b\u0438\u043a\u043d\u0435\u0442\u0435 \u043d\u0430 \u0437\u0431\u043e\u0440\u043e\u0432\u0438\u0442\u0435 \u043f\u043e\u0433\u043e\u0440\u0435 \u0437\u0430 \u0434\u0430 \u0432\u0438\u0434\u0438\u0442\u0435 \u0430\u043b\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0438 \u043f\u0440\u0435\u0432\u043e\u0434\u0438",34:"\u0423\u043f\u043e\u0442\u0440\u0435\u0431\u0430",35:"\u0412\u043b\u0435\u0447\u0435\u0442\u0435 \u0441\u043e \u043a\u043e\u043f\u0447\u0435\u0442\u043e Shift \u0437\u0430 \u0434\u0430 \u0433\u043e \u043f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u0440\u0435\u0434\u043e\u0441\u043b\u0435\u0434\u043e\u0442.",
36:"\u041a\u043b\u0438\u043a\u043d\u0435\u0442\u0435 \u0437\u0430 \u0434\u0440\u0443\u0433\u0438 \u043f\u0440\u0435\u0432\u043e\u0434\u0438",37:"\u0414\u0440\u0436\u0435\u0442\u0435 \u0433\u043e \u043a\u043e\u043f\u0447\u0435\u0442\u043e Shift, \u043a\u043b\u0438\u043a\u043d\u0435\u0442\u0435 \u0438 \u0432\u043b\u0435\u0447\u0435\u0442\u0435 \u0433\u0438 \u0437\u0431\u043e\u0440\u043e\u0432\u0438\u0442\u0435 \u043f\u043e\u0433\u043e\u0440\u0435 \u0437\u0430 \u0434\u0430 \u0433\u043e \u043f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u043d\u0438\u0432\u043d\u0438\u043e\u0442 \u0440\u0435\u0434\u043e\u0441\u043b\u0435\u0434.",
38:"\u0412\u0438 \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u0438\u043c\u0435 \u0448\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0438\u0432\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0433 \u0437\u0430 \u043f\u0440\u0435\u0432\u043e\u0434 \u043d\u0430 Google Translate.",39:"\u0423\u043f\u0440\u0430\u0432\u0443\u0432\u0430\u0458 \u0441\u043e \u043f\u0440\u0435\u0432\u043e\u0434\u043e\u0442 \u043d\u0430 \u043e\u0432\u0430\u0430 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430",
40:"\u041a\u043b\u0438\u043a\u043d\u0435\u0442\u0435 \u043d\u0430 \u0437\u0431\u043e\u0440 \u0437\u0430 \u0434\u0440\u0443\u0433\u0438 \u043f\u0440\u0435\u0432\u043e\u0434\u0438 \u0438\u043b\u0438 \u043a\u043b\u0438\u043a\u043d\u0435\u0442\u0435 \u0434\u0432\u0430\u043f\u0430\u0442\u0438 \u0437\u0430 \u0434\u0438\u0440\u0435\u043a\u0442\u043d\u043e \u0434\u0430 \u0433\u043e \u0443\u0440\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0435\u0432\u043e\u0434\u043e\u0442",41:"\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u0435\u043d \u0442\u0435\u043a\u0441\u0442",
42:d,43:d,44:"\u0412\u0430\u0448\u0430\u0442\u0430 \u043a\u043e\u0440\u0435\u043a\u0446\u0438\u0458\u0430 \u0435 \u043f\u043e\u0434\u043d\u0435\u0441\u0435\u043d\u0430.",45:"\u0413\u0440\u0435\u0448\u043a\u0430: \u0458\u0430\u0437\u0438\u043a\u043e\u0442 \u043d\u0430 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0442\u0430 \u043d\u0435 \u0435 \u043f\u043e\u0434\u0434\u0440\u0436\u0430\u043d.",46:"\u0412\u0438\u045f\u0435\u0442 \u201e\u041f\u0440\u0435\u0432\u0435\u0434\u0438 \u043d\u0430 Google\u201c"};var h=window.google&&google.translate&&google.translate._const;
if(h){var k;a:{for(var l=[],m=[""],n=0;n<m.length;++n){var p=m[n].split(","),q=p[0];if(q){var r=Number(p[1]);if(!(!r||.1<r||0>r)){var t=Number(p[2]),u=new Date,v=1E4*u.getFullYear()+100*(u.getMonth()+1)+u.getDate();!t||t<v||l.push({version:q,ratio:r,a:t})}}}var x=0,y=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),z=Number(y&&y[1])||Math.random();for(n=0;n<l.length;++n){var A=l[n];x+=A.ratio;if(1<=x)break;if(z<x){k=A.version;break a}}k="TE_20200210_00"}var B="/element/%s/e/js/element/element_main.js".replace("%s",
k);if("0"==k){var C=" element %s e js element element_main.js".split(" ");C[C.length-1]="main_mk.js";B=C.join("/").replace("%s",k)}if(h._cjlc)h._cjlc(h._pas+h._pah+B);else{var D=h._pas+h._pah+B,E=document.createElement("script");E.type="text/javascript";E.charset="UTF-8";E.src=translate.resourcesUrl+"/js/element_main.js";var F=document.getElementsByTagName("head")[0];F||(F=document.body.parentNode.appendChild(document.createElement("head")));F.appendChild(E)}f("google.translate.m",g);f("google.translate.v",k)};}).call(window)