var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var g=window,h=document,m=g.location,n=function(){},q=/\[native code\]/,u=function(a,b,c){return a[b]=a[b]||c},aa=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b},w=function(){var a;if((a=Object.create)&&q.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a},z=u(g,"gapi",{});var A;A=u(g,"___jsl",w());u(A,"I",0);u(A,"hel",10);var B=function(){var a=m.href;if(A.dpo)var b=A.h;else{b=A.h;var c=/([#].*&|[#])jsh=([^&#]*)/g,d=/([?#].*&|[?#])jsh=([^&#]*)/g;if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b},ba=function(a){var b=u(A,"PQ",[]);A.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},C=function(a){return u(u(A,"H",w()),a,w())};var D=u(A,"perf",w()),F=u(D,"g",w()),ca=u(D,"i",w());u(D,"r",[]);w();w();var G=function(a,b,c){var d=D.r;"function"===typeof d?d(a,b,c):d.push([a,b,c])},K=function(a,b,c){b&&0<b.length&&(b=J(b),c&&0<c.length&&(b+="___"+J(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=u(ca,"_p",w()),u(b,c,w())[a]=(new Date).getTime(),G(a,"_p",c))},J=function(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")};var L=w(),M=[],N=function(a){throw Error("Bad hint"+(a?": "+a:""));};M.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?A[b]=u(A,b,[]).concat(c):u(A,b,c)}if(b=a.u)a=u(A,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var da=/^(\/[a-zA-Z0-9_\-]+)+$/,O=[/\/amp\//,/\/amp$/,/^\/amp$/],ea=/^[a-zA-Z0-9\-_\.,!]+$/,fa=/^gapi\.loaded_[0-9]+$/,ha=/^[a-zA-Z0-9,._-]+$/,la=function(a,b,c,d){var e=a.split(";"),f=e.shift(),l=L[f],k=null;l?k=l(e,b,c,d):N("no hint processor for: "+f);k||N("failed to generate load url");b=k;c=b.match(ia);(d=b.match(ja))&&1===d.length&&ka.test(b)&&c&&1===c.length||N("failed sanity: "+a);return k},na=function(a,b,c,d){a=ma(a);fa.test(c)||N("invalid_callback");b=P(b);d=d&&d.length?P(d):null;var e=
function(a){return encodeURIComponent(a).replace(/%2C/g,",")};return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.a?"/am="+e(a.a):"",a.c?"/rs="+e(a.c):"",a.f?"/t="+e(a.f):"","/cb=",e(c)].join("")},ma=function(a){"/"!==a.charAt(0)&&N("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))N("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);
break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),l=decodeURIComponent(f[0]),k=decodeURIComponent(f[1]);2==f.length&&l&&k&&(a[l]=a[l]||k)}b="/"+c.join("/");da.test(b)||N("invalid_prefix");c=0;for(d=O.length;c<d;++c)O[c].test(b)&&N("invalid_prefix");c=Q(a,"k",!0);d=Q(a,"am");e=Q(a,"rs");a=Q(a,"t");return{pathPrefix:b,version:c,a:d,c:e,f:a}},P=function(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");ha.test(e)&&b.push(e)}return b.join(",")},
Q=function(a,b,c){a=a[b];!a&&c&&N("missing: "+b);if(a){if(ea.test(a))return a;N("invalid: "+b)}return null},ka=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,ja=/\/cb=/g,ia=/\/\//g,oa=function(){var a=B();if(!a)throw Error("Bad hint");return a};L.m=function(a,b,c,d){(a=a[0])||N("missing_hint");return"https://apis.google.com"+na(a,b,c,d)};var R=decodeURI("%73cript"),S=/^[-+_0-9\/A-Za-z]+={0,2}$/,T=function(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c},U=function(){var a=A.nonce;return void 0!==a?a&&a===String(a)&&a.match(S)?a:A.nonce=null:h.querySelector?(a=h.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(S)?A.nonce=a:A.nonce=null):null:null},pa=function(a){if("loading"!=h.readyState)V(a);
else{var b=U(),c="";null!==b&&(c=' nonce="'+b+'"');h.write("<"+R+' src="'+encodeURI(a)+'"'+c+"></"+R+">")}},V=function(a){var b=h.createElement(R);b.setAttribute("src",a);a=U();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=h.getElementsByTagName(R)[0])?a.parentNode.insertBefore(b,a):(h.head||h.body||h.documentElement).appendChild(b)},qa=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<M.length;d++){var e=M[d][0],f=M[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}},ra=function(a,
b,c){X(function(){var c=b===B()?u(z,"_",w()):w();c=u(C(b),"_",c);a(c)},c)},Z=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);qa(a,c);b=a?a.split(":"):[];var d=c.h||oa(),e=u(A,"ah",w());if(e["::"]&&b.length){a=[];for(var f=null;f=b.shift();){var l=f.split(".");l=e[f]||e[l[1]&&"ns:"+l[0]||""]||d;var k=a.length&&a[a.length-1]||null,v=k;k&&k.hint==l||(v={hint:l,b:[]},a.push(v));v.b.push(f)}var x=a.length;if(1<x){var y=c.callback;y&&(c.callback=function(){0==--x&&y()})}for(;b=a.shift();)Y(b.b,
c,b.hint)}else Y(b||[],c,d)},Y=function(a,b,c){a=aa(a)||[];var d=b.callback,e=b.config,f=b.timeout,l=b.ontimeout,k=b.onerror,v=void 0;"function"==typeof k&&(v=k);var x=null,y=!1;if(f&&!l||!f&&l)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";k=u(C(c),"r",[]).sort();var H=u(C(c),"L",[]).sort(),E=[].concat(k),W=function(a,b){if(y)return 0;g.clearTimeout(x);H.push.apply(H,p);var d=((z||{}).config||{}).update;d?d(e):e&&u(A,"cu",[]).push(e);if(b){K("me0",a,E);try{ra(b,
c,v)}finally{K("me1",a,E)}}return 1};0<f&&(x=g.setTimeout(function(){y=!0;l()},f));var p=T(a,H);if(p.length){p=T(a,k);var r=u(A,"CP",[]),t=r.length;r[t]=function(a){if(!a)return 0;K("ml1",p,E);var b=function(b){r[t]=null;W(p,a)&&ba(function(){d&&d();b()})},c=function(){var a=r[t+1];a&&a()};0<t&&r[t-1]?r[t]=function(){b(c)}:b(c)};if(p.length){var I="loaded_"+A.I++;z[I]=function(a){r[t](a);z[I]=null};a=la(c,p,"gapi."+I,k);k.push.apply(k,p);K("ml0",p,E);b.sync||g.___gapisync?pa(a):V(a)}else r[t](n)}else W(p)&&
d&&d()};var X=function(a,b){if(A.hee&&0<A.hel)try{return a()}catch(c){b&&b(c),A.hel--,Z("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;}};z.load=function(a,b){return X(function(){return Z(a,b)})};F.bs0=window.gapi._bs||(new Date).getTime();G("bs0");F.bs1=(new Date).getTime();G("bs1");delete window.gapi._bs;}).call(this);
gapi.load("googleapis.proxy",{callback:window["startup"],_c:{"jsl":{"ci":{"deviceType":"desktop","oauth-flow":{"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay","disableOpt":true,"idpIframeUrl":"https://accounts.google.com/o/oauth2/iframe","usegapi":false},"debug":{"reportExceptionRate":0.05,"forceIm":false,"rethrowException":false,"host":"https://apis.google.com"},"enableMultilogin":true,"googleapis.config":{"auth":{"useFirstPartyAuthV2":true}},"isPlusUser":false,"inline":{"css":1},"disableRealtimeCallback":false,"drive_share":{"skipInitCommand":true},"csi":{"rate":0.01},"client":{"cors":false},"isLoggedIn":true,"signInDeprecation":{"rate":0.0},"include_granted_scopes":true,"llang":"en","iframes":{"youtube":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1","methods":["scroll","openwindow"]},"ytsubscribe":{"url":"https://www.youtube.com/subscribe_embed?usegapi\u003d1"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1"},"rbr_s":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"},":source:":"3p","playemm":{"url":"https://play.google.com/work/embedded/search?usegapi\u003d1\u0026usegapi\u003d1"},"savetoandroidpay":{"url":"https://pay.google.com/gp/v/widget/save"},"blogger":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1","methods":["scroll","openwindow"]},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1"},"partnersbadge":{"url":"https://www.gstatic.com/partners/badge/templates/badge.html?usegapi\u003d1"},"dataconnector":{"url":"https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi\u003d1"},"surveyoptin":{"url":"https://www.google.com/shopping/customerreviews/optin?usegapi\u003d1"},":socialhost:":"https://apis.google.com","shortlists":{"url":""},"hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1"},"post":{"params":{"url":""},"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1"},":gplus_url:":"https://plus.google.com","signin":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1","methods":["onauth"]},"rbr_i":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"},"donation":{"url":"https://onetoday.google.com/home/donationWidget?usegapi\u003d1"},"share":{"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1"},"plusone":{"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1"},"comments":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1","methods":["scroll","openwindow"]},":im_socialhost:":"https://plus.googleapis.com","backdrop":{"url":"https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi\u003d1"},"visibility":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete"},"additnow":{"url":"https://apis.google.com/marketplace/button?usegapi\u003d1","methods":["launchurl"]},":signuphost:":"https://plus.google.com","ratingbadge":{"url":"https://www.google.com/shopping/customerreviews/badge?usegapi\u003d1"},"appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},"follow":{"url":":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1"},"community":{"url":":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1"},"sharetoclassroom":{"url":"https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi\u003d1"},"ytshare":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1"},"plus":{"url":":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1"},"family_creation":{"params":{"url":""},"url":"https://families.google.com/webcreation?usegapi\u003d1\u0026usegapi\u003d1"},"commentcount":{"url":":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1"},"configurator":{"url":":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1"},"zoomableimage":{"url":"https://ssl.gstatic.com/microscope/embed/"},"appfinder":{"url":"https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi\u003d1"},"savetowallet":{"url":"https://pay.google.com/gp/v/widget/save"},"person":{"url":":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1"},"savetodrive":{"url":"https://drive.google.com/savetodrivebutton?usegapi\u003d1","methods":["save"]},"page":{"url":":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card"}}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.en.1FVftwDXVr4.O/am\u003dgQ/rt\u003dj/d\u003d1/rs\u003dAGLTcCO8eZmhlBpmaz2SATW6x0mB0ohwjg/m\u003d__features__","u":"https://apis.google.com/js/googleapis.proxy.js?onload\u003dstartup","hee":true,"fp":"24a3d1b5d9ae5842edd68bdd91cee39fd7b07ca0","dpo":false},"fp":"24a3d1b5d9ae5842edd68bdd91cee39fd7b07ca0","annotation":["interactivepost","recobar","signin2","autocomplete","profile"],"bimodal":["signin","share"]}});