"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,_toPropertyKey(c.key),c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function _toPropertyKey(a){var b=_toPrimitive(a,"string");return"symbol"===_typeof(b)?b:b+""}function _toPrimitive(a,b){if("object"!==_typeof(a)||null===a)return a;var c=a[Symbol.toPrimitive];if(c!==void 0){var d=c.call(a,b||"default");if("object"!==_typeof(d))return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}// globals
var CFL={UA:{raw:function(){return navigator.userAgent},is:function(a){CFL.UA.raw();if("issp"===a)return CFL.UA.isSp()},isSp:function(){var a=CFL.UA.raw();return 0<a.indexOf("iPhone")||0<a.indexOf("iPod")||0<a.indexOf("Android")&&0<a.indexOf("Mobile")},isTablet:function isTablet(){var a=CFL.UA.raw();if(0<a.indexOf("Android")&&0<a.indexOf("Mobile"));else if(-1<a.indexOf("iPad")||-1<a.indexOf("Macintosh")&&CFL.UA.Device.isTouch()||0<a.indexOf("Android"))return!0;return!1},isEdge:function isEdge(){return-1!=this.raw().indexOf("Edge")},isIE:function isIE(){CFL.UA.raw();return-1!=this.raw().indexOf("Trident")}},Device:{isTouch:function isTouch(){return"ontouchend"in document}}},isMobile=function(){return window.matchMedia("(max-width: "+APP.bp.mobile+"px)").matches},isPortrait=function(){var a=null;if("orientation"in window){var b=window.innerWidth<window.innerHeight,c=0==window.orientation%180;a=b&&c||!(b||c)}if("orientation"in window){// defaultOrientationがtrueの場合、window.orientationが0か180の時は縦
// defaultOrientationがfalseの場合、window.orientationが-90か90の時は横
var d=0==window.orientation%180;return!!(d&&a||!(d||a))}},cookie={/**
	 * 取得
	 * @param {string} cookieName 取得するCookieの名前
	 */get:function get(a){if(!navigator.cookieEnabled)return!1;for(var b=document.cookie,c=b.split(";"),d={},e=[],f="",g="",h=function hashLength(a){var b=0,c=!1;if("object"!==_typeof(a))return!1;for(c in a)b++;return b},j=0,k=c.length;j<k;j++)c[j]&&""!==c[j]&&(e=c[j].split("="),f=e[0].replace(/^\s+/,""),g="",e[1]&&(g=decodeURIComponent(e[1])),d[f]=g);return 0<h(d)?a&&a in d?d[a]:d:""},/**
	 * 設定
	 * @param {string} cookieName 設定するCookieの名前
	 * @param {string} value 設定する値
	 * @param {string} domain 有効ドメイン
	 * @param {string} path 有効パス
	 * @param {string} expires 有効期限
	 * @param {boolean} secure セキュアとするか
	 * @return {boolean} 設定に成功した場合はtrue、失敗した場合はfalseを返す
	 */set:function set(a,b,c,d,e,f){if(!navigator.cookieEnabled||!a||!b)return!1;var g,h,i,j,k=a+"="+encodeURIComponent(b)+";";return c&&(k+="domain="+c+";"),d&&(k+="path="+d+";"),e&&(h=new Date,i=h.getTime(),j=i+60*(60*1e3)*e,g=new Date(j),k+="expires="+g.toGMTString()+";"),f&&!0===f&&location.protocol.match(/https/)&&(k+="secure"),document.cookie=k,!0},/**
	 * 削除
	 * @param {string} cookieName 削除するCookieの名前
	 * @return {boolean} 削除に成功した場合はtrue、失敗した場合はfalseを返す
	 */del:function del(a){if(!navigator.cookieEnabled||!a)return!1;var b=this.get();if(b[a]){var c=a+"=;",d=new Date(0);return c+="expires="+d.toGMTString()+"",document.cookie=c,!0}return!1}},ImgParallax=/*#__PURE__*/function(){function a(b,c){_classCallCheck(this,a),this.el=b,0<$("."+this.el).length&&this.event()}return _createClass(a,[{key:"event",value:function event(){var a=this;this.para_ele=document.querySelectorAll("."+this.el),this.para_ele.forEach(function(b,c){a.translateY=b.classList.contains("js-parallax--reverse")?"20px":"-20px",b.classList.add(a.el+c),gsap.to("."+a.el+c+" img",{translateY:a.translateY,scrollTrigger:{trigger:"."+a.el+c,// 要素がビューポートに入ったときにアニメーション開始
start:"top bottom",scrub:3}})})}}]),a}(),InviewEvent=/*#__PURE__*/function(){function a(b,c){_classCallCheck(this,a),this.el=b,this.all=this.el+"-all",this.eachUp=this.el+"-each",this.eachItem=this.el+"-eachItem",this.eachItemFast=this.el+"-eachItem-fast",this.eachItemDelay=this.el+"-eachItem-delay",0<$(this.el).length&&this.event()}return _createClass(a,[{key:"event",value:function event(){var a=this,b={threshold:[0,.05,.1,1]},c={threshold:[0,.9,1]},d=new IntersectionObserver(function(b){b.forEach(function(b){var c=b.target;.05<=b.intersectionRatio&&(c.classList.add("is-inview"),c.classList.contains("js-inview-each")&&a.inviewEachUp(c),c.classList.contains("js-inview-lottie")&&a.inviewLottie(c),d.unobserve(c))})},b),f=new IntersectionObserver(function(b){b.forEach(function(b){var c=b.target;.9<=b.intersectionRatio?(c.classList.add("is-inview"),c.classList.contains("js-inview-each")&&a.inviewEachUp(c),f.unobserve(c)):c.classList.remove("is-inview")})},c),g=document.querySelectorAll(this.el),h=document.querySelectorAll(this.all);g.forEach(function(a){d.observe(a)}),h.forEach(function(a){f.observe(a)})}},{key:"inviewEachUp",value:function inviewEachUp(a){$(a).find(this.eachItem).each(function(a,b){gsap.to($(b),{// duration: 0.8,
// alpha: 1,
delay:.2*a,// y: 0,
// x: 0,
onComplete:function onComplete(){$(b).addClass("is-inview")}})}),$(a).find(this.eachItemFast).each(function(a,b){gsap.to($(b),{// duration: 0.8,
// alpha: 1,
delay:.1*a,// y: 0,
// x: 0,
onComplete:function onComplete(){$(b).addClass("is-inview")}})}),$(a).find(this.eachItemDelay).each(function(a,b){gsap.to($(b),{// duration: 0.8,
// alpha: 1,
delay:.5*a,// y: 0,
// x: 0,
onComplete:function onComplete(){$(b).addClass("is-inview")}})})}},{key:"inviewLottie",value:function inviewLottie(a){$(a).hasClass("js-lottie-flow")&&lottie.flow(),$(a).hasClass("js-lottie-no01")&&lottie.no01(),$(a).hasClass("js-lottie-no02")&&lottie.no02(),$(a).hasClass("js-lottie-no03")&&lottie.no03(),$(a).hasClass("js-lottie-no04")&&lottie.no04(),$(a).hasClass("js-lottie-no05")&&lottie.no05(),$(a).hasClass("js-lottie-no06")&&lottie.no06(),$(a).hasClass("js-lottie-no07")&&lottie.no07()}}]),a}();// 参考サイト
// https://hacknote.jp/archives/15289/
//noScroll
//DOMContentLoaded
//images resources loaded
//after loading animation
(function(){})(),$(function(){}),$(window).on("load",function(){$(window).trigger("loading")}),$(window).on("loading",function(){var a=new ImgParallax("js-parallax"),b=new InviewEvent(".js-inview")});
//# sourceMappingURL=../../_cache/_maps/scripts.js.map