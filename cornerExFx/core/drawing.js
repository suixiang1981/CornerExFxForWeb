define(["require","exports"],function(i,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function i(){}i.drawHollowArc=function(i,t,a,o,h,c,n){if(t===void 0){t=150}if(a===void 0){a=150}if(o===void 0){o=0}if(h===void 0){h=4}if(c===void 0){c=100}if(n===void 0){n=150}i.beginPath();i.moveTo(c*Math.cos(o)+t,c*Math.sin(o)+a);i.lineTo(n*Math.cos(o)+t,n*Math.sin(o)+a);var r=o;while(h-r>Math.PI/4){this.arcTo(i,t,a,r,r+Math.PI/4,n);r=r+Math.PI/4}this.arcTo(i,t,a,r,h,n);i.lineTo(c*Math.cos(h)+t,c*Math.sin(h)+a);r=h;while(r-o>Math.PI/4){this.arcTo(i,t,a,r,r-Math.PI/4,c);r=r-Math.PI/4}this.arcTo(i,t,a,r,o,c);i.closePath()};i.arcTo=function(i,t,a,o,h,c){if(o===void 0){o=0}if(h===void 0){h=4}if(c===void 0){c=150}var n=Math.tan(h-o)*c/(1+1/Math.cos(h-o));var r=-n*Math.sin(o);var e=n*Math.cos(o);try{i.arcTo(c*Math.cos(o)+t+r,c*Math.sin(o)+a+e,c*Math.cos(h)+t,c*Math.sin(h)+a,c)}catch(i){}};return i}();t.Drawing=a});