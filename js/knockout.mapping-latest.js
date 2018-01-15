/// Knockout Mapping plugin v2.4.3
/// (c) 2013 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/
/// License: MIT (http://www.opensource.org/licenses/mit-license.php)
/// Forked by: https://github.com/bennieswart/knockout.mapping
(function(d){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?d(require("knockout"),exports):"function"===typeof define&&define.amd?define(["knockout","exports"],d):d(ko,ko.mapping={})})(function(d,f){function T(){for(var b=arguments,c=b.length,a={},d=[],g,f,k;c--;)for(k=b[c],g=k.length;g--;)f=k[g],a[f]||(a[f]=1,d.push(f));return d}function z(b,c){var a;for(a in c)if(c.hasOwnProperty(a)&&c[a]){var d=f.getType(b[a]);a&&b[a]&&"array"!==d&&"string"!==d?z(b[a],c[a]):"array"===
f.getType(b[a])&&"array"===f.getType(c[a])?b[a]=T(b[a],c[a]):b[a]=c[a]}}function G(b,c){var a={};z(a,b);z(a,c);return a}function A(b,c){for(var a=G({},b),d=M.length-1;0<=d;d--){var f=M[d];a[f]&&(a[""]instanceof Object||(a[""]={}),a[""][f]=a[f],delete a[f])}c&&(a.ignore=l(c.ignore,a.ignore),a.include=l(c.include,a.include),a.copy=l(c.copy,a.copy),a.observe=l(c.observe,a.observe),a.atomic=l(c.atomic,a.atomic));a.ignore=l(a.ignore,h.ignore);a.include=l(a.include,h.include);a.copy=l(a.copy,h.copy);a.observe=
l(a.observe,h.observe);a.atomic=l(a.atomic,h.atomic);a.mappedProperties=a.mappedProperties||{};a.copiedProperties=a.copiedProperties||{};return a}function l(b,c){"array"!==f.getType(b)&&(b="undefined"===f.getType(b)?[]:[b]);"array"!==f.getType(c)&&(c="undefined"===f.getType(c)?[]:[c]);return d.utils.arrayGetDistinctValues(b.concat(c))}function U(b,c){var a=d.dependentObservable;d.dependentObservable=function(a,c,e){e=e||{};a&&"object"==typeof a&&(e=a);var f=e.deferEvaluation,g=!1,k=function(a){var c=
d.dependentObservable;d.dependentObservable=w;var e=d.isWriteableObservable(a);d.dependentObservable=c;c=w({read:function(){g||(d.utils.arrayRemoveItem(b,a),g=!0);return a.apply(a,arguments)},write:e&&function(b){return a(b)},deferEvaluation:!0});c._wrapper=!0;c.__DO=a;return c};e.deferEvaluation=!0;a=new w(a,c,e);f||(a=k(a),b.push(a));return a};d.dependentObservable.fn=w.fn;d.computed=d.dependentObservable;var e=c();d.dependentObservable=a;d.computed=d.dependentObservable;return e}function H(b,c,
a,e,g,v,k){var h="array"===f.getType(d.utils.unwrapObservable(c));v=v||"";if(f.isMapped(b)){var m=d.utils.unwrapObservable(b).__ko_mapping__;a=G(m,a)}var l=k||g,r=function(){return a[e]&&a[e].create instanceof Function},w=function(b){return U(I,function(){return d.utils.unwrapObservable(g)instanceof Array?a[e].create({data:b||c,parent:l,skip:O}):a[e].create({data:b||c,parent:l})})},u=function(){return a[e]&&a[e].update instanceof Function},x=function(b,f){var N={data:f||c,parent:l,target:d.utils.unwrapObservable(b)};
d.isWriteableObservable(b)&&(N.observable=b);return a[e].update(N)};if(k=D.get(c))return k;e=e||"";if(h){h=[];var t=!1,n=function(a){return a};a[e]&&a[e].key&&(n=a[e].key,t=!0);d.isObservable(b)||(b=d.observableArray([]),b.mappedRemove=function(a){var c="function"==typeof a?a:function(b){return b===n(a)};return b.remove(function(a){return c(n(a))})},b.mappedRemoveAll=function(a){var c=E(a,n);return b.remove(function(a){return-1!=d.utils.arrayIndexOf(c,n(a))})},b.mappedDestroy=function(a){var c="function"==
typeof a?a:function(b){return b===n(a)};return b.destroy(function(a){return c(n(a))})},b.mappedDestroyAll=function(a){var c=E(a,n);return b.destroy(function(a){return-1!=d.utils.arrayIndexOf(c,n(a))})},b.mappedIndexOf=function(a){var c=E(b(),n);a=n(a);return d.utils.arrayIndexOf(c,a)},b.mappedGet=function(a){return b()[b.mappedIndexOf(a)]},b.mappedCreate=function(a){if(-1!==b.mappedIndexOf(a))throw Error("There already is an object with the key that you specified.");var c=r()?w(a):a;u()&&(a=x(c,a),
d.isWriteableObservable(c)?c(a):c=a);b.push(c);return c});k=E(d.utils.unwrapObservable(b),n).sort();m=E(c,n);t&&m.sort();t=d.utils.compareArrays(k,m);k={};var J,B=d.utils.unwrapObservable(c),z={},A=!0;m=0;for(J=B.length;m<J;m++){var p=n(B[m]);if(void 0===p||p instanceof Object){A=!1;break}z[p]=B[m]}B=[];var C=0;m=0;for(J=t.length;m<J;m++){p=t[m];var y=v+"["+m+"]";switch(p.status){case "added":var F=A?z[p.value]:K(d.utils.unwrapObservable(c),p.value,n);var q=H(void 0,F,a,e,b,y,g);r()||(q=d.utils.unwrapObservable(q));
y=P(d.utils.unwrapObservable(c),F,k);q===O?C++:B[y-C]=q;k[y]=!0;break;case "retained":F=A?z[p.value]:K(d.utils.unwrapObservable(c),p.value,n);q=K(b,p.value,n);H(q,F,a,e,b,y,g);y=P(d.utils.unwrapObservable(c),F,k);B[y]=q;k[y]=!0;break;case "deleted":q=K(b,p.value,n)}h.push({event:p.status,item:q})}b(B);a[e]&&a[e].arrayChanged&&d.utils.arrayForEach(h,function(b){a[e].arrayChanged(b.event,b.item)})}else if(!Q(c)||a.atomic.some(function(a){return a(c,v)}))switch(f.getType(c)){case "function":u()?d.isWriteableObservable(c)?
(c(x(c)),b=c):b=x(c):b=c;break;default:if(d.isWriteableObservable(b))return q=u()?x(b):d.utils.unwrapObservable(c),b(q),q;r()||u();b=r()?w():d.observable(d.utils.unwrapObservable(c));u()&&b(x(b))}else{b=d.utils.unwrapObservable(b);if(!b){if(r())return t=w(),u()&&(t=x(t)),t;if(u())return x(t);b={}}u()&&(b=x(b));D.save(c,b);if(u())return b;R(c,function(e){var f=v.length?v+"."+e:e;if(-1==d.utils.arrayIndexOf(a.ignore,f))if(-1!=d.utils.arrayIndexOf(a.copy,f))b[e]=c[e];else if("object"!=typeof c[e]&&"array"!=
typeof c[e]&&0<a.observe.length&&-1==d.utils.arrayIndexOf(a.observe,f))b[e]=c[e],a.copiedProperties[f]=!0;else{var g=D.get(c[e]),k=H(b[e],c[e],a,e,b,f,b);g=g||k;if(0<a.observe.length&&-1==d.utils.arrayIndexOf(a.observe,f))b[e]=d.utils.unwrapObservable(g),a.copiedProperties[f]=!0;else{if(d.isWriteableObservable(b[e])){if(g=d.utils.unwrapObservable(g),b[e]()!==g)b[e](g)}else g=void 0===b[e]?g:d.utils.unwrapObservable(g),b[e]=g;a.mappedProperties[f]=!0}}})}return b}function P(b,c,a){for(var e=0,d=b.length;e<
d;e++)if(!0!==a[e]&&b[e]===c)return e;return null}function S(b,c){var a;c&&(a=c(b));"undefined"===f.getType(a)&&(a=b);return d.utils.unwrapObservable(a)}function K(b,c,a){b=d.utils.unwrapObservable(b);for(var e=0,f=b.length;e<f;e++){var h=b[e];if(S(h,a)===c)return h}throw Error("When calling ko.update*, the key '"+c+"' was not found!");}function E(b,c){return d.utils.arrayMap(d.utils.unwrapObservable(b),function(a){return c?S(a,c):a})}function R(b,c){if("array"===f.getType(b))for(var a=0;a<b.length;a++)c(a);
else for(a in b)c(a)}function Q(b){var c=f.getType(b);return("object"===c||"array"===c)&&null!==b}function V(){var b=[],c=[];this.save=function(a,e){var f=d.utils.arrayIndexOf(b,a);0<=f?c[f]=e:(b.push(a),c.push(e))};this.get=function(a){a=d.utils.arrayIndexOf(b,a);return 0<=a?c[a]:void 0}}function C(){var b={},c=function(a){try{var c=a}catch(g){c="$$$"}a=b[c];void 0===a&&(a=new V,b[c]=a);return a};this.save=function(a,b){c(a).save(a,b)};this.get=function(a){return c(a).get(a)}}var w=d.dependentObservable,
L=0,I,D,M=["create","update","key","arrayChanged"],O={},r={include:["_destroy"],ignore:[],copy:[],observe:[],atomic:[]},h=r;f.isMapped=function(b){return(b=d.utils.unwrapObservable(b))&&b.__ko_mapping__};f.fromJS=function(b){if(0==arguments.length)throw Error("When calling ko.fromJS, pass the object you want to convert.");try{L++||(I=[],D=new C);var c,a;2==arguments.length&&(arguments[1].__ko_mapping__?a=arguments[1]:c=arguments[1]);3==arguments.length&&(c=arguments[1],a=arguments[2]);a&&(c=G(c,a.__ko_mapping__));
c=A(c);var d=H(a,b,c);a&&(d=a);if(!--L)for(;I.length;){var f=I.pop();f&&(f(),f.__DO.throttleEvaluation=f.throttleEvaluation)}d.__ko_mapping__=G(d.__ko_mapping__,c);return d}catch(v){throw L=0,v;}finally{D=new C}};f.fromJSON=function(b){var c=d.utils.parseJson(b);arguments[0]=c;return f.fromJS.apply(this,arguments)};f.updateFromJS=function(b){throw Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!");};f.updateFromJSON=function(b){throw Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!");
};f.toJS=function(b,c){h||f.resetDefaultOptions();if(0==arguments.length)throw Error("When calling ko.mapping.toJS, pass the object you want to convert.");if("array"!==f.getType(h.ignore))throw Error("ko.mapping.defaultOptions().ignore should be an array.");if("array"!==f.getType(h.include))throw Error("ko.mapping.defaultOptions().include should be an array.");if("array"!==f.getType(h.copy))throw Error("ko.mapping.defaultOptions().copy should be an array.");c=A(c,b.__ko_mapping__);return f.visitModel(b,
function(a){return d.utils.unwrapObservable(a)},c)};f.toJSON=function(b,c){var a=f.toJS(b,c);return d.utils.stringifyJson(a)};f.defaultOptions=function(){if(0<arguments.length)h=arguments[0];else return h};f.resetDefaultOptions=function(){h={include:r.include.slice(0),ignore:r.ignore.slice(0),copy:r.copy.slice(0),observe:r.observe.slice(0),atomic:r.atomic.slice(0)}};f.getType=function(b){if(b&&"object"===typeof b){if(b.constructor===Date)return"date";if(b.constructor===Array)return"array"}return typeof b};
f.visitModel=function(b,c,a){a=a||{};a.visitedObjects=a.visitedObjects||new C;var e=d.utils.unwrapObservable(b);if(Q(e)){a=A(a,e.__ko_mapping__);c(b,a.parentName);var g="array"===f.getType(e)?[]:{}}else return c(b,a.parentName);a.visitedObjects.save(b,g);var h=a.parentName;R(e,function(b){if(!a.ignore||-1==d.utils.arrayIndexOf(a.ignore,b)){var k=e[b],m=a,l=h||"";"array"===f.getType(e)?h&&(l+="["+b+"]"):(h&&(l+="."),l+=b);m.parentName=l;if(-1!==d.utils.arrayIndexOf(a.copy,b)||-1!==d.utils.arrayIndexOf(a.include,
b)||!e.__ko_mapping__||!e.__ko_mapping__.mappedProperties||e.__ko_mapping__.mappedProperties[b]||!e.__ko_mapping__.copiedProperties||e.__ko_mapping__.copiedProperties[b]||"array"===f.getType(e))switch(f.getType(d.utils.unwrapObservable(k))){case "object":case "array":case "undefined":m=a.visitedObjects.get(k);g[b]="undefined"!==f.getType(m)?m:f.visitModel(k,c,a);break;default:g[b]=c(k,a.parentName)}}});return g}});
